$(document).ready(function(){ 
  var bowling = new Bowling()

$('#score').text(bowling.score);


$('#input-form').submit(function(){
  var input = $('#input').val()
  //console.log(input)
  $('#num-pins-down').text(input)
  getInputMethod =bowling.getInput(input)
  bowling.runCardMaking()
  return false 
})


  
})

