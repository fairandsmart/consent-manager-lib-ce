"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWebhook =
  exports.updateWebhook =
  exports.getWebhook =
  exports.createWebhook =
  exports.listWebhooks =
    void 0;
var api_1 = require("../api");
function listWebhooks(options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/webhooks"),
    options: options,
  });
}
exports.listWebhooks = listWebhooks;
function createWebhook(webhook, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/webhooks"),
    body: webhook,
    resolveHeaders: true,
    headers: {
      "Content-Type": "application/json",
    },
    options: options,
  });
}
exports.createWebhook = createWebhook;
function getWebhook(webhookid, options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/webhooks/")
      .concat(webhookid),
    options: options,
  });
}
exports.getWebhook = getWebhook;
function updateWebhook(webhookid, webhook, options) {
  return api_1.RightConsents.http({
    method: "PUT",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/webhooks/")
      .concat(webhookid),
    body: webhook,
    options: options,
  });
}
exports.updateWebhook = updateWebhook;
function deleteWebhook(webhookid, options) {
  return api_1.RightConsents.http({
    method: "DELETE",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/webhooks/")
      .concat(webhookid),
    options: options,
  });
}
exports.deleteWebhook = deleteWebhook;
