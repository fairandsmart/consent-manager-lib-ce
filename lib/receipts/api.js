"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReceiptPdf = void 0;
var api_1 = require("../api");
function getReceiptPdf(transactionId, theme, options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/receipts/")
      .concat(transactionId),
    params: { theme: theme, format: "application/pdf" },
    responseType: "arraybuffer",
    options: options,
  });
}
exports.getReceiptPdf = getReceiptPdf;
