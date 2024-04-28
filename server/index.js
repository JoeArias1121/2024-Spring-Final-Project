const express = require('express');

console.log('Before import controller into index')

const users = require('./controllers/users');

console.log('In index after controller import')

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello New Paltz!')
})
.use('/api/v1/users', users)


app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});