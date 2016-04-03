var bowling = new Bowling()

document.getElementById("totalScore").innerHTML= "Current Score: "+ bowling.currentScore

function enterPinsHit(id) {
    var pinsKnocked = prompt("Please enter how many pins you knocked down")
    if(pinsKnocked=="" || pinsKnocked==null){
    	enterPinsHit(id);
    } else {
	    document.getElementById(id).innerHTML = pinsKnocked;
	    document.getElementById(id).setAttribute('value', pinsKnocked); 

	    bowling.updateScore(parseInt(pinsKnocked));
	    
		}

		if(document.getElementById(id).value){
			btn.style.visibility === "hidden";
		}
		


document.getElementById("totalScore").innerHTML= "Current Score: "+ bowling.currentScore

}