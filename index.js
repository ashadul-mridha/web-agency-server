const express = require('express');
const cors = require('cors');

const app = express();

//application level middleware
app.use(express.json());
app.use(cors());

//testing api
app.get('/' , (req , res) => {
    res.send({message : "Hello Web Agency Server"});
})

const PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
    console.log(`app running on port ${PORT}`);
})

