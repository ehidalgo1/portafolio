const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserShema = new Schema({
  nombre: {
      type: String,
      require: true
  },
  correo: {
      type: String,
      require: true, 
      unique: true  
  },
  estado: {
      type: Boolean,
      default: true
  }
});

module.exports = mongoose.model('User', UserShema);