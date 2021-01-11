function handleBody(text) {

  return text;
}

chrome.tabs.getSelected(null, (tab) => {
  chrome.tabs.sendRequest(tab.id, {}, (res) => {
    console.log(handleBody(res.html));
  });
});
