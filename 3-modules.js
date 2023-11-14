const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-altFlav')
require('./7-mindGred')

console.log(data);

sayHi("Bob")
sayHi(names.john)
sayHi(names.peter)
sayHi(8) 