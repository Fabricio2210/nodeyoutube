const router = require('express').Router();
const defaultRouter = require('./defaultRouter')

defaultRouter(router,'redlettermedia')

module.exports = router;