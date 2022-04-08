"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractRecordsCsv =
  exports.extractRecords =
  exports.listRecords =
    void 0;
var api_1 = require("../api");
function listRecords(filter, options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/records"),
    params: filter,
    options: options,
  });
}
exports.listRecords = listRecords;
function extractRecords(filter, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/records/extraction"),
    body: filter,
    options: options,
  });
}
exports.extractRecords = extractRecords;
function extractRecordsCsv(filter, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/records/extraction"),
    body: filter,
    headers: {
      Accept: "text/csv",
    },
    responseType: "text",
    options: options,
  });
}
exports.extractRecordsCsv = extractRecordsCsv;
