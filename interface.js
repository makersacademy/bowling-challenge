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

    numberOfRolls += 1;

    let roll = parseInt($('#roll').val());

    if (isNaN(roll)) {
      roll = 0;
    }

    $('#roll' + numberOfRolls).text(roll);
  });

  $('.record').click(function(e) {
    e.preventDefault(e);

    numberOfRolls += 1;

    let rollScore = parseInt(e.currentTarget.value);

    $('#roll' + numberOfRolls).text(rollScore);
  });
});
