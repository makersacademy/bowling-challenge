

var bowling = new Bowling();

document.getElementById("totalScore").innerHTML= "Current Score: "+ bowling.currentScore

function enterPinsHit(id) {
	cell = $('#'+id)

  var pinsKnocked = prompt("Please enter how many pins you knocked down")
  if(pinsKnocked=="" || pinsKnocked==null){
    enterPinsHit(id);
  } else {
    document.getElementById(id).innerHTML = pinsKnocked;
    document.getElementById(id).setAttribute('value', pinsKnocked); 
    bowling.updateScore(parseInt(pinsKnocked));	   
    $('#b'+id).hide(); 	
  }
	if(bowling.strike===1){
		nextCell = $('#'+id).closest('td').next()[0].id
		$('#b'+nextCell).hide();
		console.log(nextCell);
	}

document.getElementById("totalScore").innerHTML= "Current Score: "+ bowling.currentScore

}
