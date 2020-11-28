const API_URL = "http://134.122.43.254:3030/process";

document.getElementById("data").addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    event.preventDefault();
    document.getElementById("sendData").click();
  }
});

document.getElementById("sendData").addEventListener("click", sendData);
document.getElementById("clear").addEventListener("click", clear);

function sendData() {
  let data = $("#data")[0].value;

  $.ajax({
    type: "POST",
    url: API_URL,
    data: {'text': data},
    success: (res) => {
      console.log(`Success! ${res}`);
      curVal = parseInt(res[15]+res[16]);
      openTab("output");
    },
    error: (a, b, c) => {
      console.log(`Error: ${c}`);
    }
  });
}

function clear() {
  $("#data")[0].value = "";
}
