const fs = require('fs');
fs.writeFile('welcome.txt','hello node',(error) => {
    if (error) {console.log(error)}
    console.log('the file has been created')
})
fs.readFile('hello.txt',(error,data) => {
    if (error) throw error
    console.log( data.toString())
})