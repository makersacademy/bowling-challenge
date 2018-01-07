$( document ).ready(function(){


  $('#restart').click(function(){
    window.location.reload();
  });
});

var game = new Game()

var rollIndex = 0;
var frameIndex = 0;
var rolls= [];
$('#r' + rollIndex).
