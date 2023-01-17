const joblint = require('./joblint')

function main(args) {
  let job = args.job_data
  if (!job_data) {
    return { "error" : "failed to provide a job" }
  }
  let rules = args.rules
  console.log(rules);

  let linted_data = joblint(job);
  console.log(linted_data);
  return { "body" : linted_data }
}

exports.main = main

// main({"name": "the best blanket", rules: ["Competitive environment"]})
