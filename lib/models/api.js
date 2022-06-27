"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importEntry =
  exports.exportEntry =
  exports.deleteVersion =
  exports.getVersionPreview =
  exports.updateVersionType =
  exports.updateVersionStatus =
  exports.updateVersion =
  exports.getVersion =
  exports.getActiveVersion =
  exports.getLatestVersion =
  exports.createVersion =
  exports.listVersions =
  exports.setDefaultInfoModel =
  exports.deleteEntry =
  exports.updateEntryVisibility =
  exports.updateEntry =
  exports.getEntry =
  exports.createEntry =
  exports.listEntries =
  exports.NEW_VERSION_UUID =
    void 0;
var api_1 = require("../api");
exports.NEW_VERSION_UUID = "11111111-9999-1111-9999-111111111111";
function listEntries(filter, options) {
  if (options === void 0) {
    options = { noAuth: true };
  }
  return api_1.RightConsents.http({
    method: "GET",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/models"),
    params: filter,
    options: options,
  });
}
exports.listEntries = listEntries;
function createEntry(dto, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/models"),
    body: dto,
    options: options,
  });
}
exports.createEntry = createEntry;
function getEntry(id, options) {
  if (options === void 0) {
    options = { noAuth: true };
  }
  return api_1.RightConsents.http({
    method: "GET",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/models/").concat(id),
    options: options,
  });
}
exports.getEntry = getEntry;
function updateEntry(id, dto, options) {
  return api_1.RightConsents.http({
    method: "PUT",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/models/").concat(id),
    body: dto,
    options: options,
  });
}
exports.updateEntry = updateEntry;
function updateEntryVisibility(id, dto, options) {
  return api_1.RightConsents.http({
    method: "PUT",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/models/")
      .concat(id, "/visibility"),
    body: dto,
    options: options,
  });
}
exports.updateEntryVisibility = updateEntryVisibility;
function deleteEntry(id, options) {
  return api_1.RightConsents.http({
    method: "DELETE",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/models/").concat(id),
    options: options,
  });
}
exports.deleteEntry = deleteEntry;
function setDefaultInfoModel(user, operator, form, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/models/defaultinfo"),
    params: { user: user, operator: operator, form: form },
    options: options,
  });
}
exports.setDefaultInfoModel = setDefaultInfoModel;
function listVersions(id, options) {
  if (options === void 0) {
    options = { noAuth: true };
  }
  return api_1.RightConsents.http({
    method: "GET",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/models/")
      .concat(id, "/versions"),
    options: options,
  });
}
exports.listVersions = listVersions;
function createVersion(id, dto, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/models/")
      .concat(id, "/versions"),
    body: dto,
    options: options,
  });
}
exports.createVersion = createVersion;
function getLatestVersion(id, options) {
  if (options === void 0) {
    options = { noAuth: true };
  }
  return api_1.RightConsents.http({
    method: "GET",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/models/")
      .concat(id, "/versions/latest"),
    options: options,
  });
}
exports.getLatestVersion = getLatestVersion;
function getActiveVersion(id, options) {
  if (options === void 0) {
    options = { noAuth: true };
  }
  return api_1.RightConsents.http({
    method: "GET",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/models/")
      .concat(id, "/versions/active"),
    options: options,
  });
}
exports.getActiveVersion = getActiveVersion;
function getVersion(id, versionId, options) {
  if (options === void 0) {
    options = { noAuth: true };
  }
  return api_1.RightConsents.http({
    method: "GET",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/models/")
      .concat(id, "/versions/")
      .concat(versionId),
    options: options,
  });
}
exports.getVersion = getVersion;
function updateVersion(id, versionId, dto, options) {
  return api_1.RightConsents.http({
    method: "PUT",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/models/")
      .concat(id, "/versions/")
      .concat(versionId),
    body: dto,
    options: options,
  });
}
exports.updateVersion = updateVersion;
function updateVersionStatus(id, versionId, status, options) {
  return api_1.RightConsents.http({
    method: "PUT",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/models/")
      .concat(id, "/versions/")
      .concat(versionId, "/status"),
    body: { status: status },
    options: options,
  });
}
exports.updateVersionStatus = updateVersionStatus;
function updateVersionType(id, versionId, type, options) {
  return api_1.RightConsents.http({
    method: "PUT",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/models/")
      .concat(id, "/versions/")
      .concat(versionId, "/type"),
    body: { type: type },
    options: options,
  });
}
exports.updateVersionType = updateVersionType;
function getVersionPreview(id, vid, dto, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/models/")
      .concat(id, "/versions/")
      .concat(vid, "/preview"),
    body: dto,
    responseType: "text",
    options: options,
  });
}
exports.getVersionPreview = getVersionPreview;
function deleteVersion(id, versionId, options) {
  return api_1.RightConsents.http({
    method: "DELETE",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/models/")
      .concat(id, "/versions/")
      .concat(versionId),
    options: options,
  });
}
exports.deleteVersion = deleteVersion;
function exportEntry(id, options) {
  if (options === void 0) {
    options = { noAuth: true };
  }
  return api_1.RightConsents.http({
    method: "GET",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/models/")
      .concat(id, "/export"),
    options: options,
  });
}
exports.exportEntry = exportEntry;
function importEntry(dto, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/models/import"),
    body: dto,
    options: options,
  });
}
exports.importEntry = importEntry;
