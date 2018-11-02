$(document).ready(function(){
  var scorecard = new Scorecard();

  $('#runningTotal').text(scorecard.total);

  $('#one').click(function(){
    scorecard.addOne();
    console.log("add one");
    updateTotal();
  });

  $('#two').click(function(){
    scorecard.addTwo();
    console.log("add two");
    updateTotal();
  });

  $('#three').click(function(){
    scorecard.addThree();
    console.log("add three");
    updateTotal();
  });

  $('#four').click(function(){
    scorecard.addFour();
    console.log("add four");
    updateTotal();
  });

  $('#five').click(function(){
    scorecard.addFive();
    console.log("add five");
    updateTotal();
  });

  $('#six').click(function(){
    scorecard.addSix();
    console.log("add six");
    updateTotal();
  });

  $('#seven').click(function(){
    scorecard.addSeven();
    console.log("add seven");
    updateTotal();
  });

  $('#eight').click(function(){
    scorecard.addEight();
    console.log("add eight");
    updateTotal();
  });

  $('#nine').click(function(){
    scorecard.addNine();
    console.log("add nine");
    updateTotal();
  });

  $('#ten').click(function(){
    scorecard.addTen();
    console.log("add ten");
    updateTotal();
  });

  $('#zero').click(function(){
    scorecard.addZero();
    console.log("add zero");
    updateTotal();
  });

  $('#test').click(function(){
    console.log(scorecard.seeArray());
  });


  function updateTotal(){
    $('#runningTotal').text(scorecard.total);
    for (var i = 1; i <= 20; i ++){
      $('#move' + i).text(scorecard._scoreArray[i - 1]);
    };
    $('#frame1').text(scorecard._scoreArray[0]+scorecard._scoreArray[1]);
    $('#frame2').text(scorecard._scoreArray[2]+scorecard._scoreArray[3]);
    $('#frame3').text(scorecard._scoreArray[4]+scorecard._scoreArray[5]);
    $('#frame4').text(scorecard._scoreArray[6]+scorecard._scoreArray[7]);
    $('#frame5').text(scorecard._scoreArray[8]+scorecard._scoreArray[9]);
    $('#frame6').text(scorecard._scoreArray[10]+scorecard._scoreArray[11]);
    $('#frame7').text(scorecard._scoreArray[12]+scorecard._scoreArray[13]);
    $('#frame8').text(scorecard._scoreArray[14]+scorecard._scoreArray[15]);
    $('#frame9').text(scorecard._scoreArray[16]+scorecard._scoreArray[17]);
    $('#frame10').text(scorecard._scoreArray[18]+scorecard._scoreArray[19]);
  };


});
