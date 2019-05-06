$(document).ready(function () {


  var bowling = new Bowling();

  responseClick(1);
  responseClick(2);
  responseClick(3);
  responseClick(4);
  responseClick(5);
  responseClick(6);
  responseClick(7);
  responseClick(8);
  responseClick(9);

  $('#submit10').on('click', function () {
    var num_f10r1 = Number($('#fram10roll1').val());
    var num_f10r2 = Number($('#fram10roll2').val());
    bowling.knock(num_f10r1);
    bowling.knock(num_f10r2);
    if (num_f10r1 == 10 || (num_f10r1 + num_f10r2) == 10) {
      bowling.knock(Number($('#fram10roll3').val()));
    }

    updateprevioustotal(10);
  });

  function responseClick(number) {
    $('#submit' + number).on('click', function () {
      bowling.knock(Number($('#fram' + number + 'roll1').val()));
      if (Number($('#fram' + number + 'roll1').val()) < 10) {
        bowling.knock(Number($('#fram' + number + 'roll2').val()));
      };
      updateprevioustotal(number);
    });
  };

  function updateprevioustotal(number) {
    if (number > 2) {
      $('#totaltillfram' + number).text(bowling.getTotalScores(number));
      $('#totaltillfram' + (number - 1)).text(bowling.getTotalScores(number - 1));
      $('#totaltillfram' + (number - 2)).text(bowling.getTotalScores(number - 2));
    } else if (number > 1) {
      $('#totaltillfram' + number).text(bowling.getTotalScores(number));
      $('#totaltillfram' + (number - 1)).text(bowling.getTotalScores(number - 1));
    } else {
      $('#totaltillfram' + number).text(bowling.getTotalScores(number));
    };

  }
});