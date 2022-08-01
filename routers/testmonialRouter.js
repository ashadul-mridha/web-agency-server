const router = require('express').Router();

//import all controller 

const{
    addTestmonaial,
    getAllData,
    getDataByID,
    updateDataByID,
    deleteDataById
} = require('../controllers/testmonialController');

// add new data
router.post('/' , addTestmonaial)
//get all data
router.get('/' , getAllData)
//get single data 
router.get('/:id' , getDataByID)
//update single data 
router.put('/:id' , updateDataByID)
//delete single data 
router.delete('/:id' , deleteDataById)

module.exports = router;