const Employee = require('../models/Employee')

//show the lists of employee

const index = ( req, res, next) => {
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message:'An error occured!'
        })
    })
}

// show single employee
const show = (req,res,next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message:'An error occured!'
        })
    })
}

// add new employee
const store = (req,res,next) =>{
    let employee = new Employee({
        name: req.body.name,
        designation:req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
    })
    employee.save()
    .then(response =>{
        res.json({
            message:'Employee Added Successfully!'
        })
    })
    .catch(error => {
        res.json({
            message:'An error occured!'
        })
    })
}

// update an employee

const update = (req,res) => {
    let employeeID = req.body.employeeID
    let updateData = {
        name: req.body.name,
        designation:req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
    }

    Employee.findByIdAndUpdate(employeeID,{$set: updateData})
    .then(()=>{
        res.json({
            message:'Employee updated Successfully!'
        })
    })
    .catch(error => {
        res.json({
            message:'An error occured!'
        })
    })
}

//delete an employee

const destroy = ( req,res,next) =>{
    let employeeID= req.body.employeeID
    Employee.findByIdAndDelete(employeeID)
    .then(()=>{
        res.json({
            message:'Employee delete Successfully!'
        })
    })
    .catch(error => {
        res.json({
            message:'An error occured!'
        })
    })
}

module.exports={
    index,show,store,update,destroy
}