/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function (launchData) {
    var land_page = "html/main.html"
    chrome.app.window.create(land_page,
        {
            // frame: "none",
            bounds: {width: 1000, height: 680}
        }, function (createdWindow) {
            console.log(launchData)
            if (launchData.url) createdWindow.contentWindow._FILE = launchData.url;
        });
});