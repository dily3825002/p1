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
var MainUI = /** @class */ (function (_super) {
    __extends(MainUI, _super);
    function MainUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/main/MainSkin.exml";
        return _this;
    }
    MainUI.prototype.onShow = function () {
        _super.prototype.onShow.call(this);
        SoundUtils.getInstance().playSound(1, 0);
        this.onAdaptive();
    };
    MainUI.prototype.addListener = function () {
        _super.prototype.addListener.call(this);
        core.EventCenter.getInstance().addEventListener(egret.Event.RESIZE, this.onAdaptive, this);
        this.m_pHeroBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickRankBtn, this);
    };
    MainUI.prototype.removeListener = function () {
        _super.prototype.removeListener.call(this);
        core.EventCenter.getInstance().removeEventListener(egret.Event.RESIZE, this.onAdaptive, this);
        this.m_pHeroBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickRankBtn, this);
    };
    MainUI.prototype.onAdaptive = function () {
        UIManager.updataPoint(this.m_pBgImg, 667, 375);
        UIManager.rightBelowAdaptive(this.m_pRightLowGroup, 1067, 704);
    };
    MainUI.prototype.release = function () {
        _super.prototype.release.call(this);
    };
    MainUI.prototype.onClickRankBtn = function () {
        // core.EventCenter.getInstance().sendEvent(new core.ModuleEventData(core.EventID.MODULE_HIDE, ModuleEnum.MAINUI));
    };
    return MainUI;
}(core.EUIComponent));
//# sourceMappingURL=MainUI.js.map