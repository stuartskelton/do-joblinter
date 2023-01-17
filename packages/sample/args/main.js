function main(args) {
  console.log(args)
  return { "body" : { "hi" : "ok"} }
}

exports.main = main

// main({"name": "the best blanket", rules: ["Competitive environment"]})
