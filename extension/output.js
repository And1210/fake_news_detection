let curVal = 0;
let fake = false;

const percentText = document.querySelector('#percent');
const resultText = document.querySelector('#result');

const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - percent/100 * circumference;
  circle.style.strokeDashoffset = offset;

  percentText.textContent = curVal+"%";

  if (fake) {
    resultText.textContent = "This article is FAKE NEWS."
  } else {
    resultText.textContent = "This article is REAL NEWS."
  }
}
