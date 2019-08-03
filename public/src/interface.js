$( document ).ready(function() {
  var game = new Game

  $( "#one" ).click(function() {
  game.throw(1);
  updateScore();
});

  $( "#two" ).click(function() {
  game.throw(2);
  updateScore();
  });

  $( "#three" ).click(function() {
  game.throw(3);
  updateScore();
  });

  $( "#four" ).click(function() {
  game.throw(4);
  updateScore();
  });

  $( "#five" ).click(function() {
  game.throw(5);
  updateScore();
  });

  $( "#six" ).click(function() {
  game.throw(6);
  updateScore();
  });

  $( "#seven" ).click(function() {
  game.throw(7);
  updateScore();
  });

  $( "#eight" ).click(function() {
  game.throw(8);
  updateScore();
  });

  $( "#nine" ).click(function() {
  game.throw(9);
  updateScore();
  });

  $( "#ten" ).click(function() {
  game.throw(10);
  updateScore();
  });

  $( "#reset" ).click(function() {
  game.resetGame();
  updateScore();
  });

  $("button").click(function() {
    updateScore();
  });

  updateScore();

  function updateScore() {
    $('#score').text(game.showTotal);
    // POSTE REQUEST HERE, somtething like: $.post('/save').params(city,temp, psm)
    // needs a $get request here to retrieve the data to update the page.
  };
});
