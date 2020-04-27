$(document).ready(function(){ 
  var bowling = new Bowling()

$('#score').text(bowling.score);


$('#input-form').submit(function(){
  var input = $('#input').val()
  //console.log(input)
  $('#num-pins-down').text(input)
  bowling.getInput(input)
  bowling.runCardMaking()
  return false 
})


  
})

