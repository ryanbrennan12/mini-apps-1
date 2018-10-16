var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/miniapp')
.then(() => {
  console.log('Woo Hoo we connected!!!')
})
.catch((error) => {
  console.log('Error in connecting to DB', error)
})

var db = mongoose.connection

//in order to make or save function, have to make schema

var formSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  addy1: {
    type: String,
    // required: true,
  },
  addy2: {
    type: String,
    // required: true,
  },
  city: {
    type: String,
    // required: true,
  },
  state: {
    type: String,
    // required: true,
  },
  zip: {
    type: String,
    // required: true,
  },
  phone: {
    type: String,
    // required: true,
  },
  credit: {
    type: String,
    // required: true,
  },
  exp: {
    type: String,
    // required: true,
  },
  cvv: {
    type: String,
    // required: true,
  },
  zip2: {
    type: String,
    // required: true,
  }
})
    
const Form = mongoose.model('Form', formSchema)


const save = (item) => {
  console.log('THIS IS ITEM', item)
  new Form({
    name: item.name,
    email: item.email,
    password: item.password,
    addy1: item.addy1,
    addy2: item.addy2,
    city: item.city,
    state: item.state,
    zip: item.zip,
    phone: item.phone,
    credit: item.credit,
    exp: item.exp,
    cvv: item.cvv,
    zip2: item.zip2
  }).save()
  .then(() => {
    console.log('successfully saved to DB')
  })
  .catch((err) => {
    console.log('Error in Saving to DB', err)
  })
}

module.exports.save = save