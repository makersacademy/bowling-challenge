$(function(){
  var bowling = new BowlingScore();
  $('.rolls li').on('click',function(){
    var pins = $(this).html()

     bowling.roll(parseInt(pins));
     bowling.calculateScore();
     var index = bowling.currentFrame()
    $('#frame'+index).html('<span>'+bowling.scores()[index-1]+'<span>')
    $('#score'+index).html('<span>'+bowling.score()+'<span>')
    $('.total').html('<span>'+bowling.score()+'<span>')
  })
})
