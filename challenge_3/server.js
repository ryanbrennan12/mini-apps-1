const express = require('express');
const bodyParser = require('body-parser');
const db = require('./mongo/mongoindex.js')
const app = express()
const port = 3000;



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/save', (req, res) => {
  db.save(req.body)
  res.send('SAVE WAS SENT!')
})

app.post('/update', (req, res) => {
  console.log('BODY ON UPDATE', req.body)
  res.send('UPDATE WAS SENT')
})



app.listen(port, () => {
  console.log(`Hey, we are listening to ${port}`)
})



