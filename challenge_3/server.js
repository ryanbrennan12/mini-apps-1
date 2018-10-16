const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000;



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/save', (req, res) => {
  console.log('the body has risen', req.body)
})





app.listen(port, () => {
  console.log(`Hey, we are listening to ${port}`)
})



