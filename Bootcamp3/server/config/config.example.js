//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://mdarling:test_1234@cluster0-shard-00-00-h7vvs.mongodb.net:27017,cluster0-shard-00-01-h7vvs.mongodb.net:27017,cluster0-shard-00-02-h7vvs.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', //place the URI of your mongo database here.//place the URI of your mongo database here.
  }, 
  openCage: {
    key: 'ed7b7350a14c457485bb08efbae62e71', //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};