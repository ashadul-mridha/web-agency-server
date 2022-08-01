const router = require('express').Router();

//import all controller 

const{
        addHeroSection,
        getHeroSectionData, 
        getHeroSectionDataByID, 
        updateOneHeroSection,
        deleteData
    } = require('../controllers/heroSectionController');

// add new data
router.post('/' , addHeroSection)
//get all data
router.get('/' , getHeroSectionData)
//get single data 
router.get('/:id' , getHeroSectionDataByID)
//update single data 
router.put('/:id' , updateOneHeroSection)
//delete single data 
router.delete('/:id' , deleteData)

module.exports = router;