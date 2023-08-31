const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

require('dotenv').config();
const mongocred = process.env.MongoConnectCredentials
const mongoose = require('mongoose')

//const mongoConnect = require('./util/database').mongoConnect

//const User = require('./models/user')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   User.findUserById('64f06fb65f68aef012860939')
//     .then((user) => {
//       console.log(user)
//       req.user = new User(user.name, user.email, user.cart, user._id);
//       next();
//     })
//     .catch(err => console.log(err));

// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// mongoConnect(() => {
//   //console.log(client)

//   app.listen(3000)
// })

mongoose.connect(`mongodb+srv://${mongocred}@cluster0.er34oav.mongodb.net/shop?retryWrites=true`).then(result => {
  console.log("Connected to mangoose")

  app.listen(3000)
}).catch(err => {
  console.log(err)
})