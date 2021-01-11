chrome.extension.onRequest.addListener((req, sender, sendRes) => {
  sendRes({html: document.body.innerText});
});
