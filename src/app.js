import { log } from 'console'
import Block from './block.js'

const block = new Block('Test Block')
// Generating the block hash
block
  .generateHash()
  .then((result) => {
    console.log(`Block Hash: ${result.hash}`)
    console.log(`Block: ${JSON.stringify(result)}`)
    log('Nonce: ', result.nonce)
  })
  .catch((error) => {
    console.log(error)
  })
