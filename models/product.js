
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  userid: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})


module.exports = mongoose.model('Product', ProductSchema)

// const mongodb = require('mongodb')
// const getdb = require('../util/database').getdb

// class Product {
//   constructor(title, price, description, imageUrl, id, userId) {
//     this.title = title;
//     this.price = price
//     this.description = description
//     this.imageUrl = imageUrl
//     this._id = id ? new mongodb.ObjectId(id) : null;
//     this.userId = userId
//   }

//   save() {
//     const db = getdb();
//     let dboption;
//     if (this._id) {
//       dboption = db.collection('products').updateOne({ _id: this._id }, { $set: this })
//     } else {

//       dboption = db.collection('products').insertOne(this)
//     }
//     return dboption.then((result) => {
//       console.log(result)
//     }).catch((err) => {
//       console.log(err)
//     })

//   }


//   static fetchAll() {
//     const db = getdb();
//     return db.collection('products').find().toArray().then((products) => {
//       return products
//     }).catch((err) => {
//       console.log(err)
//     })

//   }

//   static findById(prodId) {
//     const db = getdb();
//     return db.collection('products').find({ _id: new mongodb.ObjectId(prodId) }).next().then((product) => { return product }).catch((err) => { console.log(err) })

//   }

//   static deleteProduct(prodId) {
//     const db = getdb();
//     return db.collection('products').deleteOne({ _id: new mongodb.ObjectId(prodId) }).then((products) => {
//       return products
//     }).catch((err) => {
//       console.log(err)
//     })

//   }


// }


// module.exports = Product;
