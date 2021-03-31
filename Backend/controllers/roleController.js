const Role = require('../model/role');
const Permissions = require('../model/permission');

const handleError = (err) => {
    const errors = {  };

    // Duplicate error code
    if(err.code === 11000) {
        errors.email = 'Role name already exist';
        return errors;
    }

    // Validations Errors
    if(err.message.includes('permissions_model validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

const role_index = (req,res) => {
    res.send('Role Index Page');
};

const role_create = (req,res) => {
    res.send('Role Create Page');
};

const role_create_post = async (req,res) => {
    const {name, edit_employees, edit_students, edit_parents, edit_sections, edit_materials} = req.body;
    try{
        const permission = await Permissions.create({ edit_employees, edit_students, edit_parents, edit_sections, edit_materials });
        try {
            const role = await Role.create({ name, permissions_id: permission._id });
            res.status(201).json({ role: role._id });
        } catch(err) {
            const errors = handleError(err);
            res.status(400).json({errors});
        }
    } catch(err) {
        console.log(err);
        // const errors = handleError(err);
        // res.status(400).json({errors});
    }
};

const role_edit = (req,res) => {
    res.send(req.params.id);
};

const role_update = async (req,res) => {
    const roleID = req.params.id;
    const role = await Role.findOne({_id: roleID});    

    try{
        const permissionID = role.permissions_id;
        const permission = await Permissions.findOne({_id: permissionID});
        permission.edit_employees =  req.body.edit_employees;
        permission.edit_students = req.body.edit_students;
        permission.edit_parents = req.body.edit_parents;
        permission.edit_sections = req.body.edit_sections;
        permission.edit_materials = req.body.edit_materials;
        await permission.save();
        try {
            role.name = req.body.name;
            await role.save();
            res.status(201).json({ role, permission });
        } catch(err) {
            const errors = handleError(err);
            res.status(400).json({errors});
        }
    } catch(err) {
        const errors = handleError(err);
        res.status(400).json({errors});
    }
};

const role_delete = async (req,res) => {
    const roleID = req.params.id;
    const role = await Role.findOne({_id: roleID});    

    try{
        const permissionID = role.permissions_id;
        await Permissions.findByIdAndDelete({_id: permissionID});
        try {
            await Role.findByIdAndDelete({_id: roleID})
            .then(result => {
                // res.status(201).json({ redirect: '/url' });
                res.send('Deleted Successfully');
            });
        } catch(err) {
            const errors = handleError(err);
            res.status(400).json({errors});
        }
    } catch(err) {
        const errors = handleError(err);
        res.status(400).json({errors});
    }
};


module.exports = {
    role_index, role_create, role_create_post, role_edit, role_update, role_delete
};