//modulos nativos
const path = require('path')

console.log(path.basename(__filename))

//meus modulos
const myModule = require('./export')

console.log(myModule)