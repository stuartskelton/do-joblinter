'use strict;'
const joblint = require('./joblint')
const rules = require('./joblint')

function main(args) {

  // get the job data
  let job_data;
  try {
    job_data = args.job;
    if (!job_data) {
      return { "body" : { "error" : "failed to provide a job" } }
    }
  } catch (e) {
    console.log(e);
    return { "body" : { "error" : "something went wrong" }}
  }


  // filter the rules we want and use them
  try {
    job_rule_names = args.rule_names;
    if (!job_rule_names) {
      console.log("no rules");
      job_rule_names = []
    }
    if (!Array.isArray(job_rule_names)) {
      console.log("not an array");
      job_rule_names = []
    }
  } catch (e) {
    console.log(e);
    job_rule_names = []
  }
  console.log("jrn: " + job_rule_names)

  let rules_wanted = []

  if (job_rule_names.length > 0) {
    rules_wanted = rules.defaults.rules.filter(function(item) {
      for (job_rule_name_i in job_rule_names) {
        if  (job_rule_names[job_rule_name_i] === item.name) {
          return item;
        }
      }
    });
  }

  let linted_data = {}
  try {
    if (rules_wanted.length > 0) {
      console.log("have rules")
      linted_data = joblint(job_data, { rules: rules_wanted });
    } else {
      console.log("have no  rules")
      linted_data = joblint(job_data);
    }
    console.log(linted_data);
  } catch (e) {
    console.log(e);
    return { "body" : { "error" : "something went wrong" }}
  }
  return { "body" : linted_data }
}

exports.main = main

// console.log(main({"a": "aaa"}))
// main({"job": "the best blanket", rule_names: ["Use of gendered word"]})
// main({"job": "the best blanket", rules: ["zCompetitive environment"]})
