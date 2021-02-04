document.getElementById("autoDetect").addEventListener("click", autoDetect);

function handleBody(text) {
  let out = "";
  let orig = text.split('\n');

  for (let txt of orig) {
    if (txt.split(' ').length > 4) {
      out += txt + '\n';
    }
  }
  return out;
}

function autoDetect() {
  console.log("detecting");
  chrome.tabs.getSelected(null, (tab) => {
    chrome.tabs.sendRequest(tab.id, {}, (res) => {
      console.log(handleBody(res.html));
      sendData(handleBody(res.html));
    });
  });
}
