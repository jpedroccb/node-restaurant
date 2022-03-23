const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({
    passError: true
})
const querySchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
})

module.exports = {
  IngredientCreateValidator: validator.body(querySchema)
}