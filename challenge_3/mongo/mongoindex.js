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
    type: null,
    required: true,
  },
  email: {
    type: null,
    required: true,
  },
  password: {
    type: null,
    required: true,
  },
  addy1: {
    type: null,
    required: true,
  },
  addy2: {
    type: null,
    required: true,
  },
  city: {
    type: null,
    required: true,
  },
  state: {
    type: null,
    required: true,
  },
  zip: {
    type: null,
    required: true,
  },
  phone: {
    type: null,
    required: true,
  },
  credit: {
    type: null,
    required: true,
  },
  exp: {
    type: null,
    required: true,
  },
  cvv: {
    type: null,
    required: true,
  },
  zip2: {
    type: null,
    required: true,
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
    conssole.log('successfully saved to DB')
  })
  .catch((err) => {
    console.log('Error in Saving to DB', err)
  })
}

module.exports.save = save