const axios = require ('axios');
const { Country, Activity} = require ('../db')


const getCountries = async () =>{
    const datadb = await Country.findAll({
        include: {
            model : Activity
        }
    })
    if(datadb.length) return datadb;
    
    const countries = (await axios('https://restcountries.com/v3/all')).data
    const data = countries.map(cont => (
        {
            id : cont.cca3,
            name :cont.name.official,
            flag : cont.flags[0],
            continent: cont.continents[0],
            capital : cont.capital? cont.capital[0]:'null',
            subregion: cont.subregion ? cont.subregion : 'null',
            area : cont.area,
            population : cont.population,
        }))
        
    await Country.bulkCreate(data)
    return data;
}



module.exports={
        getCountries,
   }   

