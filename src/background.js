chrome.browserAction.onClicked.addListener(function(){
  var url = localStorage['trelloBGUrl'] ? localStorage['trelloBGUrl'] : "http://www.earth1999.jp/wallpaper/3ughssda/wallpaper_pc.jpg";
  chrome.tabs.executeScript(null, {
    "code": "document.getElementsByClassName('body-board-view')[0].style.backgroundImage = \"url("+url+")\""
  });
});