"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAlias =
  exports.setAlias =
  exports.getAliases =
  exports.listSubjectRecords =
  exports.updateSubject =
  exports.createSubject =
  exports.getSubject =
  exports.listSubjects =
    void 0;
var api_1 = require("../api");
function listSubjects(name, options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/subjects"),
    params: { name: name },
    options: options,
  });
}
exports.listSubjects = listSubjects;
function getSubject(name, options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/subjects/")
      .concat(name),
    options: options,
  });
}
exports.getSubject = getSubject;
function createSubject(subject, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: "".concat(api_1.RightConsents.config.apiRoot, "/subjects"),
    body: subject,
    options: options,
  });
}
exports.createSubject = createSubject;
function updateSubject(subject, options) {
  return api_1.RightConsents.http({
    method: "PUT",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/subjects/")
      .concat(subject.id),
    body: subject,
    options: options,
  });
}
exports.updateSubject = updateSubject;
function listSubjectRecords(subject, options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/subjects/")
      .concat(subject, "/records"),
    options: options,
  });
}
exports.listSubjectRecords = listSubjectRecords;
function getAliases(subject, options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/subjects/")
      .concat(subject, "/aliases"),
    options: options,
  });
}
exports.getAliases = getAliases;
function setAlias(subject, supersede, options) {
  return api_1.RightConsents.http({
    method: "PUT",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/subjects/")
      .concat(subject, "/aliases"),
    params: { supersede: supersede },
    options: options,
  });
}
exports.setAlias = setAlias;
function removeAlias(alias, options) {
  return api_1.RightConsents.http({
    method: "DELETE",
    url: ""
      .concat(api_1.RightConsents.config.apiRoot, "/subjects/")
      .concat(alias, "/aliases"),
    options: options,
  });
}
exports.removeAlias = removeAlias;
