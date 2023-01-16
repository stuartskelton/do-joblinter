const { joblint } = require('joblint')
const { StatusCodes, getReasonPhrase } = require('http-status-codes');

function main(args) {
  try {
    let job = args.name || 'stranger';
    console.log("123");
    let linted_data = joblint(job);
    console.log(linted_data);
    return { "body" : linted_data }

  } catch (error) {
    console.error(error)
    return {
      error: {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        body: {
          message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
        }
      }
    }
  }
}

exports.main = main
