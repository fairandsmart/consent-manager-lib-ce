"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientConfig = exports.getSupportInfo = exports.getInstance = void 0;
var api_1 = require("../api");
function getInstance(options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/system"),
    options: options,
  });
}
exports.getInstance = getInstance;
function getSupportInfo(options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/system/support/infos"),
    options: options,
  });
}
exports.getSupportInfo = getSupportInfo;
function getClientConfig(options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/system/config"),
    options: options,
  });
}
exports.getClientConfig = getClientConfig;
