const mongodb = require('mongodb')
const getdb = require('../util/database').getdb

class User {

  constructor(username, email) {
    this.name = username
    this.email = email
  }
  save() {
    const db = getdb();

    return db.collection('users').insertOne(this).then((result) => console.log(result)).catch((err) => { console.log(err) });

  }

  static async findUserById(userid) {

    const db = getdb();

    try {
      const result = await db.collection('users').findOne({ _id: new mongodb.ObjectId(userid) })

      console.log(result)

      return result;
    } catch (err) {
      throw err;
    }

  }

}
module.exports = User;
