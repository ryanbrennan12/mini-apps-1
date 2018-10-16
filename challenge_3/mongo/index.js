var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/miniapp')
.then(() => {
  console.log('Woo Hoo we connected!!!')
})
.catch((error) => {
  console.log('Error in connecting to DB', error)
})

