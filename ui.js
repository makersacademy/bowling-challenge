$(document).ready(function(){

  var card = new Scorecard();
  var clicks = 0;

  $('#one').click(function(){
    helper(1);
  });
  $('#two').click(function(){
    helper(2);
  });
  $('#three').click(function(){
    helper(3);
  });
  $('#four').click(function(){
    helper(4);
  });
  $('#five').click(function(){
    helper(5);
  });
  $('#six').click(function(){
    helper(6);
  });
  $('#seven').click(function(){
    helper(7);
  });
  $('#eight').click(function(){
    helper(8);
  });
  $('#nine').click(function(){
    helper(9);
  });
  $('#ten').click(function(){
    helper(10);
  });

  function helper(number){

    if (clicks == 0){
      card.record_first(number);
      $('#s_box1_f1').text(`${number}`)
      clicks += 1;
    } else if (clicks == 1) {
      card.record_second(number);
      $('#s_box2_f1').text(`${number}`)
      clicks += 1;
      $('#b_box_f1').text(card.frame_score_display());

    } else if (clicks == 2) {
      card.record_first(number);
      $('#s_box1_f2').text(`${number}`)
      clicks += 1;
    } else if (clicks == 3) {
      card.record_second(number);
      $('#s_box2_f2').text(`${number}`)
      clicks += 1;
      $('#b_box_f2').text(card.frame_score_display());
        // ------------------------------------------
    } else if (clicks == 4) {
      card.record_first(number);
      $('#s_box1_f3').text(`${number}`)
      clicks += 1;
    } else if (clicks == 5) {
      card.record_second(number);
      $('#s_box2_f3').text(`${number}`)
      clicks += 1;
      $('#b_box_f3').text(card.frame_score_display());
    } else if (clicks == 6) {
      card.record_first(number);
      $('#s_box1_f4').text(`${number}`)
      clicks += 1;
    } else if (clicks == 7) {
      card.record_second(number);
      $('#s_box2_f4').text(`${number}`)
      clicks += 1;
      $('#b_box_f4').text(card.frame_score_display());
    } else if (clicks == 8) {
      card.record_first(number);
      $('#s_box1_f5').text(`${number}`)
      clicks += 1;
    } else if (clicks == 9) {
      card.record_second(number);
      $('#s_box2_f5').text(`${number}`)
      clicks += 1;
      $('#b_box_f5').text(card.frame_score_display());
    } else if (clicks == 10) {
      card.record_first(number);
      $('#s_box1_f6').text(`${number}`)
      clicks += 1;
    } else if (clicks == 11) {
      card.record_second(number);
      $('#s_box2_f6').text(`${number}`)
      clicks += 1;
      $('#b_box_f6').text(card.frame_score_display());
    } else if (clicks == 12) {
      card.record_first(number);
      $('#s_box1_f7').text(`${number}`)
      clicks += 1;
    } else if (clicks == 13) {
      card.record_second(number);
      $('#s_box2_f7').text(`${number}`)
      clicks += 1;
      $('#b_box_f7').text(card.frame_score_display());
    } else if (clicks == 14) {
      card.record_first(number);
      $('#s_box1_f8').text(`${number}`)
      clicks += 1;
    } else if (clicks == 15) {
      card.record_second(number);
      $('#s_box2_f8').text(`${number}`)
      clicks += 1;
      $('#b_box_f8').text(card.frame_score_display());
    } else if (clicks == 16) {
      card.record_first(number);
      $('#s_box1_f9').text(`${number}`)
      clicks += 1;
    } else if (clicks == 17) {
      card.record_second(number);
      $('#s_box2_f9').text(`${number}`)
      clicks += 1;
      $('#b_box_f9').text(card.frame_score_display());
    } else if (clicks == 18) {
      card.record_first(number);
      $('#s_box1_f10').text(`${number}`)
      clicks += 1;
    } else if (clicks == 19) {
      card.record_second(number);
      $('#s_box2_f10').text(`${number}`)
      clicks += 1;
      $('#b_box_f10').text(card.frame_score_display());
      $('#total').text(card.total_score_display());
    }
  };





});
