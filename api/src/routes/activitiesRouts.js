const { Router } = require ('express')
const {Country, Activity} = require('../db');


const router = Router();

router.post('/', async(req, res) => {
    const {name, difficulty, season, duration, countryId }= req.body;
    if(!name || !difficulty || !season || !duration){
        return res.status(404).send('missing parameters')
    }

    const newActivity = await Activity.create({
        name, 
        difficulty, 
        season, 
        duration
    })
    
    countryId.map( async(el) => {
        const country = await Country.findAll({
            where : { 
                id : el.toUpperCase()
            }
        })
        await newActivity.addCountry(country);
    })
    res.send('Atividad creada')
})

router.get('/', async(req, res) => {
    try {
        let result = await Activity.findAll({
            include: {
                model : Country
            }
        });
        res.send(result)
    } catch (error) {
        console.log(error)
    }
})



module.exports = router;