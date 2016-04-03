var bowling = new Bowling()

document.getElementById("totalScore").innerHTML= "Current Score: "+ bowling.currentScore
// $("#totalScore").text("work");
function enterPinsHit(id) {
    var pinsKnocked = prompt("Please enter how many pins you knocked down")

    document.getElementById(id).innerHTML = pinsKnocked;
    console.log(bowling.lastHit);
    console.log(bowling.round);
    console.log(bowling.rollNumber);
    bowling.updateScore(parseInt(pinsKnocked));
		console.log(bowling.spare);
if(document.getElementById(id).value){
	btn.style.visibility === "hidden";
}


document.getElementById("totalScore").innerHTML= "Current Score: "+ bowling.currentScore
// $("#totalScore").text("work");
}