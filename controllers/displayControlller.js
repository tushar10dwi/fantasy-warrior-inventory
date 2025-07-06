const db = require('../db/queries');

const displayHome = (req,res)=>{
    res.render('index');
}

async function displayWarriors(req,res) {
    const warriors = await db.getAllWarriors();
    // res.send(`All warrior names: ` + warriors.map((warrior)=>warrior.name).join(", "));
    res.render('cards', {
        title: "All Warriors",
        warriors: warriors
    })
}

const displayCatagoryPage = (req,res)=>{
    res.render('catagory');
}

async function displayCatagory(req,res){
    const catagory = req.params.rarity;
    try {
        const warriors = await db.getCatagoryWarrior(catagory);
        res.render('catagoryCard', {
            title: `${req.params.rarity} Warriors`,
            rarity: req.params.rarity,
            warriors: warriors
        });
    }
    catch(error){
        res.send("500: Internal Server Error")
    }
}

const createWarriorGet = (req,res)=>{
    res.render('form');
}

async function createWarriorPost(req,res){
    const {name,sex,weapon,pet,rarity,creator} = req.body;
    await db.createWarrior([name,sex,weapon,pet,rarity,creator]);
    res.redirect('/all');
}

module.exports = {
    displayCatagory,
    displayHome,
    createWarriorGet,
    createWarriorPost,
    displayWarriors,
    displayCatagoryPage
}