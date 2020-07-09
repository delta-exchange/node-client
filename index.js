"use strict";
const SwaggerClient = require("swagger-client");
const DeltaAPIKeyAuthorization = require("./lib/DeltaAPIKeyAuthorization");
const SWAGGER_URL = "https://docs.delta.exchange/api/swagger_v2.json";


const DeltaRestClient = function(api_key, api_secret) {
  const authorization = new DeltaAPIKeyAuthorization(api_key, api_secret);

  return new SwaggerClient({
    url: SWAGGER_URL,
    requestInterceptor(req) {
      if (!req.method) {
        req.method = "GET";
      }

      if (typeof authorization !== 'undefined') {
        authorization.apply(req);
      }
    }
  })
  .then(client => {
    return Promise.resolve(client);
  })
  .catch(function(e) {
    console.error("Unable to connect: ", e);
    return Promise.reject(e);
  })
};

module.exports = DeltaRestClient;