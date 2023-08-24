import crypto from 'crypto-js'

const data1 = 'Blockchain Hashing!'
const dataObject = {
  id: 1,
  body: 'Some body data',
  time: new Date().getTime().toString().slice(0, -3),
}

function generateHash(obj) {
  return crypto.SHA256(JSON.stringify(obj))
}

console.log(`SHA256 Hash: ${generateHash(data1)}`)
console.log('************************************')
console.log(`SHA256 Hash: ${generateHash(dataObject)}`)
