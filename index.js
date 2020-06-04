"use strict";
const SwaggerClient = require("swagger-client");
const DeltaAPIKeyAuthorization = require("./lib/DeltaAPIKeyAuthorization");
// const SWAGGER_URL = "http://localhost:8000/openapi.json";
const SWAGGER_URL = "http://localhost:8000/openapi.json";

const authorization = new DeltaAPIKeyAuthorization('apiKey', 'apiSecret')

const DeltaRestClient = function(api_key, api_secret) {
  const authorization = new DeltaAPIKeyAuthorization(api_key, api_secret)
  return new SwaggerClient({
    url: SWAGGER_URL,
    requestInterceptor(req) {
      if (!req.method) {
        req.method = "GET"
      }

      if (typeof authorization !== 'undefined') {
        authorization.apply(req)
      }
    }
  })
  .then(client => {
    return Promise.resolve(client);
  })
  .catch(function(e) {
    console.error("Unable to connect: ", e);
  })
};

module.exports = DeltaRestClient;