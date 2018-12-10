var bowlingCard = new BowlingCard();

$(document).ready(function(){

  $('.name').submit(function(event){
    event.preventDefault();
    var name = $('#player_name').val();
    $('.player').text(name);
    $('.name').hide();
    $('.enter-score').show();
  });

  $('.bowl-1').click(function(){
    bowlingCard.bowlingCard.enterScore(1);
    updateScoreCard();
  });
  $('.bowl-2').click(function(){
    bowlingCard.enterScore(2);
    updateScoreCard();
  });
  $('.bowl-3').click(function(){
    bowlingCard.enterScore(3);
    updateScoreCard();
  });
  $('.bowl-4').click(function(){
    bowlingCard.enterScore(4);
    updateScoreCard();
  });
  $('.bowl-5').click(function(){
    bowlingCard.enterScore(5);
    updateScoreCard();
  });
  $('.bowl-6').click(function(){
    bowlingCard.enterScore(6);
    updateScoreCard();
  });
  $('.bowl-7').click(function(){
    bowlingCard.enterScore(7);
    updateScoreCard();
  });
  $('.bowl-8').click(function(){
    bowlingCard.enterScore(8);
    updateScoreCard();
  });
  $('.bowl-9').click(function(){
    bowlingCard.enterScore(9);
    updateScoreCard();
  });
  $('.bowl-10').click(function(){
    bowlingCard.enterScore(10);
    updateScoreCard();
  });


  function updateScoreCard() {
    var frames_to_update = bowlingCard.scores.length/2 - bowlingCard.frameScores.length;
    for (var i=1;i<=frames_to_update;i++){
      var frame = Math.round(bowlingCard.scores.length/2);
      var bowl = (frame-1)*2;
      $('.frame'+frame+'_bowl1').text(bowlingCard.scores[bowl]);
      $('.frame'+frame+'_bowl2').text(bowlingCard.scores[bowl+1]);
      $('.frame'+frame+'_score').text(bowlingCard.frameScores[frame-1]);
    }
  }
});
