const db = require('../models');
const path = require("path");
const fs = require("fs");
const uploadFolder = path.join( __dirname , '/../public/images/uploads/aboutus');

//Import model
const Service = db.service;

//const add new hero section data
const addService = async (req,res) => {
    try {

        let data = {
            title:req.body.title,
            desc:req.body.desc,
            serviceListItem: req.body.serviceListItem,
            active: req.body.active ? req.body.active : false
        }

        //inset about us data
        const newData = await Service.create(data);

        res.send({
          status: true,
          message: "Data Added Successfull",
          data : newData,
          statusCode: 200
        })

    } catch (error) {
        res.send({
          status: false,
          message: error.message,
          data : null,
          statusCode: 500
        }) 
    }
}

//get all data
const getAllData = async (req, res) => {
    try {
        const data = await Service.findAll({});
        
        res.send({
          status: true,
          message: "Data Get Successfull",
          data : data,
          statusCode: 200
        })

    } catch (error) {
        res.send({
          status: false,
          message: error.message,
          data : null,
          statusCode: 500
        })
    }
}

//get single data
const getDataByID = async (req,res) => {
    try {
        const {id} = req.params;
        const data = await Service.findOne({ where : {id: id}})
        res.send({
          status: true,
          message: "Data Get Successfull",
          data : data,
          statusCode: 200
        })
    } catch (error) {
        res.send({
          status: false,
          message: error.message,
          data : null,
          statusCode: 500
        }) 
    }
}


//Update single data by using id
const updateDataByID = async (req,res) => {
    try {
        //update id
        const {id} = req.params;

        //update data
        const data = await Service.update( req.body , { where : {id: id}})
        
        res.send({
          status: true,
          message: "Data Update Successfull",
          data : data,
          statusCode: 200
        })

    } catch (error) {
        res.send({
          status: false,
          message: error.message,
          data : null,
          statusCode: 500
        }) 
    }
}

//delete single data by using id
const deleteDataById = async (req,res) => {
    try {
        const {id} = req.params;
        await Service.destroy({ where : {id: id}})
        res.status(200).send('About Us Delete Successfully');
    } catch (error) {
        res.send({
          status: false,
          message: error.message,
          data : null,
          statusCode: 500
        }) 
    }
}

module.exports = {
    addService,
    getAllData,
    getDataByID,
    updateDataByID,
    deleteDataById
}