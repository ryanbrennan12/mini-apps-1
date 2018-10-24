const express = require('express');
const app = express();

app.use(express.static('client'))

const port = 3000;




app.listen(port, () => {
  console.log(`Woop Woop we are listening on port ${port}!`)
})
