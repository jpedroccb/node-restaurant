const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3333
const AuthController = require('./api/controllers/AuthController') 
const authenticator = require('./api/middlewares/AuthMiddleware')
const users = require('./routes/UserRoute')
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.use(bodyParser.json())

// respond with "hello world" when a GET request is made to the homepage
app.post('/auth', AuthController.login);

app.use('/user', authenticator);
app.use('/user', users)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
