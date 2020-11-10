const API_URL = "http://localhost:3030/process";

document.getElementById("SendData").addEventListener("click", sendData);

function sendData() {
  let data = $("#data")[0].value;

  $.ajax({
    type: "POST",
    url: API_URL,
    data: {'text': data},
    success: (res) => {
      console.log(`Success! ${res}`);
    },
    error: (a, b, c) => {
      console.log(`Error: ${c}`);
    }
  });
}
