var loc=require('./menu')
 var mongoose=require('mongoose')
require ('dotenv').config();
const PORT=process.env.PORT || 3000;
var gracefulShutdown;
var dbURI = 'mongodb://127.0.0.1:27017/flavorscape';
if(process.env.NODE_ENV === 'production'){
  dbURI=process.env.MONGODB_URI;
}
mongoose.connect(dbURI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase server selection timeout to 30 seconds (adjust as needed)
  socketTimeoutMS: 45000,
});

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
require('./menu');