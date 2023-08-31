const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cart: {
        items: [{ prdouctId: { type: Schema.Types.ObjectId, ref: 'Product', required: true }, quantity: { type: Number, required: true } }]
    }
})


module.exports = mongoose.model('User', UserSchema)


























// const mongodb = require('mongodb')
// const getdb = require('../util/database').getdb

// class User {

//   constructor(username, email, cart, id) {
//     this.name = username
//     this.email = email
//     this.cart = cart
//     this._id = id
//   }
//   save() {
//     const db = getdb();

//     return db.collection('users').insertOne(this).then((result) => console.log(result)).catch((err) => { console.log(err) });

//   }

//   static async findUserById(userid) {

//     const db = getdb();

//     try {


//       const result = await db.collection('users').findOne({ _id: new mongodb.ObjectId(userid) })

//       console.log(result)

//       return result;
//     } catch (err) {
//       throw err;
//     }

//   }

//   async addProductToCart(product) {

//     try {
//       const cartProdutIdx = this.cart.items.findIndex(cp => {
//         // console.log(cp.productId)
//         //console.log(product._id)
//         return cp.productId.toString() === product._id.toString();
//       })
//       let newQty = 1;
//       const presentCartItems = [...this.cart.items]
//       if (cartProdutIdx >= 0) {
//         newQty = this.cart.items[cartProdutIdx].quantity + 1;
//         presentCartItems[cartProdutIdx].quantity = newQty
//       } else {
//         presentCartItems.push({ productId: new mongodb.ObjectId(product._id), quantity: newQty })
//       }


//       const updatedCart = { items: presentCartItems }
//       const db = getdb()

//       const result = await db.collection('users').updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: { cart: updatedCart } })
//       return result;
//     } catch (err) {
//       return err;
//     }
//   }


//   getCart() {

//     const db = getdb();

//     const productIds = this.cart.items.map(product => {
//       return product.productId;
//     })
//     return db.collection('products').find({ _id: { $in: productIds } }).toArray().then((products) => {
//       return products.map(p => {
//         return {
//           ...p, quantity: this.cart.items.find(i => {
//             return i.productId.toString() === p._id.toString()
//           }).quantity
//         }
//       })
//     });
//   }

//   deleteCartItem(productId) {

//     const db = getdb();
//     const cartItems = this.cart.items.filter(cp => {
//       return cp.productId.toString() !== productId.toString();
//     })

//     return db.collection('users').updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: { cart: { items: cartItems } } }).then((result) => {
//       console.log(result);
//     })

//       .catch((err) => {
//         console.log(err)
//       })

//   }

//   addOrder() {
//     const db = getdb();
//     return this.getCart().then(products => {
//       const order = {
//         items: products,
//         user: {
//           _id: new mongodb.ObjectId(this._id),
//           name: this.name,

//         }
//       }
//       return db.collection('orders').insertOne(order)

//     }).then((result) => {
//       this.cart = { items: [] }
//       return db.collection('users').updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: { cart: { items: [] } } }).then((result) => {
//         console.log(result);
//       })

//         .catch((err) => {
//           console.log(err)
//         })
//     })
//   }

//   getOrders() {
//     const db = getdb();

//     return db.collection('orders').find({ 'user._id': new mongodb.ObjectId(this._id) }).toArray()
//   }

// }
// module.exports = User;
