const chalk = require('chalk')
const notes = require('./notes')

const msg = notes()

console.log(msg)

console.log(chalk.green('Success..'))
console.log(chalk.green.bold('Hello world!'));
console.log(chalk.blue.bgRed.bold('Hello world!'));