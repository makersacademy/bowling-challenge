/*jshint esversion: 6 */
$(document).ready(function(){
  scorecard = new Scorecard();

  $('#roll-input').submit(function(event){
    event.preventDefault();
    var roll = parseInt($('#roll').val());
    scorecard.roll(roll);
    var frameNumber = scorecard.frameNumber();
    var rollNumber = scorecard.rollNumber();
    $('.score').text(`Score: ${scorecard.printScores()}`);
    $('#status').text(`Frame: ${frameNumber}, Roll: ${rollNumber}`);
  });
  
});
