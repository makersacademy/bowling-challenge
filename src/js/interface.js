$( document ).ready(function() {
  var scorecard = new Scorecard();

  $("#button-nav").on('click', () => {
    // scorecard.roll(button.value)
    $('#roll1').text(this.id);
  }));

});
