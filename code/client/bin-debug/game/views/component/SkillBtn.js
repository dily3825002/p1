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
/**
 * 道具技能按钮
 */
var SkillBtn = /** @class */ (function (_super) {
    __extends(SkillBtn, _super);
    function SkillBtn() {
        return _super.call(this) || this;
    }
    SkillBtn.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.m_pNumLab.visible = false;
    };
    return SkillBtn;
}(eui.Component));
//# sourceMappingURL=SkillBtn.js.map