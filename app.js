const chalk = require('chalk')
const notes = require('./notes')
const command = process.argv[2]

if (command === 'add') {
    return console.log(notes())
}else{
    return console.log('No notes added..')
}


console.log(chalk.green('Success..'))