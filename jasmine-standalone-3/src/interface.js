$(document).ready(function(){
    game = new BowlingGame();
    frame = new Frame();
    var firstRoll;
    var runScore =[];
    var count =0;
    pinHit = function(pins){
      if(game.isRollValid(pins) == false){
        comments.innerHTML = 'Invalid Roll - there are only ten frames!';
        return;
      }
  
      if (frame10.innerHTML == 10){
        game.addExtraRoll(9, pins);
        game.frameScore['10'].push(pins);
        if(game.frameScore['10'][1] == 10 && count ==0) {
          count += 1;
          comments.innerHTML = 'You get an extra roll as you hit double strike in this frame';
          return;
           }
           comments.innerHTML = 'Game Over!';
           var elems = document.getElementsByClassName("btn-primary");
           for(i = 0; i < 11; i++){
             elems[i].disabled = true;
           }
        game.calculateScore();
        let totalscore = game._totalScore ;
        yourscore.innerHTML = 'Your score: ' +" "+ totalscore;
        return;
      }
      
      game.currentMove(pins);
      
     frameScore();
      if(game.gameOver() == true){
        comments.innerHTML = 'Game Over!';
        var elems = document.getElementsByClassName("btn-primary");
        for(i = 0; i < 11; i++){
          elems[i].disabled = true;
        }
        game.calculateScore();
        let totalscore = game._totalScore - pins;
        yourscore.innerHTML = 'Your score: ' +" "+ totalscore;
        return;
      }
     totalScore();       
    };
 
  
    frameScore = function() {
      frame1.innerHTML = game.frameScore['1'];
      frame2.innerHTML = game.frameScore['2'];
      frame3.innerHTML = game.frameScore['3'];
      frame4.innerHTML = game.frameScore['4'];
      frame5.innerHTML = game.frameScore['5'];
      frame6.innerHTML = game.frameScore['6'];
      frame7.innerHTML = game.frameScore['7'];
      frame8.innerHTML = game.frameScore['8'];
      frame9.innerHTML = game.frameScore['9'];
      frame10.innerHTML = game.frameScore['10'];
    };
  
    totalScore = function() {
    
      for(let i = 0; i < game._frames.length; i++){
            runScore[i] = game._frames[i]['firstRoll']+game._frames[i]['secondRoll']
             this["marker"+i].innerHTML = runScore[i]
        }
    };

  });
  
  
    