const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3333
const UsersController = require('./api/controllers/UsersController') 
const AuthController = require('./api/controllers/AuthController') 
const authenticator = require('./api/middlewares/AuthMiddleware')
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.use(bodyParser.json())

// respond with "hello world" when a GET request is made to the homepage
app.post('/auth', AuthController.login);
app.use('/user', authenticator);
app.post('/user',UsersController.store);
app.get('/user', UsersController.index);
app.get('/user/:id', UsersController.show);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
