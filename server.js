const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/connection');
const app = express();
const port = 3333
const AuthController = require('./api/http/User/AuthController')
const authenticator = require('./api/Middlewares/AuthMiddleware')
const users = require('./routes/UserRoute')
const ingredients = require('./routes/IngredientRoute')
const recipes = require('./routes/RecipeRoute')
const dbStart = require('./config/dbStart')

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

dbStart().then()

app.use(bodyParser.json())

app.post('/auth', AuthController.login);

app.use('/user', authenticator);
app.use('/user', users)

app.use('/ingredient', authenticator);
app.use('/ingredient', ingredients)

app.use('/recipe', authenticator);
app.use('/recipe', recipes)

app.use((err,req,res,next) => {
  if (err && err.error && err.error.isJoi) {
    const message = err.error.details.reduce((acc,cur) => {
        return {
          ...acc,
          [cur.context.key] : cur.message
        }
    },{})
    res.status(400).json({
      message: 'HasValidationsErrors',
      errors: message
    });
  } else {
    // pass on to another error handler
    next(err);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
