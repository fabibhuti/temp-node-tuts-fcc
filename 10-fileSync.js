// const fs = require('fs')
const {readFileSync, writeFileSync} = require('fs')
console.log('starting task 1');
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first)
console.log(second)

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'}
)

console.log('Done with task 1');

console.log('Starting next task');