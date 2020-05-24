$(document).ready(function() {

  var game = new Game();
  var currentframe;
  var midframe = false;
  var firstroll

  $('#zeropins').on('click',function(){
    currentframe = game.frames.length + 1

    if (midframe === false){
      $('#frame' + currentframe + 'roll1').text(0);
      midframe = true
      firstroll = 0
    } else {
      $('#frame' + currentframe + 'roll2').text(0);
      midframe = false
      game.addFrame([firstroll, 0])
    }
  });

})
