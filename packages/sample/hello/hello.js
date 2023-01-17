const joblint = require('./joblint')

function main(args) {
  let job;
  try {
    job = args.name;
  } catch (e) {
    console.log(e);
    return { "error" : "something went wrong" }
  }
  if (!job) {
    return { "error" : "failed to provide a job" }
  }
  let linted_data = joblint(job);
  console.log(linted_data);
  return { "body" : linted_data }
}

exports.main = main

// console.log(main({"a": "aaa"}))
// main({"name": "the best blanket", rules: ["Competitive environment"]})
