function sampleFunction() {
    var user = prompt("SUBTOTAL CAN NOT TOTAL ABOVE 100! Strike and spare points will be totaled up in the 'BONUS POINTS' section, please enter name to confirm understanding");
    if (user != null) {
      document.getElementById("greeting").innerHTML =
        "Thank you, please proceed " + user + "!";
    }
  }
      
function rollOne() {
    var scoreInputTwo = document.getElementById("scoreInputTwo")
    var scoreInputOne = document.getElementById("scoreInputOne")
    if (scoreInputOne == 10){
        scoreInputTwo.disabled = true;
    }
      else {
        scoreInputTwo.disabled = false;
      }
  }


class Scorecard{
    constructor() {
        this.score = 0
    }
    getScores(givemestuff) {

        this.score += givemestuff;
    //  }
    //  getScoresTwo(givemestuff) {

    //     this.score += givemestuff;
     }

     
     
}

