"use strict";
var SwaggerClient = require("swagger-client");
var DeltaAPIKeyAuthorization = require("./lib/DeltaAPIKeyAuthorization");

const DeltaRestClient = function(api_key, api_secret) {
  const SWAGGER_URL = "http://localhost:8000/openapi.json";
  const temp = new DeltaAPIKeyAuthorization(api_key, api_secret);
  return new SwaggerClient(SWAGGER_URL, {
      authorizations: {
        'api-key': temp
      }
    })
    .then(function(client) {

      // console.log('1111 222 client: ', client)

      // client.clientAuthorizations.add(
      //   "api-key",
      //   new DeltaAPIKeyAuthorization(api_key, api_secret)
      // );
      return Promise.resolve(client);
    })
    .catch(function(e) {
      console.error("Unable to load swagger json:", e);
    });
};

module.exports = DeltaRestClient;