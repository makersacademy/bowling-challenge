'use strict'

$(document).ready(function() { 


  var game = new Game()

  function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }

  var hit = new sound("audio/hit.mp3");
  var miss = new sound("audio/miss.mp3");
  var rollin = new sound("audio/rollin.mp3");


  function updateScores(game) {

    $('#F1-R1').text(game.getPinsDown(1,1));
    $('#F1-R2').text(game.getPinsDown(1,2));
    $('#F2-R1').text(game.getPinsDown(2,1));
    $('#F2-R2').text(game.getPinsDown(2,2));
    $('#F3-R1').text(game.getPinsDown(3,1));
    $('#F3-R2').text(game.getPinsDown(3,2));
    $('#F4-R1').text(game.getPinsDown(4,1));
    $('#F4-R2').text(game.getPinsDown(4,2));
    $('#F5-R1').text(game.getPinsDown(5,1));
    $('#F5-R2').text(game.getPinsDown(5,2));
    $('#F6-R1').text(game.getPinsDown(6,1));
    $('#F6-R2').text(game.getPinsDown(6,2));
    $('#F7-R1').text(game.getPinsDown(7,1));
    $('#F7-R2').text(game.getPinsDown(7,2));
    $('#F8-R1').text(game.getPinsDown(8,1));
    $('#F8-R2').text(game.getPinsDown(8,2));
    $('#F9-R1').text(game.getPinsDown(9,1));
    $('#F9-R2').text(game.getPinsDown(9,2));
    $('#F10-R1').text(game.getPinsDown(10,1));
    $('#F10-R2').text(game.getPinsDown(10,2));

    $('#F'+ game.previous_frame + '-Score').text(game.getScore());

  }



  function imageUrl() {

    var pins_down = game.getPinsDownFrame(game.previous_frame);

    if (pins_down === 10 || pins_down === 20 || pins_down === 30) {
      var url = 'url("images/0.jpg")'
    }

    else {
    var url = 'url("images/' + (10 - (pins_down % 10)) + '.jpg")';
    }

    return url
  }


  function updateImages(game) {

    let root = document.documentElement;


    if (game.isPinResetRequired() === true) {

      root.style.setProperty('--overlay_url', imageUrl());

      setTimeout(function() {
        
        if (game.isOver() === false) {
          root.style.setProperty('--overlay_url', 'url("images/10.jpg")');
          document.getElementById('bowl').style.visibility = 'visible';
        }

        else{
          $('#message').text('YOU SCORED ' + parseInt(game.getScore()));
        }
        
      }, 2800);

    }
 
    else {
    
      root.style.setProperty('--background_url', imageUrl());

      setTimeout(function() {

        root.style.setProperty('--overlay_url', imageUrl());

        setTimeout(function() {

          document.getElementById('bowl').style.visibility = 'visible';
  
        }, 2780);

      }, 30);
    
    }

  }


  $('#bowl').click(function() { 
    
    rollin.play();

    document.getElementById('bowl').style.visibility = 'hidden';

    $('#message').text('');
  
    var generated_throw = game.generateThrow();

    game.play(generated_throw);

    if (generated_throw === 0) {

      miss.play();

    }

    else {

      hit.play();

    }

    setTimeout(function() {

      updateImages(game);

      updateScores(game);
      
      if (game.getPinsDownFrame(10) === 10 || game.getPinsDownFrame(10) === 20) {

        setTimeout(function() {

          if (game.isOver() === false)
          $('#message').text('BONUS GO!');

        }, 2300);
      }

    }, 2300);

  })

})