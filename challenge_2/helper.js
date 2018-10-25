

const converter = (data, cb) => {

  let parsed = JSON.parse(data.data)
  cb(parsed)
  // let newData = JSON.stringify(data)


}

module.exports.converter = converter;