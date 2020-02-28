const { ApplicationError } = require("../lib/error").ApplicationError;

/**
 * Helper that throws an error to trigger a 400 response if a
 * field is missing
 * @param {Array<string>} requiredFields list of required fields
 * @param {any} body Body of the request
 */

function assertRequiredFields(requiredFields = [], body) {
  const missingFields = requiredFields.filter(field => !body[field]);
  if (missingFields.length > 0) {
    throw new ApplicationError("Missing required fields", 400, {
      requiredFields,
      missingFields
    });
  }
}

const route = function(callback, options = {}) {
  return async (req, res, next) => {
    try {
      if (options.requiredFields) {
        assertRequiredFields(options.requiredFields, req.body);
      }
      await callback(req, res, next);
    } catch (err) {
      throw err;
    }
  };
};

const successRoute = function(data, url) {
  if (data && data.error) {
    return {
      message: data.error.message,
      statusCode: data.error.errorCode,
      requestUrl: url,
      data: data
    };
  }
  return {
    message: "Success",
    statusCode: 200,
    requestUrl: url,
    results: data
  };
};

module.exports = { successRoute, route };
