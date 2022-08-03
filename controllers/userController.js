const db = require('../models');
const path = require("path");
const fs = require("fs");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const uploadFolder = path.join( __dirname , '/../public/images/uploads/user');

//Import model
const User = db.user;

//const add new hero section data
const registrationUser = async (req,res) => {
    try {

        //find user have or not
        const findUser = await User.findOne({ where : {email: req.body.email}})

        if (findUser) {
            res.status(409).send({
                status: false,
                message: "use another email this email used before",
                data: null,
                statusCode: 409
            })
        } else{

            // password generated hashed
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            //upload image to server and get name
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
                name:req.body.name,
                email:req.body.email,
                password : hashedPassword,
                userRole : req.body.userRole ? req.body.userRole : 'user',
                image: finalFileName,
                isDeleted: false,
                active: req.body.active ? req.body.active : false
            }

            //inset about us data
            const newUserData = await User.create(data);

            res.status(200).send({
                status: true,
                message: "Data Added Successfull",
                data : newUserData,
                statusCode: 200
            })
        }

      

    } catch (error) {
        res.send({
          status: false,
          message: error.message,
          data : null,
          statusCode: 500
        }) 
    }
}


//login user
// login user

 const loginUser =  async (req, res) => {

  try {
    // find a user who has this email/username
    const user = await User.findOne({ where : {email: req.body.email , active : true}})

    if (user && user.id) {

      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (isValidPassword) {
        // prepare the user object to generate token
        const userObject = {
          userid: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          userRole: user.userRole
        };

        // generate token
        const token = jwt.sign(userObject, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRY,
        });

        const data ={ ...userObject , jwtToken: token }

        res.send({
            status: true,
            message: "data fetch successfull",
            data : data,
            statusCode: 200
        })

      } else {
        res.send({
            status: false,
            message: "Login failed! Please try again.",
            data : null,
            statusCode: 500
        })
      }
    } else {
      res.send({
          status: false,
          message: "Login failed! Please try again.",
          data : null,
          statusCode: 500
      })
    }
  } catch (err) {
    
    res.send({
        status: false,
        message: error.message,
        data : null,
        statusCode: 500
    })

  }
}


module.exports = {
    registrationUser,
    loginUser
}