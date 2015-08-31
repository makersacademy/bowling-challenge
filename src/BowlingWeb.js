$( document ).ready(function() {
bowling = new Bowling();

  $('.pins-hit').each(function(i, button) {
    $(button).click(function() {
      bowling.roll(parseInt($(button).html()));
      $('#score').html(bowling.score);
    });
  });

  $('#1-1').change(function() {
    bowling.roll(parseInt($('#1-1').val()));
    $('#1-score').html(bowling.score);
    if(parseInt($('#1-1').val()) === 10) {
      $('#1-2').replaceWith("X")
    };
  });

  // $('#1-1').change(function() {
  //   bowling.roll(parseInt($('#1-1').val()));
  //   $('#1-score').html(bowling.score);
  //   if(parseInt($('#1-1').val()) === 10) {
  //     $('#1-2').replaceWith("X")
  //   };
  // });

});