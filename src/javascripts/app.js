game = new Game();

var counter = '1';

var value = 0;

$('.button').click(function (){
  value = $(this).val();
  game.newRoll(parseInt(value));
  updateCounter();
  hideShowButtons();
  updateScore();
});

function updateScore (){
  if(game.rollcount === 2) {
    $('.total[value=' + game.framecount + ']').html(game.score);
  }
}


function updateCounter () {
  if(game.lastroll === 10) {
    counter = (parseInt(counter) + 1).toString();
    $('#' + counter).html('X');
    counter = (parseInt(counter) + 1).toString();
  } else {
    $('#' + counter).html(value);
    counter = (parseInt(counter) + 1).toString();
  }
}

function hideShowButtons () {
  if(game.rollcount === 1 && game.lastroll != 10){
    $("div[id='buttons'] > button").slice(10-this.value,10).hide();
  } else {
    $("div[id='buttons'] > button").show();
  }
}
