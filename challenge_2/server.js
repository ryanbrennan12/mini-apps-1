const express = require('express');
const app = express();

const port = 3000;


app.get('/', (req, res) => {
  res.send('Hey hey here are some kind words!')
})


app.listen(port, () => {
  console.log(`Woop Woop we are listening on port ${port}!`)
})
