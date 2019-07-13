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

  function conditions(number,box1,box2,bbox){
    if (number == 10){
     card.record_first(number);
     card.record_second(0);
     $(box1).text(`${number}`)
     $(box2).text(0)
     $(bbox).text(card.frame_score_display());
     clicks += 2;
     buttons();

    } else {
     card.record_first(number);
     $(box1).text(`${number}`)
     clicks += 1;
   }
  }

  function strike_score(card,bbox){
    if (card.st_bonus[0] == 10){
     card.strike_bonus();
     $(bbox).text(card.frame_score_display());
    } else {
     $(bbox).text(card.frame_score_display());
    }
  }

  function helper(number){

    //first frame
    if (clicks == 0){
      conditions(number,'#s_box1_f1','#s_box2_f1','#b_box_f1');

    } else if (clicks == 1) {
      buttons();
      card.record_second(number);
      $('#s_box2_f1').text(`${number}`)
      clicks += 1;
      $('#b_box_f1').text(card.frame_score_display());
      card.clear_bonus();
      console.log(card.sp_bonus);

     //second frame
    } else if (clicks == 2) {
      conditions(number,'#s_box1_f2','#s_box2_f2','#b_box_f2');

    } else if (clicks == 3) {
      buttons();
      card.record_second(number);
      $('#s_box2_f2').text(`${number}`)
      clicks += 1;
      card.spare_bonus();
      strike_score(card,'#b_box_f2');
      console.log(card.sp_bonus);
      card.clear_bonus();

      //third frame
    } else if (clicks == 4){
      conditions(number,'#s_box1_f3','#s_box2_f3','#b_box_f3');

    } else if (clicks == 5) {
      buttons();
      card.record_second(number);
      $('#s_box2_f3').text(`${number}`)
      clicks += 1;
      card.spare_bonus();
      strike_score(card,'#b_box_f3');
      console.log(card.sp_bonus);
      card.clear_bonus();

     //fourth frame
    } else if (clicks == 6) {
      conditions(number,'#s_box1_f4','#s_box2_f4','#b_box_f4');

    } else if (clicks == 7) {
      buttons();
      card.record_second(number);
      $('#s_box2_f4').text(`${number}`)
      clicks += 1;
      card.spare_bonus();
      strike_score(card,'#b_box_f4');
      console.log(card.sp_bonus);
      card.clear_bonus();

      //fifth frame
    } else if (clicks == 8){
      conditions(number,'#s_box1_f5','#s_box2_f5','#b_box_f5');

    } else if (clicks == 9) {
      buttons();
      card.record_second(number);
      $('#s_box2_f5').text(`${number}`)
      clicks += 1;
      card.spare_bonus();
      strike_score(card,'#b_box_f5');
      console.log(card.sp_bonus);
      card.clear_bonus();

     //sixth frame
    } else if (clicks == 10) {
      conditions(number,'#s_box1_f6','#s_box2_f6','#b_box_f6');

    } else if (clicks == 11) {
      buttons();
      card.record_second(number);
      $('#s_box2_f6').text(`${number}`)
      clicks += 1;
      card.spare_bonus();
      strike_score(card,'#b_box_f6');
      console.log(card.sp_bonus);
      card.clear_bonus();

      //sevent frame
    } else if (clicks == 12){
      conditions(number,'#s_box1_f7','#s_box2_f7','#b_box_f7');

    } else if (clicks == 13) {
      buttons();
      card.record_second(number);
      $('#s_box2_f7').text(`${number}`)
      clicks += 1;
      card.spare_bonus();
      strike_score(card,'#b_box_f7');
      console.log(card.sp_bonus);
      card.clear_bonus();

     //eight frame
    } else if (clicks == 14) {
      conditions(number,'#s_box1_f8','#s_box2_f8','#b_box_f8');

    } else if (clicks == 15) {
      buttons();
      card.record_second(number);
      $('#s_box2_f8').text(`${number}`)
      clicks += 1;
      card.spare_bonus();
      strike_score(card,'#b_box_f8');
      console.log(card.sp_bonus);
      card.clear_bonus();

      //nineth frame
    } else if (clicks == 16){
      conditions(number,'#s_box1_f9','#s_box2_f9','#b_box_f9');

    } else if (clicks == 17) {
      buttons();
      card.record_second(number);
      $('#s_box2_f9').text(`${number}`)
      clicks += 1;
      card.spare_bonus();
      strike_score(card,'#b_box_f9');
      console.log(card.sp_bonus);
      card.clear_bonus();

     //tenth frame
    } else if (clicks == 18) {
      conditions(number,'#s_box1_f10','#s_box2_f10','#b_box_f10');
      console.log(clicks);
      $('#total').text(card.total_score_array.reduce((a,b) => a + b, 0));

    } else if (clicks == 19) {
      buttons();
      card.record_second(number);
      $('#s_box2_f10').text(`${number}`)
      clicks += 1;
      card.spare_bonus();
      strike_score(card,'#b_box_f10');
      console.log(card.sp_bonus);
      card.clear_bonus();
      console.log(card.total_score_array);
      $('#total').text(card.total_score_display());
      $("#play_again").html( "<button type='button' class='btn btn-outline-warning btn-block'>Play again</button>" );
      console.log(clicks);
      // 10th frame <- Needs refactoring
    } else if (card.total_score_array.reduce((a,b) => a + b, 0) == 100) {

      if (clicks == 20){
        card.record_first(number);
        $('#s_box1_f10').text(`${number}`)
        clicks += 1;
      }
      $('#b_box_f10').text(card.frame_score_display());
      $('#total').text(card.total_score_array.reduce((a,b) => a + b, 0));
      console.log(clicks);

    } else if (clicks == 21) {

      console.log(clicks);
      card.record_second(number);
      $('#s_box2_f10').text(`${number}`)
      clicks += 1;
      card.total_score_array.pop();
      $('#b_box_f10').text(card.frame_score_display());
      $('#total').text(card.total_score_array.reduce((a,b) => a + b, 0));
      buttons();
      console.log(clicks);

      //new
    } else if (clicks == 22) {

      $('#s_box1_f10').text(`${number}`)
      card.total_score_array.push(number);
      clicks += 1;
      $('#b_box_f10').text(card.total_score_array.reduce((a,b) => a + b, 0));
      $('#total').text(card.total_score_array.reduce((a,b) => a + b, 0));

      if (card.total_score_array.length == 12 && card.total_score_array.reduce((a,b) => a + b, 0) == 120) {
        $('#total').text('Perfect Game 300 points');
        $("#play_again").html( "<button type='button' class='btn btn-outline-warning btn-block'>Play again</button>" );
        $('#ten, #nine, #eight, #seven, #six, #five, #four, #three, #two, #one, #zero').attr('class','disabled');
        $('#ten, #nine, #eight, #seven, #six, #five, #four, #three, #two, #one, #zero').text('');
      }

    } else if (clicks == 23) {
      console.log(card.total_score_array);
      $('#s_box2_f10').text(`${number}`)
      card.total_score_array.push(number);
      clicks += 1;
      $('#b_box_f10').text(card.total_score_array.reduce((a,b) => a + b, 0));
      $('#total').text(card.total_score_array.reduce((a,b) => a + b, 0));
      buttons();

    } else if (clicks == 24) {

      $('#s_box1_f10').text(`${number}`)
      card.total_score_array.push(number);
      clicks += 1;
      $('#b_box_f10').text(card.total_score_array.reduce((a,b) => a + b, 0));
      $('#total').text(card.total_score_array.reduce((a,b) => a + b, 0));

    } else if (clicks == 25) {
      $('#s_box2_f10').text(`${number}`)
      card.total_score_array.push(number);
      clicks += 1;
      $('#b_box_f10').text(card.total_score_array.reduce((a,b) => a + b, 0));
      $('#total').text(card.total_score_array.reduce((a,b) => a + b, 0));

      $("#play_again").html( "<button type='button' class='btn btn-outline-warning btn-block'>Play again</button>" );
      $('#ten, #nine, #eight, #seven, #six, #five, #four, #three, #two, #one, #zero').attr('class','disabled');
      $('#ten, #nine, #eight, #seven, #six, #five, #four, #three, #two, #one, #zero').text('');
    }

  };

});
