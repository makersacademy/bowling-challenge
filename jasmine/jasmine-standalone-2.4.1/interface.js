

var bowling = new Bowling();

document.getElementById("totalScore").innerHTML= "Current Score: "+ bowling.currentScore

	$('.btn').hide(); 
	$('#br1r1').show(); 	
function enterPinsHit(id) {
	// cell = $('#'+id)
	nextCell = theNextCell(id);
  var pinsKnocked = prompt("Please enter how many pins you knocked down")
  if(pinsKnocked=="" || pinsKnocked==null){
    enterPinsHit(id);
  } else {
    document.getElementById(id).innerHTML = pinsKnocked;
    document.getElementById(id).setAttribute('value', pinsKnocked); 
    bowling.updateScore(parseInt(pinsKnocked));	   
    $('#b'+id).hide(); 	
    $('#b'+nextCell).show();
    console.log(nextCell + " boo");
  }
	if(bowling.strike===1 && bowling.lastHit==10){		
		$('#b'+nextCell).hide();
		moveCell = theNextCell(nextCell);
		console.log(moveCell);
		$('#b'+moveCell).show();
	}

document.getElementById("totalScore").innerHTML= "Current Score: "+ bowling.currentScore

}

function theNextCell(id){
	return $('#'+id).closest('td').next()[0].id
}
