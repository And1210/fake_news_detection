const API_URL = "http://134.122.43.254:3030/process";

document.getElementById("data").addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    event.preventDefault();
    document.getElementById("sendData").click();
  }
});

document.getElementById("sendData").addEventListener("click", sendRequest);
document.getElementById("clear").addEventListener("click", clear);

function sendData(data) {
  $.ajax({
    type: "POST",
    url: API_URL,
    data: {'text': data},
    success: (res) => {
      console.log(`Success! ${res}`);
      data = res.split(',');
      if (data[0] == "0") { //is fake
        curVal = Math.round(parseFloat(data[1]));
      } else {
        curVal = Math.round(100 - parseFloat(data[1]));
      }
      // curVal = parseInt(res[15]+res[16]);
      openTab("output");
    },
    error: (a, b, c) => {
      console.log(`Error: ${c}`);
    }
  });
}

function sendRequest() {
  let data = $("#data")[0].value;
  sendData(data);
}

function clear() {
  $("#data")[0].value = "";
}
