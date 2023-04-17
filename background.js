var lpby="nn";
chrome.contextMenus.create({
    title: "Watch with minimal interface",
    contexts:["link"],
    onclick: function(info, tab) {
        var url = info.linkUrl.replace("youtube.com/watch?v=", "youtube.com/embed/");
        chrome.tabs.create({url: url});
    }
});
chrome.webNavigation.onCompleted.addListener(function(details) {
    if (details.url.indexOf("google.com/search") != -1) {
        chrome.tabs.executeScript({
            code: 'var links = document.querySelectorAll("a"); for (var i = 0; i < links.length; i++) { var link = links[i]; if (link.href.indexOf("youtube.com/watch?v=") != -1) { link.href = link.href.replace("youtube.com/watch?v=", "youtube.com/embed/"); } }'
        });
    }
})
