require('dotenv').config();
const express = require('../node_modules/express');
// const { Pool } = require('pg');
const Cte = require('./models/cte');

const app = express();

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   password: process.env.DB_PASSWORD
// });

// app.get('/ctes', async (req, res) => {
//     try {
//       const { rows } = await pool.query('SELECT * FROM cte LIMIT 2');
//       res.status(200).json(rows);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   });

  app.get('/', async (req, res) => {
    try {
      const ctes = await Cte.findAll({ limit: 2, attributes: ['ser_cte', 'nro_cte', 'cep_entrega'] });
      res.status(200).json(ctes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  

app.listen(3000, () => {
  console.log('Aplicação rodando na porta 3000!');
});
