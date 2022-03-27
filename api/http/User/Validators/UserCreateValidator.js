const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({
    passError: true
})
const querySchema = Joi.object({
  name: Joi.string().min(4).required(),
  email: Joi.string().required(),
  password: Joi.string().required()
})

module.exports = {
  UserCreateValidator: validator.body(querySchema)
}