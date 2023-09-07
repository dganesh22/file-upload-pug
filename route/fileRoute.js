const fileRoute = require('express').Router()
const {index, upload, pnf } = require('../controller/fileController')


fileRoute.get(`/`, index)
fileRoute.get(`/file/upload`, upload)


// default route
fileRoute.all(`/*`, pnf)

module.exports = fileRoute