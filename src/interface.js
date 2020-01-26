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

  function update_scores(game) {

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

  function update_images(game) {

    let root = document.documentElement;
  
    var pins_down = game.getPinsDownFrame(game.previous_frame);
    var url = 'url("images/' + (10 - pins_down) + '.jpg")';

    if (game.isPinResetRequired() === true) {
      root.style.setProperty('--background_overlay_url', url);
      setTimeout(function() {

        root.style.setProperty('--background_overlay_url', 'url("images/10.jpg")');

      }, 2000);
      
      
    }
 
    else {
      
      
      var pins_down_1st = game.getPinsDown(game.previous_frame,1);
      var url_background = 'url("images/' + (10 - pins_down_1st) + '.jpg")';
      root.style.setProperty('--background_url', url_background);

      setTimeout(function() {

        root.style.setProperty('--background_overlay_url', url);

      }, 50);
    
    }
  }
  
  var hit = new sound("audio/hit.mp3");
  var miss = new sound("audio/miss.mp3");


  $('#bowl').click(function() { 
    
    var previous_pins_down = game.getPinsDown(game.previous_frame,game.previous_roll);
    var randomness = Math.floor(Math.random() * (11 - previous_pins_down ));
    game.play(randomness);

    if (randomness === 0) {

      miss.play();

    }
    else {

      hit.play();

    }

    setTimeout(function() {

      update_scores(game);
      update_images(game);

    }, 1950);

    

  
    


  })


})