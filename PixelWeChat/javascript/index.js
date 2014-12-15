/**
 * load the web wechat in the webview
 *
 * @see https://developer.chrome.com/apps/tags/webview
 *
 * @auther Charles
 * @since 12/15/2014
 */
window.onload = function () {
    // get the wechat webview DOM
    // by querySelector rather than querySelector
    var wechatView = document.getElementById("wechatView");
    // set the src and event listener to the webview
    wechatView.src = "https://wx.qq.com";
    // loadcommit mean fired when a load has committed
    wechatView.addEventListener('loadcommit', function () {
        wechatView.insertCSS({file: "/css/wxInject.css"});
        wechatView.executeScript({file: "/javascript/wxInject.js"});
    });
}