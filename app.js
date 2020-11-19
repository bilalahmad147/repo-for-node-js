const validator = require('validator')
const notes = require('./notes')

const msg = notes()

console.log(msg)

console.log(validator.isEmail('bilal@gmail.com'))
console.log(validator.isURL('http://firebase.com'))

console.log(validator.isEmail('bilalgmail.com'))
console.log(validator.isURL('http:/firebase.com'))