const express = require('express');
const bodyParser = require('body-parser');
const db = require('./mongo/mongoindex.js')
const app = express()
const port = 3000;



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/save', (req, res) => {
  console.log('the body has risen', req.body)
  db.save(req.body)
  res.send('It was sent!')
})





app.listen(port, () => {
  console.log(`Hey, we are listening to ${port}`)
})



