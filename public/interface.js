$(document).ready(function() {
  var game = new Game();

  ongoingTotal();

  $('#one').click(function(){
     game.shot(1);
     ongoingTotal();
   });

  $('#two').click(function(){
    game.shot(2);
    ongoingTotal();
  });

  $('#three').click(function(){
     game.shot(3);
     ongoingTotal();
   });

  $('#four').click(function(){
    game.shot(4);
    ongoingTotal();
  });

  $('#five').click(function(){
     game.shot(5);
     ongoingTotal();
   });

  $('#six').click(function(){
    game.shot(4);
    ongoingTotal();
  });

  $('#ten').click(function(){
    game.shot(10);
    console.log('ten pressed')
    ongoingTotal();
  });

  $('#bowling_button').click(function(){
    game.shot(10);
    console.log('ten pressed')
    ongoingTotal();
  });


   function ongoingTotal(){
     $('#total').text(game.score())
     console.log(game.score() + 'total')
     console.log(game)
   }
 });
