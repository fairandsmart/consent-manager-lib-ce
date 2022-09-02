"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubmitFormPreview =
  exports.postSubmissionValuesHtml =
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
function getTransactionJson(transactionId, options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/consents/")
      .concat(transactionId),
    headers: {
      "Content-Type": "application/json",
    },
    options: options,
  });
}
exports.getTransactionJson = getTransactionJson;
function postSubmissionValuesHtml(txid, values, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/consents/")
      .concat(txid, "/submit"),
    body: Object.keys(values)
      .map(function (key) {
        return "".concat(key, "=").concat(encodeURIComponent(values[key]));
      })
      .join("&"),
    responseType: "text",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    options: options,
  });
}
exports.postSubmissionValuesHtml = postSubmissionValuesHtml;
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
