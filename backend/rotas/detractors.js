const router = require('express').Router();
const defaultRouter = require('./defaultRouter')

defaultRouter(router,'detractors')

module.exports = router;
