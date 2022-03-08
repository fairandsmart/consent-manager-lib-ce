"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = exports.ConsentCollector = exports.UsersResource = exports.TokensResource = exports.SystemResource = exports.SubjectsResource = exports.StatsResource = exports.RecordsResource = exports.ReceiptsResource = exports.KeysResource = exports.ModelsResource = exports.ConsentsResource = exports.RightConsents = void 0;
__exportStar(require("./http"), exports);
__exportStar(require("./common"), exports);
var api_1 = require("./api");
Object.defineProperty(exports, "RightConsents", { enumerable: true, get: function () { return api_1.RightConsents; } });
exports.ConsentsResource = __importStar(require("./consents"));
exports.ModelsResource = __importStar(require("./models"));
exports.KeysResource = __importStar(require("./keys"));
exports.ReceiptsResource = __importStar(require("./receipts"));
exports.RecordsResource = __importStar(require("./records"));
exports.StatsResource = __importStar(require("./statistics"));
exports.SubjectsResource = __importStar(require("./subjects"));
exports.SystemResource = __importStar(require("./system"));
exports.TokensResource = __importStar(require("./tokens"));
exports.UsersResource = __importStar(require("./users"));
var forms_1 = require("./forms");
Object.defineProperty(exports, "ConsentCollector", { enumerable: true, get: function () { return forms_1.ConsentCollector; } });
exports.version = "v1.3.3";
