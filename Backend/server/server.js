const express = require('express');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const AuthRoutes = require('../routes/AuthRoutes');
const RoleRoutes = require('../routes/RoleRoutes');
const SubjectRoutes = require('../routes/SubjectRoutes');
const EmployeeRoutes = require('../routes/EmployeeRoutes');
const StudentRoutes = require('../routes/StudentRoutes');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');app.set('view engine', 'html');

// Middleware
app.use(express.json());
app.use(express.static('public'));

// app.use(bodyParser.json({limit: '10mb', extended: true}))
// app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

app.use(methodOverride('_method'));


// connecting DB
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('DataBase Connected Successfully ^_^ !!!'));
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
 console.log("connect to DB success !*_*");
});

app.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));
res.send('Hello World!')
  });
  

// Auth Routes
app.use(AuthRoutes);

// Role Routes
app.use('/role', RoleRoutes);

// Subject Routes
app.use('/subject', SubjectRoutes);

// Employee Routes
app.use('/employee', EmployeeRoutes);

// Student Routes
app.use('/student', StudentRoutes);


let port = process.env.PORT || 8000;
app.listen(port, () => console.log(`work on ${port}`));
