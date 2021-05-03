const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InfoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  cargo: {
    type: String
  },
  resumen: {
    type: String
  },
  pais: {
    type: String
  },
  ciudad: {
    type: String
  },
  edad: {
    type: Number
  },
  tecnologias: {
    type: [String]
  }
});

module.exports = mongoose.model('Info', InfoSchema);