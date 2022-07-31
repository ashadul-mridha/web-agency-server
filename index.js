const express = require('express');
const cors = require('cors');

// import router
const heroSectionRouter = require('./routers/heroSectionRouter');

//import middleware
const { notFoundhandler,  defaultErrorHandler } = require('./middlewares/common/errorHandler');

const app = express();

//data parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//application middleware
app.use(cors());


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

