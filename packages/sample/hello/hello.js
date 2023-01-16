const joblint = require('joblint')

function main(args) {
   let linted_data = joblint(job);
    console.log(linted_data)
    let name =  "hi";
    let greeting = 'Hello ' + name + '!'
    return {"body": greeting}
  }

exports.main = main
