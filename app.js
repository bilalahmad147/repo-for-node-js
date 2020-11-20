const chalk = require('chalk')
const notes = require('./notes')
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'add new notes',
    handler: function(){
        console.log('added a new note..')
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove notes',
    handler: function(){
        console.log('Removing notes..')
    }
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function(){
        console.log('listed notes..')
    }
})

yargs.command({
    command: 'read',
    describe: 'read notes',
    handler: function(){
        console.log('Reading notes..')
    }
})


console.log(yargs.argv)

