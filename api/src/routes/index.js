const { Router } = require('express');
const countryRrouts = require('./countryRouts')
const activitiesRouts = require('./activitiesRouts')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countryRrouts)
router.use('/activities', activitiesRouts)


module.exports = router;
