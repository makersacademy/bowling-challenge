$(document).ready(function(){
  var game = new Game();
  game.addFrame();

  $('.main-score').fadeIn(3000)

  $('#start').click(function(){

    console.log(game)
    $('#main-1').text(game.frames[0].scoreTotal)

    $('#current-score').text(game.TOTAL_SCORE)
  });

  $( "#score" ).change(function() {
  var score = parseInt($("#score option:selected").val());

  game.roundScore(score)
  console.log(game)
  if(game.frames[0].frameStrike==='X'){
  $('#sp-2').text(game.frames[0].frameStrike)
}else if(game.frames[0].frameSpare==='/'){
  $('#sp-2').text(game.frames[0].frameSpare)
}else{
  $('#sp-1').text(game.frames[0].roundOne)
  $('#sp-2').text(game.frames[0].roundTwo)
};
  $('#current-score').text(game.TOTAL_SCORE)
  $('#main-1').text(game.frames[0].scoreTotal)

  if(game.frames[1].frameStrike==='X'){
  $('#sp-4').text(game.frames[1].frameStrike)
}else if(game.frames[1].frameSpare==='/'){
  $('#sp-4').text(game.frames[1].frameSpare)
}else{
  $('#sp-3').text(game.frames[1].roundOne)
  $('#sp-4').text(game.frames[1].roundTwo)
};
  $('#current-score').text(game.TOTAL_SCORE)
  $('#main-2').text(game.frames[1].scoreTotal)

  if(game.frames[2].frameStrike==='X'){
  $('#sp-6').text(game.frames[2].frameStrike)
}else if(game.frames[2].frameSpare==='/'){
  $('#sp-6').text(game.frames[2].frameSpare)
}else{
  $('#sp-5').text(game.frames[2].roundOne)
  $('#sp-6').text(game.frames[2].roundTwo)
};
  $('#current-score').text(game.TOTAL_SCORE)
  $('#main-3').text(game.frames[2].scoreTotal)

  if(game.frames[3].frameStrike==='X'){
  $('#sp-8').text(game.frames[3].frameStrike)
}else if(game.frames[3].frameSpare==='/'){
  $('#sp-8').text(game.frames[3].frameSpare)
}else{
  $('#sp-7').text(game.frames[3].roundOne)
  $('#sp-8').text(game.frames[3].roundTwo)
};
  $('#current-score').text(game.TOTAL_SCORE)
  $('#main-4').text(game.frames[3].scoreTotal)

  if(game.frames[4].frameStrike==='X'){
  $('#sp-10').text(game.frames[4].frameStrike)
}else if(game.frames[4].frameSpare==='/'){
  $('#sp-10').text(game.frames[4].frameSpare)
}else{
  $('#sp-9').text(game.frames[4].roundOne)
  $('#sp-10').text(game.frames[4].roundTwo)
};
  $('#current-score').text(game.TOTAL_SCORE)
  $('#main-5').text(game.frames[4].scoreTotal)

  if(game.frames[5].frameStrike==='X'){
  $('#sp-12').text(game.frames[5].frameStrike)
}else if(game.frames[5].frameSpare==='/'){
  $('#sp-12').text(game.frames[5].frameSpare)
}else{
  $('#sp-11').text(game.frames[5].roundOne)
  $('#sp-12').text(game.frames[5].roundTwo)
};
  $('#current-score').text(game.TOTAL_SCORE)
  $('#main-6').text(game.frames[5].scoreTotal)

  if(game.frames[6].frameStrike==='X'){
  $('#sp-14').text(game.frames[6].frameStrike)
}else if(game.frames[6].frameSpare==='/'){
  $('#sp-14').text(game.frames[6].frameSpare)
}else{
  $('#sp-13').text(game.frames[6].roundOne)
  $('#sp-14').text(game.frames[6].roundTwo)
};
  $('#current-score').text(game.TOTAL_SCORE)
  $('#main-7').text(game.frames[6].scoreTotal)

  if(game.frames[7].frameStrike==='X'){
  $('#sp-16').text(game.frames[7].frameStrike)
}else if(game.frames[7].frameSpare==='/'){
  $('#sp-16').text(game.frames[7].frameSpare)
}else{
  $('#sp-15').text(game.frames[7].roundOne)
  $('#sp-16').text(game.frames[7].roundTwo)
};
  $('#current-score').text(game.TOTAL_SCORE)
  $('#main-8').text(game.frames[7].scoreTotal)

  if(game.frames[8].frameStrike==='X'){
  $('#sp-18').text(game.frames[8].frameStrike)
}else if(game.frames[8].frameSpare==='/'){
  $('#sp-18').text(game.frames[8].frameSpare)
}else{
  $('#sp-17').text(game.frames[8].roundOne)
  $('#sp-18').text(game.frames[8].roundTwo)
};
  $('#current-score').text(game.TOTAL_SCORE)
  $('#main-9').text(game.frames[8].scoreTotal)

  if(game.frames[9].frameStrike==='X'){
  $('#sp-20').text(game.frames[9].frameStrike)
}else if(game.frames[9].frameSpare==='/'){
  $('#sp-20').text(game.frames[9].frameSpare)
}else{
  $('#sp-19').text(game.frames[9].roundOne)
  $('#sp-20').text(game.frames[9].roundTwo)
};
  $('#current-score').text(game.TOTAL_SCORE)
  $('#main-10').text(game.frames[9].scoreTotal)
  console.log(game)

});
});
