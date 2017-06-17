'use-strict';

$( document ).ready(function(){

  var frame = new Frame();

  $('#bowl').on('click', function(){
    updateScore()
  });

  function updateScore() {
    var pins = frame.bowl()
    function pinS() {
      if (pins === 1) {
        return 'pin'
      } else {
        return 'pins'
      }
    }
    $('#currentScore').text('You knocked down ' + pins + ' ' + pinS() );
  }

});
