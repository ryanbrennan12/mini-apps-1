const express = require('express');
var bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static('client'))

const port = 3000;

app.post("/transform", (req, res) => {
  console.log(req.body)
})


app.listen(port, () => {
  console.log(`Woop Woop we are listening on port ${port}!`)
})
