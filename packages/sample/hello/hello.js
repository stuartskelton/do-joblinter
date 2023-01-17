const joblint = require('./joblint')

function main(args) {
  let job = args.name || 'stranger';
  if (!job) {
    return { "error" : "failed to provide a job" }
  }
  let linted_data = joblint(job);
  console.log(linted_data);
  return { "body" : linted_data }
}

exports.main = main

// main({"name": "the best blanket", rules: ["Competitive environment"]})
