/**
 * create a window when the app onLaunched
 *
 * Listens for the app launching then creates the window
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 *
 * @auther Charles
 * @since 12/10/2014
 */
chrome.app.runtime.onLaunched.addListener(function () {
    var landPage = 'html/index.html';
    var winWidth = 962;
    var winHeight = 623;

    chrome.app.window.create(landPage, {
        bounds: {
            width: winWidth,
            height: winHeight
        },
        minWidth: winWidth,
        minHeight: winHeight
        // frame: 'none',
    });
});