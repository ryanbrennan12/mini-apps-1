

const converter = (data, cb) => {
  let newData = JSON.stringify(data)
  cb(newData)
}

module.exports.converter = converter;