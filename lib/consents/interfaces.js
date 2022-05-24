"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmationConfigKeys =
  exports.SubjectInfosKeys =
  exports.CONFIRMATION_TYPES =
  exports.Confirmation =
    void 0;
var Confirmation;
(function (Confirmation) {
  Confirmation["NONE"] = "NONE";
  Confirmation["FORM_CODE"] = "FORM_CODE";
  Confirmation["EMAIL_CODE"] = "EMAIL_CODE";
  Confirmation["SMS_CODE"] = "SMS_CODE";
  Confirmation["SIGNATURE"] = "SIGNATURE";
  Confirmation["AUDIO_RECORD"] = "AUDIO_RECORD";
  Confirmation["VIDEO_RECORD"] = "VIDEO_RECORD";
  Confirmation["DIGITAL_SIGNATURE"] = "DIGITAL_SIGNATURE";
})((Confirmation = exports.Confirmation || (exports.Confirmation = {})));
exports.CONFIRMATION_TYPES = Object.keys(Confirmation);
var SubjectInfosKeys;
(function (SubjectInfosKeys) {
  SubjectInfosKeys["EMAIL_KEY"] = "emailAddress";
  SubjectInfosKeys["PHONE_KEY"] = "phoneNumber";
})(
  (SubjectInfosKeys =
    exports.SubjectInfosKeys || (exports.SubjectInfosKeys = {}))
);
var ConfirmationConfigKeys;
(function (ConfirmationConfigKeys) {
  ConfirmationConfigKeys["SENDER_EMAIL_KEY"] = "senderEmail";
  ConfirmationConfigKeys["SENDER_PHONE_KEY"] = "senderPhone";
})(
  (ConfirmationConfigKeys =
    exports.ConfirmationConfigKeys || (exports.ConfirmationConfigKeys = {}))
);
