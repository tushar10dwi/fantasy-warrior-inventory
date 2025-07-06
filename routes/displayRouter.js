const {Router} = require('express');
const { displayCatagory, displayHome, displayWarriors, createWarriorGet, createWarriorPost, displayCatagoryPage } = require('../controllers/displayControlller');

const displayRouter = Router();

displayRouter.get('/', displayHome);
displayRouter.get('/all',displayWarriors);
displayRouter.get('/catagory/', displayCatagoryPage);
displayRouter.get('/catagory/:rarity', displayCatagory);
displayRouter.get('/create',createWarriorGet);
displayRouter.post('/create',createWarriorPost);


module.exports = displayRouter;

