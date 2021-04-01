var std = require('../model/student').Studentmode
var parent = require('../model/parent').parent_model
var classmodem = require('../model/class').Class_model

const xlsxFile = require('read-excel-file/node');

const student_index = (req,res) => {
    res.send('Student Index Page');
};

const student_create = (req,res) => {
    res.send('Student Create Page');
};

const student_create_post = async (req,res) => {
    const {urlexcel} = req.body
    xlsxFile(urlexcel+'').then((rows) => {
        rows.shift();
        rows.shift();
        rows.shift();
        var student, parentdata, classdata = {}
        rows.forEach((col) => {
            console.log(col, 'col')
            for (var i = 0; i < col.length; i++) {
                student = {
                    identification_number: col[1],
                    full_name_ar: col[2],
                    full_name_en: col[3],
                    phone_number: col[11],
                    birthday_date: col[4],
                    gender: col[6],
                    address: col[10],
                    nationality: col[8],
                    religion: col[7]
                }
                parentdata = {
                    identification_number: col[16],
                    full_name_ar: col[17],
                    phone: col[11],
                    Job: col[19]
                }
                classdata = {
                    grade: col[13],
                    room: col[15],
                    branch: col[14]
                }

                console.log(col[i], '   ', i)
            }
        })
        var newparent = new parent(parentdata)
        newparent.save().then((data) => {
            console.log('success ^_^', data)
            student.parent = data
            var newclass = new classmodem(classdata)
            newclass.save().then((data) => {
                console.log('success ^_^')
                student.classforignkey = data
                var newstd = new std(student)
                console.log(student.parent)
                newstd.save().then(() => {
                    console.log('success ^_^')
                }).catch((err) => {
                    { console.log(err, 'faild ^_^') }
                })
            }).catch((err) => {
                { console.log(err, 'faild ^_^') }
            })
        }).catch((err) => {
          { console.log(err, 'faild ^_^') }
        })    
    }).catch((err) => { console.log(err, 'err') })
}

const student_edit = (req,res) => {
    res.send(req.params.id)
};

const student_update = async (req,res) => {
    res.send("Student Update")
};

const student_delete = async (req,res) => {
    const studentID = req.params.id;  

    try {
        await std.findByIdAndDelete({_id: studentID})
        .then(result => {
            // res.status(201).json({ redirect: '/url' });
            res.send('Deleted Successfully');
        });
    } catch(err) {
        res.status(400).json({err});
    }
};


module.exports = {
    student_index, student_create, student_create_post, student_edit, student_update, student_delete
};