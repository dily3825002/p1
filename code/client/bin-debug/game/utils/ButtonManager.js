var ButtonManager = /** @class */ (function () {
    function ButtonManager() {
    }
    /**
     * 点击改变按钮大小特效
     * button:作为按钮的对象
     * scale:要改变的大小
     * initScale:初始的大小
     */
    ButtonManager.btnChangeByScale = function (button, scale, initScale) {
        egret.Tween.get(button).to({ scaleX: scale, scaleY: scale }, 70).to({ scaleX: initScale, scaleY: initScale }, 70);
    };
    /**
     * 按钮放大缩小
     * button:作为按钮的对象
     * scale:要改变的大小
     */
    ButtonManager.btnScale = function (button, scale) {
        button.scaleX = scale;
        button.scaleY = scale;
    };
    return ButtonManager;
}());
//# sourceMappingURL=ButtonManager.js.map