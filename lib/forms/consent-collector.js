"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentCollector = void 0;
var api_1 = require("../api");
var iframe_resizer_1 = require("iframe-resizer");
var ConsentCollector = /** @class */ (function () {
  function ConsentCollector(config) {
    this.config = config;
  }
  ConsentCollector.prototype.getContext = function () {
    return this.config.consentContext;
  };
  ConsentCollector.prototype.overrideSubject = function (newSubject) {
    this.config.consentContext.subject = newSubject;
    this.config.consentContext.author = newSubject;
  };
  ConsentCollector.prototype.collect = function (callback) {
    var _this = this;
    return new Promise(function (resolve, reject) {
      _this
        .getTokenFromBroker()
        .toPromise()
        .then(function (response) {
          if (
            !(response === null || response === void 0
              ? void 0
              : response.token)
          ) {
            throw new Error("Could not retrieve token");
          }
          switch (_this.config.mode) {
            case "embed":
              return _this.replaceElement(response.location);
            case "iframe":
              return _this.openInIframe(response.location);
            case "window":
            default:
              return _this.openInNewWindow(response.location);
          }
        })
        .then(function () {
          if (callback) {
            callback();
          }
          resolve();
        })
        .catch(function (err) {
          return reject(err);
        });
    });
  };
  ConsentCollector.prototype.getTokenFromBroker = function () {
    return api_1.RightConsents.http({
      method: "POST",
      url:
        this.config.tokenBrokerEndpoint +
        "?lang=" +
        this.config.consentContext.language,
      body: this.config.consentContext,
      options: {
        noAuth: true,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  ConsentCollector.prototype.openInNewWindow = function (location) {
    return new Promise(function (resolve) {
      var newWindow = window.open(
        location,
        "com_fs_window_consentCollect",
        "menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=900px,height=600px"
      );
      if (!newWindow) {
        throw new Error("Could not open window");
      }
      var interval = setInterval(function () {
        if (newWindow.closed) {
          resolve();
          clearInterval(interval);
        }
      }, 1500);
    });
  };
  ConsentCollector.prototype.openInIframe = function (location, callback) {
    var _this = this;
    return new Promise(function (resolve) {
      var parentEl;
      if (_this.config.iframeParentElementId) {
        parentEl = document.getElementById(_this.config.iframeParentElementId);
      }
      if (!parentEl) {
        parentEl = document.body;
      }
      var el = document.createElement("iframe");
      el.style.position = "absolute";
      el.style.width = "100%";
      el.style.height = "100%";
      el.setAttribute("src", location);
      parentEl.appendChild(el);
      (0, iframe_resizer_1.iframeResizer)(
        {
          log: false,
          checkOrigin: false,
          closedCallback: function (iframeId) {
            resolve();
          },
        },
        el
      );
    });
  };
  ConsentCollector.prototype.replaceElement = function (token, callback) {
    return new Promise(function (resolve) {
      return resolve();
    });
  };
  return ConsentCollector;
})();
exports.ConsentCollector = ConsentCollector;
