$(document).ready(function() {
  const scorecard = new Scorecard();
  let numberOfRolls = 0;

  // $('#addFrame').click(function(e) {
  //   e.preventDefault();
  //   let firstRoll = parseInt($('#firstRoll').val());
  //   let secondRoll = parseInt($('#secondRoll').val());
  //   if (isNaN(firstRoll)) {
  //     firstRoll = 0;
  //   } if (isNaN(secondRoll)) {
  //     secondRoll = 0;
  //   }

  //   scorecard.addFrame(new Frame(firstRoll, secondRoll));

  //   $('#score').text(scorecard.score);
  //   $('#frames').text(scorecard.frames.length);
  //   if (scorecard.frames.length === 1) {
  //     console.log('hello');
  //     $('#roll1').text(firstRoll);
  //     $('#roll2').text(secondRoll);
  //     $('#frame1').text(firstRoll+secondRoll);
  //   }
  // });

  $('#addRoll').click(function(e) {
    e.preventDefault();
    console.log(numberOfRolls);
    numberOfRolls += 1;

    let roll = parseInt($('#roll').val());

    if (isNaN(roll)) {
      roll = 0;
    }
    console.log(numberOfRolls);

    if (numberOfRolls === 1) {
      $('#roll1').text(roll);
    }
    if (numberOfRolls === 2) {
      $('#roll2').text(roll);
    }

    // scorecard.addFrame(new Frame(roll1, roll2));

    // $('#score').text(scorecard.score);
    // $('#frames').text(scorecard.frames.length);
    // if (scorecard.frames.length === 1) {
    //   console.log('hello');
    //   $('#r1').text(roll1);
    //   $('#r2').text(roll2);
    //   $('#frame1').text(roll1+roll2);
    // }
  });
});
