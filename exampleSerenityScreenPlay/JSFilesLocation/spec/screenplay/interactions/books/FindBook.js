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
const protractor_1 = require("../../../../node_modules/protractor");
class FindBook {
    constructor() {
        this.rows = protractor_1.element.all(protractor_1.by.css("#listing > tbody > tr"));
    }
    InTheTable(book) {
        return __awaiter(this, void 0, void 0, function* () {
            let position;
            let numberOfRows = yield this.rows.count();
            for (let row = 2; row <= numberOfRows; row++) {
                let cellValue = yield protractor_1.element(protractor_1.by.css("#listing > tbody > tr:nth-child(" + row + ") > td:nth-child(1)")).getText();
                if (book == cellValue) {
                    position = row;
                    row = numberOfRows;
                }
            }
            return position;
        });
    }
}
exports.FindBook = FindBook;
//# sourceMappingURL=FindBook.js.map