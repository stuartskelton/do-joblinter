const joblint = require('joblint')

function main(args) {
  let job = args.name || 'stranger';
  console.log("123");
  let linted_data = joblint(job);
  console.log(linted_data);
  return { "data" : linted_data }
}

exports.main = main
