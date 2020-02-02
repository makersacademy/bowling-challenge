$('document').ready(function() {
var game = new Game();
var frames = game.frames
var whatFrame = frames.length

  $('#score').text(game.score);

  $('#1pin').on('click', function(){
    game.roll(1)
    $('#score').text(game.score)
  })

  $('#2pin').on('click', function(){
    game.roll(2)
    $('#score').text(game.score)
  })

  $('#3pin').on('click', function(){
    game.roll(3)
    $('#score').text(game.score)
  })

  $('#4pin').on('click', function(){
    game.roll(4)
    $('#score').text(game.score)
  })

  $('#5pin').on('click', function(){
    game.roll(5)
    $('#score').text(game.score)
  })

  $('#6pin').on('click', function(){
    game.roll(6)
    $('#score').text(game.score)
  })

  $('#7pin').on('click', function(){
    game.roll(7)
    $('#score').text(game.score)
  })

  $('#8pin').on('click', function(){
    game.roll(8)
    $('#score').text(game.score)
  })

  $('#9pin').on('click', function(){
    game.roll(9)
    $('#score').text(game.score)
  })

  $('#10pin').on('click', function(){
    game.roll(10)
    $('#score').text(game.score)
  })
  
  var locator = function() {
      "#" + whatFrame.toString() + "." + (frames[whatFrame - 1].length).toString()
  }

  $('.pins').on('click', function() {
    
  $(locator).text( game.score )

    $('#frames').append( frames.length );
    })




  
})



