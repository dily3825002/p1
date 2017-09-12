var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var core;
(function (core) {
    var ModuleEventData = /** @class */ (function (_super) {
        __extends(ModuleEventData, _super);
        function ModuleEventData(messageID, moduleEnum, data) {
            var _this = _super.call(this, messageID, data) || this;
            _this.moduleEnum = moduleEnum;
            return _this;
        }
        return ModuleEventData;
    }(core.EventData));
    core.ModuleEventData = ModuleEventData;
})(core || (core = {}));
//# sourceMappingURL=ModuleEventData.js.map