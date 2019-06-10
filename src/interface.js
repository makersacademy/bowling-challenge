$(document).ready(function() {
  var scorecard = new Scorecard();
  updatescore();
  updateframe();


 function updatescore() {
     $('#score').text(scorecard.score);
   };

 function updateframe() {
      $('#frame').text(scorecard.frameCounter);
  };
});
