$(document).ready(function(){

  var card = new Scorecard();
  var clicks = 0;

  $('#one').click(function(){

  if (clicks == 0){
    card.record_first(1);
    $('#s_box1_f1').text('1')
    clicks += 1;
  } else if (clicks == 1) {
    card.record_second(1);
    $('#s_box2_f1').text('1')
    clicks += 1;
    $('#b_box_f1').text(card.frame_score_display());
  } else if (clicks == 2) {
    card.record_first(1);
    $('#s_box1_f2').text('1')
    clicks += 1;
  } else if (clicks == 3) {
    card.record_second(1);
    $('#s_box2_f2').text('1')
    clicks += 1;
    $('#b_box_f2').text(card.frame_score_display());
  }


  });









});
