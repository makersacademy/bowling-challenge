game = new Game();

var counter = '1';

$('.button').click(function (){
  var value = $(this).val();
  game.newRoll(parseInt(value));
});

$('.button').click(function (){
  var value = $(this).val();


  if(game.lastroll === 10) {
    counter = (parseInt(counter) + 1).toString();
    $('#' + counter).html('X');
    counter = (parseInt(counter) + 1).toString();
  } else {
    $('#' + counter).html(value);
    counter = (parseInt(counter) + 1).toString();

  }
});

$('.button').click(function (){
  if(game.rollcount === 1 && game.lastroll != 10){
    $("div[id='buttons'] > button").slice(10-this.value,10).hide();
  } else {
    $("div[id='buttons'] > button").show();
  }
});

// $('.button').click(function (){s
//   var value = $(this).val();
//   game.newRoll(value);
//   $('#2').html(value);
// });
