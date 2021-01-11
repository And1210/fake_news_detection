// setInterval(() => {chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
//   // Send a request to the content script.
//   chrome.tabs.sendRequest(tabs[0].id, {}, function(response) {
//     console.log(response);
//   });
// });}, 2000);

// let interval = setInterval(() => {
//   chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
//     try {
//       chrome.tabs.sendMessage(tabs[0].id, {greeting: 'hello'}, function(response) {
//           console.log(response);
//       });
//     } catch(err) {
//       console.log(err);
//     }
//   });
// }, 1000);
//
// function stop() {
//   clearInterval(interval);
//   stopTime();
// }
//
// let time = setInterval(() => {
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, {greeting: 'hello'}, function(response) {
//       console.log(response);
//     });
//   });}, 1000);
//
// function stopTime() {
//   clearInterval(time);
// };
