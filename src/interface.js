$(document).ready(() => {

  game = new Bowling()

  $('#frame1').find('#roll1').text('5')

  $('.knockDownPinsBtn').click(function (event) {
    //Process button click event
    game.roll(Number(this.value))
  });

});