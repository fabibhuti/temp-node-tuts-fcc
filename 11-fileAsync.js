const {readFile, writeFile} = require('fs')
console.log('starting task 1');
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    // console.log(result)
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err)
        }
        const second = result;
        writeFile(
            './content/result-async.txt', 
            `This is the result: ${first}, ${second}`,
            {flag: 'a'},
            (err, result) => {
                if(err){
                    console.log(err);
                    return
                }
                console.log('Done with task 1')
            })
    })
})

console.log('Starting next task')