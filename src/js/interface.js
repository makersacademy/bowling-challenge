$( document ).ready(function() {
  var scorecard = new Scorecard();

  $('#1').click(function() {
    roll(1);
  })

  $('#2').click(function() {
    roll(2);
  })

  $('#3').click(function() {
    roll(3);
  })

  // $('#framescore')

    $('#framescore').text(scorecard.framescore());
});

//
// $('element').on('event', function() {
//
// })
