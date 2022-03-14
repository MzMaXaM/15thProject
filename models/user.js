const 
  bcrypt = require('bcryptjs'),
  db = require('../data/database');

class User {
  constructor(email, password, name, street, postal, city){
    this.email = email
    this.password = password
    this.name = name
    this.adress = {
      postCode: postal,
      street: street,
      city: city
    }
  }

  async signup(){
    const hPass = await bcrypt.hash(this.password, 5)

    await db.getDb().collection('users').insertOne({
      email: this.email,
      password: hPass,
      name: this.name,
      adress: this.adress
    })
  }
}

module.exports = User