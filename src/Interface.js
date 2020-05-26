$(document).ready(function() {
  var game = new Game();
  var score = new Score 
  var frame = 1
  var pin = 0
  var roll = 0



  $('#0').click(function() {
    game.roll(0)
    printPin(0)
    
    // testing();
    // testing2();
    
    pin ++
    updateScore();
  });
    
  $('#1').click(function() {
    game.roll(1)
    printPin(1)
    pin ++
    updateScore();
  });

  $('#2').click(function() {
    game.roll(2)
    printPin(2)
    pin ++
    updateScore();
  });

  $('#3').click(function() {
    game.roll(3)
    printPin(3)
    pin ++
    updateScore();
  })

  $('#4').click(function() {
    game.roll(4)
    printPin(4)
    pin ++
    updateScore();
  })

  $('#5').click(function() {
    game.roll(5)
    printPin(5)
    pin ++
    updateScore();
  })

  $('#6').click(function() {
    game.roll(6)
    printPin(6)
    pin ++
    updateScore();
  })

  $('#7').click(function() {
    game.roll(7)
    printPin(7)
    pin ++
    updateScore();
  })

  $('#8').click(function() {
    game.roll(8);
    printPin(8)
    pin ++
    updateScore();
  })

  $('#9').click(function() {
    game.roll(9);
    printPin(9)
    pin ++
    updateScore();
  })

  $('#10').click(function() {
    game.roll(10);
    printPin(10);
    pin += 2
    updateScore();
  })

  function updateScore(){
    if(pin % 2 === 0){
      result = score.scoring(game)
      $('#f' + frame + '-score').text(result)
      frame ++ 
    }
  };

  function printPin(n){
    index = score.frames 
    console.log(roll)
    if(score.frames === 9 && roll === 1){
      $('#f' + (index + 1) + '-r1').text(n);

      roll = 2
    }
    else if(score.frames === 9 && roll === 2){
      $('#f' + (index + 1) + '-r2').text(n);
    
      roll = 3
    }
    else if(roll === 3){
      $('#f2-r').text(n);
    }
    else if(n === 10){
      $('#f' + (index + 1) + '-r2').text("X");
      roll = 1
    }
    else if(roll === 2){
      $('#f' + (index + 1) + '-r2').text(n);
      
      roll = 1
    }
    else{
      $('#f' + (index + 1) + '-r1').text(n);

      roll = 2 
    }
  };
});




