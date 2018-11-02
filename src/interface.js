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




  function updateTotal(){
    $('#runningTotal').text(scorecard.total);
  };

});
