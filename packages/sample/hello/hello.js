const joblint = require('joblint')

function main(args) {
    let job = args.name || 'stranger';
    let linted_data = joblint(job);
    console.log(linted_data);
    return linted_data
  }

exports.main = main
