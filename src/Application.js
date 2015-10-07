//deal with invalid input
//total at the end
//round at the end does not work when there are 3 x 10s

updater = new BowlingScoreUpdater();

var htmlWriter = function(score){

  if (updater.frameRoundsLeft === 1 && updater.currentFrameTotal + score > 10) {
    return;
  };

  updater.newRound(score);

  if (score === 10){
    document.getElementById('round'+ updater.roundNumber.toString()).innerHTML = 'X';
  } else if (updater.currentFrameTotal === 10 && updater.frameRoundsLeft === 0) {
    document.getElementById('round'+ updater.roundNumber.toString()).innerHTML = '/';
  } else {
    document.getElementById('round'+ updater.roundNumber.toString()).innerHTML = score;
  };

  var currentFrameNumber = updater.currentFrameNumber;
  var prevFrameNumber = updater.currentFrameNumber - 1;
  var prevPrevFrameNumber = updater.currentFrameNumber - 2;

  if (currentFrameNumber >= 1 && currentFrameNumber <= 10){
    document.getElementById('f'+ currentFrameNumber.toString()).innerHTML
      = updater.currentFrameTotal;
  };

  if (prevFrameNumber >= 1 && prevFrameNumber <= 10){
    document.getElementById('f'+ prevFrameNumber.toString()).innerHTML
      = updater.prevFrameTotal;
  };

  if (prevPrevFrameNumber >= 1 && prevPrevFrameNumber <= 10){
    document.getElementById('f'+prevPrevFrameNumber.toString()).innerHTML
      = updater.prevPrevFrameTotal;
  };

  document.getElementById('total_score').innerHTML = updater.GameTotal;
};

document.addEventListener('DOMContentLoaded', function() {
  for(i = 0; i < 11; i++){
    document.getElementById('btn' + i.toString()).addEventListener("click", function() {
      htmlWriter(Number(this.id.replace('btn', '')));
    });
  };
});





//
// document.addEventListener('DOMContentLoaded', function() {
//
//   document.getElementById("btn0").addEventListener("click", function() {
//     alert("Button clicked, id "+this.id+", text"+this.innerHTML);
//     htmlWriter(0);
//   });
//
//   document.getElementById("btn1").addEventListener("click", function() {
//     htmlWriter(1);
//   });
//
//   document.getElementById("btn2").addEventListener("click", function() {
//     htmlWriter(Number(this.id.replace('btn', '')));
//   });
//
//   document.getElementById("btn3").addEventListener("click", function() {
//     htmlWriter(3);
//   });
//
//   document.getElementById("btn4").addEventListener("click", function() {
//     htmlWriter(4);
//   });
//
//   document.getElementById("btn5").addEventListener("click", function() {
//     htmlWriter(5);
//   });
//
//   document.getElementById("btn6").addEventListener("click", function() {
//     htmlWriter(6);
//   });
//
//   document.getElementById("btn7").addEventListener("click", function() {
//     htmlWriter(7);
//   });
//
//   document.getElementById("btn8").addEventListener("click", function() {
//     htmlWriter(8);
//   });
//
//   document.getElementById("btn9").addEventListener("click", function() {
//     htmlWriter(9);
//   });
//
//   document.getElementById("btn10").addEventListener("click", function() {
//     htmlWriter(10);
//   });
// });
