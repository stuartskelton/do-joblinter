const joblint = require('./joblint')

function main(args) {
  let job;
  try {
    job = args.name;
    if (!job) {
      return { "error" : "failed to provide a job" }
    }
  } catch (e) {
    console.log(e);
    return { "error" : "something went wrong" }
  }

  let linted_data = {}
  try {
    linted_data = joblint(job);
    console.log(linted_data);
  } catch (e) {
    console.log(e);
    return { "error" : "something went wrong" }
  }
  return { "body" : linted_data }
}

exports.main = main

// console.log(main({"a": "aaa"}))
// main({"name": "the best blanket", rules: ["Competitive environment"]})
