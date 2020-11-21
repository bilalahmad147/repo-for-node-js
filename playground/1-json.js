const fs = require('fs')

const info = {
    name: 'zubair',
    age: '21',
    color: 'brown'
}

const infoData = JSON.stringify(info)

fs.writeFileSync('data.json', infoData)
const dataBuffer = fs.readFileSync('data.json')
const dataInString = dataBuffer.toString()
const finalData = JSON.parse(dataInString)
console.log(finalData)