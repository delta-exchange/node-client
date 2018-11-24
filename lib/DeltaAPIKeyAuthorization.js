"use strict";
const R = require("ramda");
const crypto = require("crypto");
const url = require("url");

/**
 * Handles HMAC signing
 */
const DeltaAPIKeyAuthorization = function(apiKey, apiSecret) {
  this.apiKey = apiKey;
  this.apiSecret = apiSecret;
};

DeltaAPIKeyAuthorization.prototype.apply = function(obj) {
  const timestamp = Math.floor(new Date().getTime() / 1000);
  const parsedURL = url.parse(obj.url);
  const path = parsedURL.pathname + (parsedURL.search || "");

  const signature = this.sign(
    obj.method.toUpperCase(),
    path,
    timestamp,
    obj.body
  );
  obj.headers["api-key"] = this.apiKey;
  obj.headers["signature"] = signature;
  obj.headers["timestamp"] = timestamp;
  return true;
};

DeltaAPIKeyAuthorization.prototype.sign = function(verb, url, timestamp, data) {
  if (!data || R.isEmpty(data)) data = "";
  else if (R.is(Object, data)) data = JSON.stringify(data);

  const message = verb + timestamp + url + data;
  return crypto
    .createHmac("sha256", this.apiSecret)
    .update(message)
    .digest("hex");
};

module.exports = DeltaAPIKeyAuthorization;
