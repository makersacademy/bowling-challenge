$(document).ready(function () {


  var bowling = new Bowling();

  $('#submit1').on('click', function () {
    bowling.knock(Number($('#fram1roll1').val()));
    bowling.knock(Number($('#fram1roll2').val()));
    updateprevioustotal(1);
  });

  $('#submit2').on('click', function () {
    bowling.knock(Number($('#fram2roll1').val()));
    bowling.knock(Number($('#fram2roll2').val()));
    updateprevioustotal(2);
  });

  $('#submit3').on('click', function () {
    bowling.knock(Number($('#fram3roll1').val()));
    bowling.knock(Number($('#fram3roll2').val()));
    updateprevioustotal(3);
  });

  $('#submit4').on('click', function () {
    bowling.knock(Number($('#fram4roll1').val()));
    bowling.knock(Number($('#fram4roll2').val()));
    updateprevioustotal(4);
  });

  $('#submit5').on('click', function () {
    bowling.knock(Number($('#fram5roll1').val()));
    bowling.knock(Number($('#fram5roll2').val()));
    updateprevioustotal(5);
  });

  $('#submit6').on('click', function () {
    bowling.knock(Number($('#fram6roll1').val()));
    bowling.knock(Number($('#fram6roll2').val()));
    updateprevioustotal(6);
  });

  $('#submit7').on('click', function () {
    bowling.knock(Number($('#fram7roll1').val()));
    bowling.knock(Number($('#fram7roll2').val()));
    updateprevioustotal(7);
  });

  $('#submit8').on('click', function () {
    bowling.knock(Number($('#fram8roll1').val()));
    bowling.knock(Number($('#fram8roll2').val()));
    updateprevioustotal(8);
  });

  $('#submit9').on('click', function () {
    bowling.knock(Number($('#fram9roll1').val()));
    bowling.knock(Number($('#fram9roll2').val()));
    updateprevioustotal(9);
  });

  $('#submit10').on('click', function () {
    var num_f10r1 = Number($('#fram10roll1').val());
    var num_f10r2 = Number($('#fram10roll2').val());
    bowling.knock(num_f10r1);
    bowling.knock(num_f10r2);
    if(num_f10r1 == 10 || (num_f10r1+num_f10r2) == 10 ){
      bowling.knock(Number($('#fram10roll3').val()));
    }
    
    updateprevioustotal(10);
  });

function updateprevioustotal(number){
if(number>2){
  $('#totaltillfram'+number).text(bowling.getTotalScores(number));
  $('#totaltillfram'+(number-1)).text(bowling.getTotalScores(number-1));
  $('#totaltillfram'+(number-2)).text(bowling.getTotalScores(number-2));
}else if(number > 1){
  $('#totaltillfram'+number).text(bowling.getTotalScores(number));
  $('#totaltillfram'+(number-1)).text(bowling.getTotalScores(number-1));
}else{
  $('#totaltillfram'+number).text(bowling.getTotalScores(number));
};

}


});