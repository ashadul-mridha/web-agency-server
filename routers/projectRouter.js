const router = require('express').Router();

//import all controller 

const{
    addProject,
    getAllData,
    getDataByID,
    updateDataByID,
    deleteDataById
} = require('../controllers/projectController');

// add new data
router.post('/' , addProject)
//get all data
router.get('/' , getAllData)
//get single data 
router.get('/:id' , getDataByID)
//update single data 
router.put('/:id' , updateDataByID)
//delete single data 
router.delete('/:id' , deleteDataById)

module.exports = router;