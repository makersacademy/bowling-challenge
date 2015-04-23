$(document).ready(function(){

  var scorecard = new Bowling();

  $('#begin').click(function() {
    $('.mainCard').fadeTo('slow', 2, function(){});
    $('#begin').hide();
  });

});