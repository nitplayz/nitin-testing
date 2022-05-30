const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Nitin and TDubs used to manage the ticket [980708011142168607]')
})

app.listen(3000)

console.log('ready');
