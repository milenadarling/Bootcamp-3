module.exports = {
  db: {
    uri: 'mongodb://mdarling:Test_1234@cluster0-shard-00-00-61lf3.mongodb.net:27017,cluster0-shard-00-01-61lf3.mongodb.net:27017,cluster0-shard-00-02-61lf3.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', //place the URI of your mongo database here.//place the URI of your mongo database here.
  }, 
  openCage: {
    key: 'ed7b7350a14c457485bb08efbae62e71', //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};