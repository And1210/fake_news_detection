document.getElementById("input_button").addEventListener("click", ()=>{openTab('input');});
document.getElementById("output_button").addEventListener("click", ()=>{openTab('output');});

function openTab(tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	$(".tablinks").removeClass("selected");
	$(".tab-link").removeClass("selected");
	// document.getElementById(tabName).style.display = "block";
	$("#"+tabName).fadeIn("slow", "swing", () => {});
	document.getElementById(tabName + "_li").className += " selected";
	$('#'+tabName+'_li')[0].children[0].className += " selected";

	if (tabName == "output") {
		setProgress(curVal);
	} else {
		setProgress(0);
	}
}

openTab('input');
