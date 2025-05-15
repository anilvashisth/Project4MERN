// Prerequisite
// HTML , CSS , Java Script basic Knowlwdge.
// Experience with other Libraries and Framework.
// This is NodeJS Tutorial
// 1) Nodejs runs on a server - Not in a broser (backend not frontend)
// 2) the console is the terminal window
console.log('hello world')

//console.log(global)

const os = require ('os')
const path = require ('path')
const { add,subtract,multiply,divide } = require ('./math')

console.log(add(2,3))
console.log(subtract(2,3))
console.log(multiply(2,3))
console.log(divide(2,3))
/*const math = require ('./math')
console.log(math.add(2,3))*/

/*console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.parse(__filename))*/