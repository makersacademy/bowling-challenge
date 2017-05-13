var bowling = new Bowling();

document.getElementById("totalScore").innerHTML= "Current Score: "+ bowling.currentScore

$('.btn').hide(); 
$('#br1r1').show(); 	

function enterPinsHit(id) {
	nextCell = theNextCell(id);
	do {
		var pinsKnocked = prompt("Please enter how many pins you knocked down");
		console.log(typeof pinsKnocked);
	}
	while(pinsKnocked=="" || pinsKnocked==null || /[\D\s]/.test(pinsKnocked))
	while(pinsKnocked >10 || pinsKnocked <0){
		var pinsKnocked = prompt("Please enter a valid number of pins");
	}
	while((bowling.lastHit+parseInt(pinsKnocked)>10 && bowling.rollNumber==2 && bowling.lastHit <10) || pinsKnocked=="" || pinsKnocked==null || /[\D\s]/.test(pinsKnocked)){
  	var pinsKnocked = prompt("Please enter a valid number of pins.");
  }   
  bowling.updateScore(parseInt(pinsKnocked));	 
  document.getElementById(id).innerHTML = pinsKnocked;
  $('#b'+id).hide(); 	
  showNextCell(id);
  skipCell(id);	
	document.getElementById("totalScore").innerHTML= "Current Score: "+ bowling.currentScore
}

function theNextCell(id){
	if(id!='r10r3'){
		return $('#'+id).closest('td').next()[0].id;
	}
}

function theLastCell(id){
	if(id!='r1r1'){
		return $('#'+id).closest('td').prev()[0].id;
	}
}

function skipCell(id){
	nextCell = theNextCell(id);
	if(bowling.strike===1 && bowling.lastHit==10 && id.substr(0,3)!="r10" ){		
		$('#b'+nextCell).hide();
		moveCell = theNextCell(nextCell);
		$('#b'+moveCell).show();
	}
}

function showNextCell(id){
	nextCell = theNextCell(id);
	if(bowling.round<11){
    $('#b'+nextCell).show();
  }
}




