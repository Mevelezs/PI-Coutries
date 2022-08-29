const { Router } = require('express');
const { getCountries } = require('../controllers/controllers');
const { Country, Activity} = require('../db');
const router = Router();


router.get('/', async(req, res )=> {
    const { name } = req.query
    try {
        const datadb = await getCountries()
        if(name){
            const countryFound = datadb.filter(count => count.name.toLowerCase().includes(name.toLowerCase()));
            countryFound.length ? res.status(200).send(countryFound): res.status(400).send('Country not found')
        }else{
            res.send(datadb);
        }
    } catch (error) {
        console.log(error) 
    }

})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    if(typeof(id) !== 'string' || id.length !== 3) return res.status(400).send('invalid parameter');
    
    Country.findAll({
            where : { 
                id : id.toUpperCase()
            },
            include: {
                model : Activity
            }
        }) 
        .then(data => {
            if(!data.length){
                return res.status(400).send('Country no found')
            }
                res.status(200).send(data)})
        .catch(err =>{
                return res.status(400).send(err)
        })
    
})




module.exports= router