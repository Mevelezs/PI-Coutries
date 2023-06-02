const { Router } = require ('express');
const { getActivities } = require('../controllers/controllers');
const {Country, Activity} = require('../db');


const router = Router();

router.post('/', async(req, res) => {
    const {name, difficulty, season, duration, countryId }= req.body;
    if(!name || !difficulty || !season || !duration){
        return res.status(404).send('missing parameters')
    }
    
    let nameFoundinDb = await getActivities();
    nameFoundinDb = nameFoundinDb.filter(el => el.name.toLowerCase() === name.toLowerCase());
    if(nameFoundinDb.length !== 0) return res.status(400).send('Invalid Name');

    const newActivity = await Activity.create({
        name, 
        difficulty, 
        season, 
        duration
    })
    
    countryId.map( async (el) => {
        const country = await Country.findAll({
            where : { 
                id : el.toUpperCase()
            }
        })
        await newActivity.addCountry(country);
    })
    res.send('Ativity Created')
})

router.get('/', async(req, res) => {
    try {
        let result = await getActivities()
        res.send(result)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
