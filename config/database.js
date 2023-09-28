const mongoose = require('mongoose');
require('dotenv').config();

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Conexión a MongoDB establecida');
      })
      .catch((err) => {
        console.error('Error en la conexión a MongoDB:', err);
      });
  }
}

module.exports = new Database();