var chkLevel = function checkLevel() {
	
	var getImgName = getImageName();
  	alert(getImgName);

	if (getImgName=="Squirtle.png") {
		return 1;
	}
	
	return 0;
}

var getImageName = function getImageName() {
	 var myImage = document.getElementById("destImg"); 
	var src = myImage.src; 
  
	if(src.indexOf('/') >= 0) {
		src = src.substring(src.lastIndexOf('/')+1);
	}
	
	return src;
}