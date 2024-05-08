const express = require('express');

console.log('Before import controller into index')

const users = require('./controllers/users');

console.log('In index after controller import')

/**  
 * @typedef {import('../client/src/model/transportTypes').DataEnvelope<null> } ErrorDataEnvelope
 * */

const app = express();
const PORT = process.env.PORT ?? 3000;
/*
app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');*/
app
  .use(express.static('client/dist'))
  .use(express.json())
  .use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    next();
  })

app
  .get('/', (req, res) => {
    res.send('Hello New Paltz!')
  })
  .use('/api/v1/users', users)

  // Error handling
app.use((err, req, res, next) => {
  console.error(err);
  /** @type {ErrorDataEnvelope } */
  const results = { 
    isSuccess: false,
    message: err.message || 'Internal Server Error',
    data: null,
   };
  res.status(500).send(results);
})

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});