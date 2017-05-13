function myMove(move) {
  var getLevel;
  var id;
  var elem = document.getElementById("animate");   
  var chkClash = 0;
  var speed = 0;
  var minPosition = 0;
  var maxPosition = 150;
  var singleMove = 50;
  var topsTopPosition = elem.style.top;
  var leftStopPosition = elem.style.left;

  disableBtns(); // disable all btns during run
	
   if (move=='left') {
		pos = parseInt(leftStopPosition);
		leftStopPosition = parseInt(leftStopPosition) - parseInt(singleMove);
		if ((leftStopPosition) < (minPosition)) {
			enableBtns();
			exit;
		}
		
		// check whether position hit grass/wall/object
		chkClash = checkTraps(parseInt(leftStopPosition),parseInt(topsTopPosition));
		
		if (chkClash==1) {
			enableBtns();
			exit;
		} else {
			id = setInterval(leftFrame, speed);
		}
		
	} else if (move == 'right') {
		pos = parseInt(leftStopPosition);
		leftStopPosition = parseInt(leftStopPosition) + parseInt(singleMove);
		
		// check whether position hit grass/wall/object
		chkClash = checkTraps(parseInt(leftStopPosition),parseInt(topsTopPosition));
		if (chkClash==1) {
			enableBtns();	
			exit;
		}		
		if (parseInt(leftStopPosition) > parseInt(maxPosition)) {
			enableBtns();
			exit;
		} else {
			id = setInterval(rightFrame, speed);
		}
		
		
	} else if (move == 'up') {
		pos = parseInt(topsTopPosition);
		topsTopPosition = parseInt(topsTopPosition) - parseInt(singleMove);
		if (parseInt(topsTopPosition) < parseInt(minPosition)) {
			enableBtns();
			exit;
		}
		
		// check whether position hit grass/wall/object
		chkClash = checkTraps(parseInt(leftStopPosition),parseInt(topsTopPosition));
		if (chkClash==1) {
			enableBtns();
			exit;
		} else {
			id = setInterval(topFrame, speed);
		}	
		
		
	}  else if (move == 'down') {
		pos = parseInt(topsTopPosition);
		topsTopPosition = parseInt(topsTopPosition) + parseInt(singleMove);
		if (parseInt(topsTopPosition) > parseInt(maxPosition)) {
			enableBtns();
			exit;
		}
		// check whether position hit grass
		chkClash = checkTraps(parseInt(leftStopPosition),parseInt(topsTopPosition));
		if (chkClash==1) {
			enableBtns();
			exit;
		} else {
			id = setInterval(bottomFrame, speed);
		}
	}  
			
    // move "animate-box" to the right
	function rightFrame() {
    if (pos >= leftStopPosition) {
	  enableBtns();
	  checkPos();
      clearInterval(id);
    } else {
		pos++; 
		elem.style.left= pos + 'px';  
       }
    }

    // move "animate-box" to the left	
	function leftFrame() {
    if (pos <= leftStopPosition) {
	  enableBtns();
	  checkPos();
      clearInterval(id);
    } else {
		pos--; 
		elem.style.left= pos + 'px';  
       }
    }

	// move "animate-box" to the top	
	function topFrame() {
    if (pos <= topsTopPosition) {
	  enableBtns();
	  checkPos();
      clearInterval(id);
    } else {
		pos--; 
		elem.style.top= pos + 'px';  
       }
    }
	
  // move "animate-box" to the bottom		
  function bottomFrame() {
    if (pos >= topsTopPosition) {
	  enableBtns();
	  checkPos();
	  clearInterval(id);
    } else {
		pos++; 
		elem.style.top = pos + 'px'; 	  
       }
    }
	
	// this function checks whether the source has reached the destination.
	function checkPos(){
		var animateLeft = document.getElementById("animate").style.left;
		var animateTop = document.getElementById("animate").style.top;
		var destinationLeft = document.getElementById("destination").style.left;
		var destinationTop = document.getElementById("destination").style.top;
		
		if((animateLeft==destinationLeft) && (destinationTop==animateTop)) {
			disableBtns();
			getLevel = checkLevel();
			
			document.getElementById("destImg").src = "assets/img/Caught.gif";
			if (getLevel==0) {
				document.getElementById("message").innerHTML = "Level Completed <br> Process to next level";	
			} else {
				document.getElementById("message").innerHTML = "Level " +  getLevel + " Completed <br> Process to next level";	
			}
			document.getElementById("message").style.color = "black";			
			setTimeout(function(){ goToNextLevel(getLevel); }, 3000);
		}	
	}
		
	
	// check whether pokeball fell into traps/holes?
	function checkTraps(left,top) {
		var i;	
		var num = numOfTraps();
		var trap = [num]; 		

		for(i=0; i < num; i++) {
			trap[i]=document.getElementById("trap["+ parseInt(i) + "]").style;

			if (left== parseInt(trap[i].left) && top == parseInt(trap[i].top) && trap[i].visibility != 'hidden' ) {
				document.getElementById("message").innerHTML = "Invalid Move!";
				document.getElementById("message").style.color = "red";
				return 1;
			}
		}
		document.getElementById("message").innerHTML = "Poke-Code";
		document.getElementById("message").style.color = "black";
		return 0;		
	}
	
}

	// get number of traps
	function numOfTraps() { 
		return document.getElementsByClassName("trap").length;
	}

	function checkPosition() {
		alert("My pokeball is at Left-" + document.getElementById("animate").style.left + 
		" top-" + document.getElementById("animate").style.top +
		" POKEMON is at " + document.getElementById("destination").style.left + 
		" top-" + document.getElementById("destination").style.top);		
	}

	function resetPosition() {
		document.getElementById("animate").style.left=0;
		document.getElementById("animate").style.top=0;	
		//checkPosition();
	}
	

	function checkTraps() {
		var i;
		var noOfTraps = numOfTraps();
		var trap = [noOfTraps];
		for(i=0;i<noOfTraps;i++) {
			trap[i]=document.getElementById("trap["+ parseInt(i) + "]").style;
		}		
	}
	
	function enableBtns() {
		leftBtn.disabled = false;
		rightBtn.disabled = false;
		topBtn.disabled = false;
		bottomBtn.disabled = false;
		resetBtn.disabled = false;
	}
	
	function disableBtns() {
		leftBtn.disabled = "true";
		rightBtn.disabled = "true";
		topBtn.disabled = "true";
		bottomBtn.disabled = "true";
		resetBtn.disabled = "true";
	}
	
	function levelTwo() {
		document.getElementById("destImg").src = "assets/img/Wartortle.png";
		document.getElementById("destImg").width = "250";
		document.getElementById("destImg").height = "250";
		document.getElementById("destination").style.left = "150px";
		document.getElementById("trap[8]").style.visibility='hidden';
	}
	
	function levelThree() {
		document.getElementById("destImg").src = "assets/img/Blastoise.png";
		document.getElementById("destImg").width = "250";
		document.getElementById("destImg").height = "250";
		document.getElementById("destination").style.left = "150px";
		document.getElementById("destination").style.top = "150px";
		document.getElementById("trap[8]").style.visibility='hidden';
	}
	
	function changeSize(width,height) {
		destImg.width= parseInt(width);
		destImg.height=parseInt(height);		
	}
	
	// goto next level
	function goToNextLevel(getLevel) {
		enableBtns();
		
		if (getLevel==1) {
			levelTwo();
		} if (getLevel==2) {
			levelThree();
		} 
		
	}
	
	// check levels	
	function checkLevel() {
		var getImgName = getImageName();

		if (getImgName=="Squirtle.png") {
			return 1;
		} else if (getImgName=="Wartortle.png") {
			return 2;
		}
		
		return 0;
	}

// get image name
	function getImageName() {
		var myImage = document.getElementById("destImg"); 
		var src = myImage.src; 
	
		if(src.indexOf('/') >= 0) {
			src = src.substring(src.lastIndexOf('/')+1);
		}
		
		return src;
	}


