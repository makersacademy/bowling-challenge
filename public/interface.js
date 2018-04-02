$(document).ready(function(){
  var game = new Game();
  // updateResult();

  $('#zero').click(function(){
    game.roll(0);
    // game.count(1);
    updateResult();
  });

  $('#one').click(function(){
    game.roll(1);
    // game.count(1);
    updateResult();
  });

  $('#two').click(function(){
    game.roll(2);
    // game.count(2);
    updateResult();
  });

  $('#three').click(function(){
    game.roll(3);
    // game.count(3);
    updateResult();
  });

  $('#four').click(function(){
    game.roll(4);
    // game.count(4);
    updateResult();
  });

  $('#five').click(function(){
    game.roll(5);
    // game.count(5);
    updateResult();
  });

  $('#six').click(function(){
    game.roll(6);
    // game.count(6);
    updateResult();
  });

  $('#seven').click(function(){
    game.roll(7);
    // game.count(7);
    updateResult();
  });
  $('#eight').click(function(){
    game.roll(8);
    // game.count(8);
    updateResult();
  });

  $('#nine').click(function(){
    game.roll(9);

    // game.count(9);
    updateResult();
  });

  $('#ten').click(function(){
    game.roll(10);
    // game.count(10);
    updateResult();
  });

  function updateResult(){
    $('#score').text(game.score());
    // $("h1").text("Hello world!");
  };
});
