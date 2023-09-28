const express = require('express');
const app = express();

const db = require('./config/database');


const apiRoutes = require('./routes/apiUserRoute');



app.use(express.json());

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});