"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePeer =
  exports.updatePeer =
  exports.getPeer =
  exports.createPeer =
  exports.listPeers =
    void 0;
var api_1 = require("../api");
function listPeers(options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/peers"),
    options: options,
  });
}
exports.listPeers = listPeers;
function createPeer(peerDto, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/peers"),
    body: peerDto,
    options: options,
  });
}
exports.createPeer = createPeer;
function getPeer(id, options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/peers/").concat(id),
    options: options,
  });
}
exports.getPeer = getPeer;
function updatePeer(id, peer, options) {
  return api_1.RightConsents.http({
    method: "PUT",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/peers/").concat(id),
    body: peer,
    options: options,
  });
}
exports.updatePeer = updatePeer;
function deletePeer(id, options) {
  return api_1.RightConsents.http({
    method: "DELETE",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/peers/").concat(id),
    options: options,
  });
}
exports.deletePeer = deletePeer;
