const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

let _db;

const mongoConnect = (callback) => {
  const mongocred = process.env.MongoConnectCredentials
  MongoClient.connect(`mongodb+srv://${mongocred}@cluster0.er34oav.mongodb.net/shop?retryWrites=true`)
    .then((client) => {
      console.log("connected")
      _db = client.db()
      callback()
    }).catch((err) => {
      console.log(err)
    })

}

const getdb = () => {
  if (_db) {
    return _db
  }
  throw "no db found "
}

exports.mongoConnect = mongoConnect
exports.getdb = getdb
