const rules = require('./joblint')


function main(args) {
  // let job = args.name || 'stranger';
  // console.log("1234");
  // let linted_data = joblint(job, "moose");
  console.log(rules);
  current_rules = [];
  rules.defaults.rules.forEach(function (rule) {
    current_rules.push(rule.name);
    console.log(rule.name)
  });
  console.log(current_rules)
  return { "body" : current_rules }
}

exports.main = main

// main({"name": "the best blanket", rules: ["Competitive environment"]})
