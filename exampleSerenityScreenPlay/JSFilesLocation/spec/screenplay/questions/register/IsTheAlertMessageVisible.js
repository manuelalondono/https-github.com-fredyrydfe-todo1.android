"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const assertions_1 = require("../../assertions");
const Alerts_1 = require("../../interactions/register/Alerts");
class IsTheAlertMessageVisible {
    constructor(expectedMessage) {
        this.expectedMessage = expectedMessage;
    }
    static reads(expectedMessage) {
        return new IsTheAlertMessageVisible(expectedMessage);
    }
    performAs(actor) {
        return __awaiter(this, void 0, void 0, function* () {
            const alertMessage = yield Alerts_1.Alerts.GetAlertText();
            console.log(alertMessage);
            return actor.attemptsTo(screenplay_protractor_1.See.if(alertMessage, assertions_1.equals(this.expectedMessage)));
        });
    }
}
exports.IsTheAlertMessageVisible = IsTheAlertMessageVisible;
//# sourceMappingURL=IsTheAlertMessageVisible.js.map