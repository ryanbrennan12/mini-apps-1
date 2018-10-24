const express = require('express');
const app = express();

app.use(express.static('client'))

const port = 3000;

app.post("/transform", (req, res) => {
  console.log('BODY BEB, ', req.body)
})


app.listen(port, () => {
  console.log(`Woop Woop we are listening on port ${port}!`)
})
