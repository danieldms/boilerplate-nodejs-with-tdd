const routes = require('express').Router();

routes.use('/', (req, res) => {
    return res.send('ok');
})

module.exports = routes;