

var bowling = new Bowling();

document.getElementById("totalScore").innerHTML= "Current Score: "+ bowling.currentScore

	$('.btn').hide(); 
	$('#br1r1').show(); 	

function enterPinsHit(id) {

	nextCell = theNextCell(id);
  var pinsKnocked = prompt("Please enter how many pins you knocked down")
  if(pinsKnocked=="" || pinsKnocked==null){
    enterPinsHit(id);
  } else {    
    bowling.updateScore(parseInt(pinsKnocked));	 
    document.getElementById(id).innerHTML = pinsKnocked;
    document.getElementById(id).setAttribute('value', pinsKnocked);   
    $('#b'+id).hide(); 	
    console.log(bowling.rollNumber);
    console.log(bowling.gameOver);
    if(bowling.round<11){
    $('#b'+nextCell).show();
    console.log(bowling.round);
  }
  }
	if(bowling.strike===1 && bowling.lastHit==10 && id.substr(0,3)!="r10" ){		
		$('#b'+nextCell).hide();
		moveCell = theNextCell(nextCell);
		$('#b'+moveCell).show();
	}

document.getElementById("totalScore").innerHTML= "Current Score: "+ bowling.currentScore

}

function theNextCell(id){
	if(id!='r10r3'){
		return $('#'+id).closest('td').next()[0].id;
	}
}

