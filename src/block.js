import crypto from 'crypto-js'

export default class Block {
  constructor(data) {
    this.id = 0
    this.nonce = 144445
    this.body = data
    this.hash = ''
  }

  generateHash() {
    let self = this
    return new Promise(function (resolve, reject) {
      if (self) {
        self.hash = crypto.SHA256(JSON.stringify(self))
        resolve(self)
      } else {
        reject(Error('It broke'))
      }
    })
  }
}
