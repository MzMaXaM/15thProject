const 
  mongodb = require('mongodb'),
  MongoClient = mongodb.MongoClient;

let database

async function connectToData(){
  const client = await MongoClient.connect('mongodb://localhost:27017')
  database = client.db('online-shop')
}

function getDb(){
  if (!database) {
    throw new Error('could notconnect to database')
  }
  return database
}

module.exports = {
  connectToDatabase: connectToData,
  getDb: getDb
}