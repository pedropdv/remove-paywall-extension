chrome.action.onClicked.addListener((tab) => {
  if (tab && tab.url) {
    const newUrl = "https://www.removepaywall.com/" + tab.url;
    chrome.tabs.update(tab.id, { url: newUrl });
  }
});
