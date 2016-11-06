jQuery( document ).ready(function() {

  var game = new Game();
  var idx = 0

  $('#one').on('click', function () {
    game.bowl(1);
    $('#roll' + idx.toString()).text(game.roll[idx]);
    if (idx % 2 === 0 && idx > 0 && idx <= 18) {
      var frame_idx = idx / 2;
      // console.log('#frame' + (frame_idx).toString());
      // console.log(game.frames)
      // console.log(game.frames[frame_idx - 1])
      $('#frame' + frame_idx.toString()).text(game.frames[frame_idx - 1]);
    }

    if (idx > 18) {
      $('#frame' + idx.toString()).text(game.frames[9]);


    }


    idx ++;
  });

  // Your code here.

});
