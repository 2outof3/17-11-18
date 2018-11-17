const router = require('express').Router()
const HttpError = require('../utils/HttpError')

router.use('/users', require('./users'))
router.use('/employees', require('./employees'))
router.use('/teams', require('./teams'))

/*-------  catches routes not found  -------  */
router.use((req, res, next) => {
  next(HttpError(404))
})

module.exports = router
