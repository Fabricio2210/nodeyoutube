const router = require('express').Router();
const defaultRouter = require('./defaultRouter')

defaultRouter(router,'coders')

module.exports = router;