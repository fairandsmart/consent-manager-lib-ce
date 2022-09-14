"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubmitFormPreview =
  exports.postSubmissionValuesJson =
  exports.getTransactionJson =
  exports.createTransactionJson =
    void 0;
var api_1 = require("../api");
function createTransactionJson(ctx, lang, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/consents"),
    body: ctx,
    resolveHeaders: true,
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
    options: options,
  });
}
exports.createTransactionJson = createTransactionJson;
function getTransactionJson(txid, options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/consents/")
      .concat(txid),
    headers: {
      "Content-Type": "application/json",
    },
    options: options,
  });
}
exports.getTransactionJson = getTransactionJson;
function postSubmissionValuesJson(txid, values, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/consents/")
      .concat(txid, "/submit"),
    body: values,
    responseType: "text",
    headers: {
      "Content-Type": "application/json",
    },
    options: options,
  });
}
exports.postSubmissionValuesJson = postSubmissionValuesJson;
function getSubmitFormPreview(ctx, lang, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/consents/preview"),
    body: ctx,
    responseType: "text",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
    options: options,
  });
}
exports.getSubmitFormPreview = getSubmitFormPreview;
