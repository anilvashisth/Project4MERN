//console.log('testing!')
const { format } = require ('date-fns');
const {v4:uuid } = require('uuid');

console.log(format(new Date(),'yyyymmdd\tHH:mm:ss'))

//console.log('Jai Hind')
console.log(uuid())
console.log()