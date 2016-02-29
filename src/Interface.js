$(document).ready(function(){


  $('form').submit(function(){
    var playername = $('input[name="username"]').val();
    var player = new Player(playername)

  });



});
