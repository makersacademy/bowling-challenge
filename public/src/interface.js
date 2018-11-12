$(document).ready(function() {
  frame = new Frame();
  var total_score = 0
  $('#strike').hide();
  $('#poor').hide();
  $('#average').hide();
  $('#welcome').show(3);



  $('#1').click(function() {
    frame.rollTheball(1);
    $('#roll_'+frame.ROLLCOUNT).text('1')
    $('#ts').text(frame.total);
    saveScore()
    $('#strike').hide(3);
    $('#average').hide(3);
    $('#poor').show(3);
    $('#welcome').hide();
    saveRoll(frame.ROLLCOUNT, '1');
  });

  $('#2').click(function() {
    frame.rollTheball(2);
    $('#roll_'+frame.ROLLCOUNT).text('2')
    $('#ts').text(frame.total);
    $('#strike').hide(3);
    $('#average').hide(3);
    $('#poor').show(3);
    $('#welcome').hide();
    saveScore()
    saveRoll(frame.ROLLCOUNT, '2')
  });

  $('#3').click(function() {
    frame.rollTheball(3);
    $('#roll_'+frame.ROLLCOUNT).text('3')
    $('#ts').text(frame.total);
    saveScore()
    saveRoll(frame.ROLLCOUNT, '3')
    $('#strike').hide(3);
    $('#average').hide(3);
    $('#poor').show(3);
    $('#welcome').hide();
  });

    $('#4').click(function() {
      frame.rollTheball(4);
      $('#roll_'+frame.ROLLCOUNT).text('4')
      $('#ts').text(frame.total);
      saveScore()
      saveRoll(frame.ROLLCOUNT, '4')
      $('#strike').hide(3);
      $('#average').hide(3);
      $('#poor').show(3);
      $('#welcome').hide();
    });

    $('#5').click(function() {
      frame.rollTheball(5);
      $('#roll_'+frame.ROLLCOUNT).text('5')
      $('#ts').text(frame.total);
      saveScore()
      saveRoll(frame.ROLLCOUNT, '5')
      $('#strike').hide(3);
      $('#poor').hide(3);
      $('#average').show(3);
      $('#welcome').hide();
    });

    $('#6').click(function() {
      frame.rollTheball(6);
      $('#roll_'+frame.ROLLCOUNT).text('6')
      $('#ts').text(frame.total);
      saveScore()
      saveRoll(frame.ROLLCOUNT, '6')
      $('#strike').hide(3);
      $('#poor').hide(3);
      $('#average').show(3);
      $('#welcome').hide();
    });

    $('#7').click(function() {
      frame.rollTheball(7);
      $('#roll_'+frame.ROLLCOUNT).text('7')
      $('#ts').text(frame.total);
      saveScore()
      saveRoll(frame.ROLLCOUNT, 7)
      $('#strike').hide(3);
      $('#poor').hide(3);
      $('#average').show(3);
      $('#welcome').hide();
    });

    $('#8').click(function() {
        frame.rollTheball(8);
        $('#roll_'+frame.ROLLCOUNT).text('8')
        $('#ts').text(frame.total);
        saveScore()
        saveRoll(frame.ROLLCOUNT, '8')
        $('#strike').hide(3);
        $('#poor').hide(3);
        $('#average').show(3);
        $('#welcome').hide();
    });

    $('#9').click(function() {
      frame.rollTheball(9);
      $('#roll_'+frame.ROLLCOUNT).text('9')
      $('#ts').text(frame.total);
      saveScore()
      saveRoll(frame.ROLLCOUNT, '9')
      $('#strike').hide(3);
      $('#poor').hide(3);
      $('#average').show(3);
      $('#welcome').hide();
    });

    $('#10').click(function() {
      frame.rollTheball(10);
      $('#roll_'+frame.ROLLCOUNT).text('X')
      $('#ts').text(frame.total);
      saveScore()
      saveRoll(frame.ROLLCOUNT, 'X')
      $('#strike').show(10);
      $('#poor').hide(3);
      $('#average').hide(3);
      $('#welcome').hide();
    });

    function saveScore() {
      $.ajax({
      type: "POST",
      url: "/save-score",
      data: { total: frame.total }
    });
    };

    function saveRoll(r, n) {
      $.ajax({
        type: "POST",
        url: "/save-score",
        data: { scores: n, roll: r}
      });
    };

    $.getJSON({
           type: "get",
           url: "/get-scores",
          success: 'scores',

    });

});
