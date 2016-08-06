$(document).ready(function(){

  var game = new Game();

  var $bowlButton = $('.btn-bowl');
  $bowlButton.click(function(){
    game.bowl();
    console.log(game);
    var result = game.bowlScore;
    var listItem = '<l>';
    listItem += result.toString();
    listItem += '</l>';
    $('.scores').append(listItem);
  });


});
