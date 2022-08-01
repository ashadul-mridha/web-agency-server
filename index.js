const express = require('express');
const cors = require('cors');
const path = require('path');
const fileUpload = require('express-fileupload');

// import router
const heroSectionRouter = require('./routers/heroSectionRouter');

//import middleware
const { notFoundhandler,  defaultErrorHandler } = require('./middlewares/common/errorHandler');

const app = express();

//data parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

//application middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, "public")));


//all router
app.use('/api/heroSection' , heroSectionRouter);

//testing api
app.get('/' , (req , res) => {
    res.send({message : "Hello Web Agency Server"});
})


//not found handler
app.use(notFoundhandler);

//common error handler
app.use(defaultErrorHandler);

// application listen
const PORT = process.env.PORT || 3000;
app.listen(PORT , () => {
    console.log(`app running on port ${PORT}`);
})

