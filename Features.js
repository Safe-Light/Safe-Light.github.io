var tester = document.getElementById("warnYellow");
tester.style.backgroundColor = "red";
var openFeature = function(feature){

	var contents = document.getElementsByClassName("content");
	for (var i=0; i < contents.length; i++){
		if(contents[i].getAttribute("id") !== feature){
			contents[i].style.display = "none";
		}
		else{
			contents[i].style.display = "block";
		}
	}

	
	tabButtons = document.getElementsByClassName("tabButton");
	
	for (var i = 0; i<tabButtons.length; i++){
		if(tabButtons[i] !== event.target){
			tabButtons[i].className = tabButtons[i].className.replace(" active","");
		}
		else{
			event.target.className += " active";
		}
		
	}
	
	


}