"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteKey = exports.createKey = exports.listKeys = void 0;
var api_1 = require("../api");
function listKeys(options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/keys"),
    options: options,
  });
}
exports.listKeys = listKeys;
function createKey(key, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/keys"),
    body: key,
    options: options,
  });
}
exports.createKey = createKey;
function deleteKey(id, options) {
  return api_1.RightConsents.http({
    method: "DELETE",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/keys/").concat(id),
    options: options,
  });
}
exports.deleteKey = deleteKey;
