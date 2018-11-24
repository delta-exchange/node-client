"use strict";
var SwaggerClient = require("swagger-client");
var DeltaAPIKeyAuthorization = require("./lib/DeltaAPIKeyAuthorization");

const DeltaRestClient = function(api_key, api_secret) {
  return new SwaggerClient({
    url: "https://docs.delta.exchange/api/swagger.json",
    usePromise: true
  })
    .then(function(client) {
      client.clientAuthorizations.add(
        "api-key",
        new DeltaAPIKeyAuthorization(api_key, api_secret)
      );
      return Promise.resolve(client);
    })
    .catch(function(e) {
      console.error("Unable to load swagger json:", e);
    });
};

module.exports = DeltaRestClient;
