$(document).ready(function(){

  var card = new Scorecard();
  var clicks = 0;

  function buttons(){
    $("#ten, #nine, #eight, #seven, #six, #five, #four, #three, #two, #one").attr('class','page-link');
    $('#ten').text('10');
    $('#nine').text('9');
    $('#eight').text('8');
    $('#seven').text('7');
    $('#six').text('6');
    $('#five').text('5');
    $('#four').text('4');
    $('#three').text('3');
    $('#two').text('2');
    $('#one').text('1');
  };

  $('#zero').click(function(){
    helper(0);
  });

  $('#one').click(function(){
    $('#ten').attr('class','disabled');
    $('#ten').text('');
    helper(1);
  });

  $('#two').click(function(){
    $('#ten, #nine').attr('class','disabled');
    $('#ten, #nine').text('');
    helper(2);
  });

  $('#three').click(function(){
    $('#ten, #nine, #eight').attr('class','disabled');
    $('#ten, #nine, #eight').text('');
    helper(3);
  });

  $('#four').click(function(){
    $('#ten, #nine, #eight, #seven').attr('class','disabled');
    $('#ten, #nine, #eight, #seven').text('');
    helper(4);
  });

  $('#five').click(function(){
    $('#ten, #nine, #eight, #seven, #six').attr('class','disabled');
    $('#ten, #nine, #eight, #seven, #six').text('');
    helper(5);
  });

  $('#six').click(function(){
    $('#ten, #nine, #eight, #seven, #six, #five').attr('class','disabled');
    $('#ten, #nine, #eight, #seven, #six, #five').text('');
    helper(6);
  });

  $('#seven').click(function(){
    $('#ten, #nine, #eight, #seven, #six, #five, #four').attr('class','disabled');
    $('#ten, #nine, #eight, #seven, #six, #five, #four').text('');
    helper(7);
  });

  $('#eight').click(function(){
    $('#ten, #nine, #eight, #seven, #six, #five, #four, #three').attr('class','disabled');
    $('#ten, #nine, #eight, #seven, #six, #five, #four, #three').text('');
    helper(8);
  });

  $('#nine').click(function(){
    $('#ten, #nine, #eight, #seven, #six, #five, #four, #three, #two').attr('class','disabled');
    $('#ten, #nine, #eight, #seven, #six, #five, #four, #three, #two').text('');
    helper(9);
  });

  $('#ten').click(function(){
    $('#ten, #nine, #eight, #seven, #six, #five, #four, #three, #two, #one').attr('class','disabled');
    $('#ten, #nine, #eight, #seven, #six, #five, #four, #three, #two, #one').text('');
    helper(10);
  });

  $('#play_again'). click(function(){
    location.reload(true);
   });


  function helper(number){

    //first frame

    if (clicks == 0){


      if (number == 10){
        card.record_first(number);
        card.record_second(0);
        $('#s_box1_f1').text(`${number}`)
        $('#s_box2_f1').text(0)
        $('#b_box_f1').text(card.frame_score_display());
        clicks += 2;
        buttons();
      } else {
        card.record_first(number);
        $('#s_box1_f1').text(`${number}`)
        clicks += 1;
      }


    } else if (clicks == 1) {
      buttons();
      card.record_second(number);
      $('#s_box2_f1').text(`${number}`)
      clicks += 1;
      $('#b_box_f1').text(card.frame_score_display());

    //second frame

    } else if (clicks == 2) {
      card.record_first(number);
      $('#s_box1_f2').text(`${number}`)
      clicks += 1;
    } else if (clicks == 3) {
      buttons();
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
      buttons();
      card.record_second(number);
      $('#s_box2_f3').text(`${number}`)
      clicks += 1;
      $('#b_box_f3').text(card.frame_score_display());
    } else if (clicks == 6) {
      card.record_first(number);
      $('#s_box1_f4').text(`${number}`)
      clicks += 1;
    } else if (clicks == 7) {
      buttons();
      card.record_second(number);
      $('#s_box2_f4').text(`${number}`)
      clicks += 1;
      $('#b_box_f4').text(card.frame_score_display());
    } else if (clicks == 8) {
      card.record_first(number);
      $('#s_box1_f5').text(`${number}`)
      clicks += 1;
    } else if (clicks == 9) {
      buttons();
      card.record_second(number);
      $('#s_box2_f5').text(`${number}`)
      clicks += 1;
      $('#b_box_f5').text(card.frame_score_display());
    } else if (clicks == 10) {
      card.record_first(number);
      $('#s_box1_f6').text(`${number}`)
      clicks += 1;
    } else if (clicks == 11) {
      buttons();
      card.record_second(number);
      $('#s_box2_f6').text(`${number}`)
      clicks += 1;
      $('#b_box_f6').text(card.frame_score_display());
    } else if (clicks == 12) {
      card.record_first(number);
      $('#s_box1_f7').text(`${number}`)
      clicks += 1;
    } else if (clicks == 13) {
      buttons();
      card.record_second(number);
      $('#s_box2_f7').text(`${number}`)
      clicks += 1;
      $('#b_box_f7').text(card.frame_score_display());
    } else if (clicks == 14) {
      card.record_first(number);
      $('#s_box1_f8').text(`${number}`)
      clicks += 1;
    } else if (clicks == 15) {
      buttons();
      card.record_second(number);
      $('#s_box2_f8').text(`${number}`)
      clicks += 1;
      $('#b_box_f8').text(card.frame_score_display());
    } else if (clicks == 16) {
      card.record_first(number);
      $('#s_box1_f9').text(`${number}`)
      clicks += 1;
    } else if (clicks == 17) {
      buttons();
      card.record_second(number);
      $('#s_box2_f9').text(`${number}`)
      clicks += 1;
      $('#b_box_f9').text(card.frame_score_display());
    } else if (clicks == 18) {
      card.record_first(number);
      $('#s_box1_f10').text(`${number}`)
      clicks += 1;
    } else if (clicks == 19) {
      buttons();
      card.record_second(number);
      $('#s_box2_f10').text(`${number}`)
      clicks += 1;
      $('#b_box_f10').text(card.frame_score_display());
      $('#total').text(card.total_score_display());
      $("#play_again").html( "<button type='button' class='btn btn-outline-warning btn-block'>Play again</button>" );
    }
  };


});
