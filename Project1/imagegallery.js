// JavaScript Document

var newClick;
var oldClick;
var numClicks=0;

function hover(obj) {
	var img=obj.id;
	if (img=="img1") {
		obj.title="An eagle";
	}
	else if (img=="img2"){
		obj.title="A meerkat";
	}
	else if (img=="img3"){
		obj.title="A gang of cats";
	}
	else if (img=="img4"){
		obj.title="A bird, screaming";
	}
	else if (img=="img5"){
		obj.title="A raccoon";
	}
	
}
function clicked(obj) {
	var img=obj.id;
	newClick=img;
	borderColor(obj);
	if (img=="img1") {
		document.getElementById("caption").innerHTML="An eagle";
		
	}
	else if (img=="img2"){
		document.getElementById("caption").innerHTML="A meerkat";
		
	}
	else if (img=="img3"){
		document.getElementById("caption").innerHTML="A gang of cats";
		
	}
	else if (img=="img4"){
		document.getElementById("caption").innerHTML="A bird, screaming";
		
	}
	else if (img=="img5"){
		document.getElementById("caption").innerHTML="A raccoon";
		
	}	
	
	
	oldClick=newClick;                                              
	document.getElementById("lrgimg").src=obj.src;	
}


function borderColor(obj){
	
	if(numClicks>=1 ){
		document.getElementById(oldClick).className="thumbDown";
	} 
	if(newClick!=oldClick){
		obj.className= "thumbUp";
		numClicks++;	
	}
	
}
