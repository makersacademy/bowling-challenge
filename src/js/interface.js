$( document ).ready(function() {
  var scorecard = new Scorecard();

  $("#button-nav").on('click', 'button', (function(event){
    // scorecard.roll(button.value)
    $('#roll1').text(this.id);
  }));

});
