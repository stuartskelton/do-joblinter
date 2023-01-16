const joblint = require('joblint')

function main(args) {
  let job = args.name || 'stranger';
  console.log("1234");
  let linted_data = joblint(job);
  console.log(linted_data);
  return { "body" : linted_data }
}

exports.main = main
