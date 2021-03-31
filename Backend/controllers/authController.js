const User = require('../model/user');
const School = require('../model/school');
const Role = require('../model/role');
const Permissions = require('../model/permission');
const jwt = require('jsonwebtoken');

const handleError = (err) => {
    const errors = { email: '', password: '' };

    // Incorrect Email When Login
    if(err.message === 'Incorrect Email') {
        errors.email = 'The email is not registered';
    }

    // Incorrect Password When Login
    if(err.message === 'Wrong Password') {
        errors.password = 'The password is incorrect';
    }

    // Duplicate error code
    if(err.code === 11000) {
        errors.email = 'Email Already Exist';
        return errors;
    }

    // Validations Errors
    if(err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, 'Mhmod nodejs course', {
        expiresIn: maxAge
    });
};

const auth_singup = (req,res) => {
    // res.render('signup');
    return 'signup';
};

const auth_login = (req,res) => {
    res.send('Login View');
};

const auth_signup_post = async (req,res) => {
    const {email, password, identification_number, school_Name, city, ministry, phone_number} = req.body;
    const permission = await Permissions.create({edit_employees: true, edit_students: true, edit_parents: true, edit_sections: true, edit_materials: true});
    const role = await Role.create({name: "Admin", permissions_id: permission._id});
    
    try{
        const user = await User.create({ email, password, username: identification_number, role_Id: role._id });
        try {
            const school = await School.create({ school_Name, city, ministry, phone_number, managerId: user._id });
            const token = createToken(user._id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(201).json({ user: user._id });
        } catch(err) {
            await User.deleteOne({ _id: user._id });
            const errors = handleError(err);
            res.status(400).json({errors});
        }
    } catch(err) {
        await Permissions.deleteOne({ _id: permission._id });
        await Role.deleteOne({ _id: role._id });
        const errors = handleError(err);
        res.status(400).json({errors});
    }
};

const auth_login_post = async (req,res) => {
    const {username, password} = req.body;
    
    if(validateEmail(username)) {
        try {
            const user = await User.loginUseEmail(username, password);
            const token = createToken(user._id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(201).json({ user: user._id });
        } 
        catch(err) {
            const errors = handleError(err);
            res.status(400).json({errors});
        }
    } else if (!isNaN(username)){
        try {
            const user = await User.loginUsID(username, password);
            const token = createToken(user._id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(201).json({ user: user._id });
        } 
        catch(err) {
            const errors = handleError(err);
            res.status(400).json({errors});
        }
    } else {
        res.send('Unnone');
    }
};

const auth_logout = (req,res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
};

function validateEmail(email) 
{
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
}

const validate = (req,res) => {
    console.log(validateEmail('anystring@anystring.'));
};

module.exports = {
    auth_singup, auth_login, auth_signup_post, auth_login_post, auth_logout
};