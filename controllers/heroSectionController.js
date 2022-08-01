const db = require('../models');
const path = require("path");

//Import model
const HeroSection = db.heroSections;

//const add new hero section data
const addHeroSection = async (req,res) => {
    try {

      const uploadFolder = path.join( __dirname , '/../public/images/uploads/herosection');

      let finalFileName;

      if (req.files) {

          //get files
          const imageFile = req.files.image;
          const UploadedFilName = imageFile.name;

          const fileExt = path.extname(UploadedFilName);
          const fileNameWithoutExt =
            UploadedFilName
              .replace(fileExt, "")
              .toLowerCase()
              .split(" ")
              .join("-") +
            "-" +
            Date.now();

          finalFileName = fileNameWithoutExt + fileExt;

          const uploadPath = `${uploadFolder}/${finalFileName}`;

          console.log(uploadPath);

          imageFile.mv( uploadPath , (err) => {
            if (err) {
              throw Error('File Not Uploaded')
            }
          })

      }

        let data = {
            title: req.body.title,
            desc:req.body.desc,
            image: finalFileName,
            active: req.body.active ? req.body.active : false
        }


        const newData = await HeroSection.create(data);
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
const getHeroSectionData = async (req, res) => {
    try {
        const data = await HeroSection.findAll({});
        
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
const getHeroSectionDataByID = async (req,res) => {
    try {
        const {id} = req.params;
        const data = await HeroSection.findOne({ where : {id: id}})
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
const updateOneHeroSection = async (req,res) => {
    try {
        const {id} = req.params;
        const data = await HeroSection.update( req.body , { where : {id: id}})
        
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
const deleteData = async (req,res) => {
    try {
        const {id} = req.params;
        await HeroSection.destroy({ where : {id: id}})
        res.status(200).send('Product Delete Successfully');
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
    addHeroSection,
    getHeroSectionData,
    getHeroSectionDataByID,
    updateOneHeroSection,
    deleteData
}