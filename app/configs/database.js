const mongoose = require('mongoose');


const conectarDB = async () =>{

    await mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      },()=> console.log('Base de datos Online'));

}




module.exports = conectarDB;