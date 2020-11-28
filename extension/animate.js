//Constants
let MAX_TYPE = 0.25; //Min and max random type speed
let MIN_TYPE = 0.05;

let options = ["Politics", "Technology", "Business", "Entertainment", "Health", "Finance", "Sports"]; //Text options

//Variables
let curOption = -1;
let	charIndex = 0;
let lastAnim = getTime();
let resumeTime = 0;
let t;
let interval = null;
let flag = true;

let text = document.getElementById("to_animate");

setInterval(checkUpdate, 10);

function checkUpdate() {
	if (flag == true){
		changeText();
		flag = false;
	}
}

function changeText() {
	if (interval != null)
		clearInterval(interval);
	curOption++;
	curOption = curOption % options.length;
	charIndex = 0;
	setupAnimation();
}

function setupAnimation() {
		t = Math.random() * (MAX_TYPE - MIN_TYPE) + MIN_TYPE;
		interval = setInterval(animateText, 1);
}

function animateText() {
	if (charIndex < options[curOption].length) {
		if (getTime() > lastAnim + t) {
			t = Math.random() * (MAX_TYPE - MIN_TYPE) + MIN_TYPE;
			lastAnim = getTime();
			charIndex++;
		}
	} else {
		if (getTime() > lastAnim + 1) {
			flag = true;
		}
	}
	setText(options[curOption].substring(0, charIndex));
}

function setText(str_in) {
	text.innerHTML = "Helping you navigate news on <b><span style=\"color: #4CAF50;\">"+str_in+"</span></b>";
}

function getTime() { //Returns the time since 1970 in seconds
	return Date.now()/1000;
}
