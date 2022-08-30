function button(id){
	
	var hatinfo= document.getElementById(id);
	if (hatinfo.style.display === "none"){
		hatinfo.style.display = "inline-block";
	} else{
		hatinfo.style.display="none";
	}
}