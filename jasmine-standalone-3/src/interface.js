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
      //|| game.frameScore['10'][1] == 10
      if (frame10.innerHTML == 10){
        console.log('**********');
        console.log('in the loop')
       // game.currentMove(pins);
        game.addExtraRoll(9, pins);
        game.frameScore['10'].push(pins);
        //game.addExtraRoll(9, pins);
        //game.frameScore['10'][1] == 10 && count !=0
        if(game.frameScore['10'][1] == 10 && count ==0) {
          count += 1;
          console.log('ins econd loop');
          console.log(game.frameScore['10']);
          comments.innerHTML = 'You get an extra roll as you hit double strike in this frame';
          // var $extraroll = $('#extrarollinput');
          // $extraroll.on('change', function () {
          //   let pin = this.value;
          //   console.log(pin);
          // }).change();
           // game.addExtraRoll(9, pins);
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
      //var pins = pins;
      
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
      //console.log(game._frames.indexOf[this._frames.length - 1]);
     // console.log(game._frames);
     //console.log(game.frameScore['1'])
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



      //frame1.innerHTML = game._frames[0]['firstRoll'] + ',' +game._frames[0]['secondRoll'] ;
      
      //console.log(game._totalScore);
      // this["marker"+0].innerHTML = game._totalScore;
      // frame2.innerHTML = game._frames[1]['firstRoll'] + ',' +game._frames[1]['secondRoll'];
      // this["marker"+1].innerHTML = game._frames[1]['firstRoll']+game._frames[1]['secondRoll'];;
      // frame3.innerHTML = game._frames[2]['firstRoll'] + ',' +game._frames[2]['secondRoll'];
      // frame4.innerHTML = game._frames[3]['firstRoll'] + ',' +game._frames[3]['secondRoll'];
      // frame5.innerHTML = game._frames[4]['firstRoll'] + ',' +game._frames[4]['secondRoll'];
      // frame6.innerHTML = game._frames[5]['firstRoll'] + ',' +game._frames[5]['secondRoll'];
      // frame7.innerHTML = game._frames[6]['firstRoll'] + ',' +game._frames[6]['secondRoll'];
      // frame8.innerHTML = game._frames[7]['firstRoll'] + ',' +game._frames[7]['secondRoll'];
      // frame9.innerHTML = game._frames[8]['firstRoll'] + ',' +game._frames[8]['secondRoll'];
      // frame10.innerHTML = game._frames[9]['firstRoll'] + ',' +game._frames[9]['secondRoll'];
    };
  
    totalScore = function() {
      console.log("*********")
      //runScore =game.runScore;
     // runScore = game.frameRunningScore();
     // console.log(runScore);
     // runScore = game.runScore;
     // console.log(runScore)
      for(let i = 0; i < game._frames.length; i++){
          // if(runScore[i]){
            runScore[i] = game._frames[i]['firstRoll']+game._frames[i]['secondRoll']
          //  console.log(runScore[i]);
             this["marker"+i].innerHTML = runScore[i]
            //this["marker"+i].innerHTML = runScore[i]['firstRoll']+runScore[i]['secondRoll'] ;
          //  }
        }
    };

  });
  
  
    // isGameOver = function(){
    //   if (game.gameOver() ===true ){
    //     var elems = document.getElementsByClassName("btn-primary");
    //     for(i = 0; i < 11; i++){
    //       elems[i].disabled = true;
    //     }
    // //    // marker0.innerHTML = game.runningTotal[-1];
    // //     gameover.innerHTML = 'Game Over!';
    // //     yourscore.innerHTML = 'Your score: ' +" "+ game.calculateScore();
    // //     playagain.innerHTML = '<button type="button" onclick="newGame()"  class="btn btn-secondary">Play Again!</button>'
    // //     }else{
    // //       return;
    //     }
    //     return true;
    // };
  
  //   newGame = function (){
  //     delete window.game;
  //     location.reload();
  //   }
  
  // });
  // function Game() {
  //   this.pinCount = 10;
  //   this.frameNumber = 1;
  //   this.rollNumber = 1;
  //   this.gameover = false;
  //   this.frameScore = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]};
  //   this.totalScore = [];
  //   this.runningTotal = [];
  //   this.bonus = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', 10:''};
  //   this.bonusNextFrame = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', 10:''};
  // }
  // Game.prototype.throw = function(pinsHit) {
  //   this.rollNumber ++;
  //   this.pinCount -= pinsHit;
  // };
  
  // Game.prototype.roll = function(pinsHit) {
  //   this.isRollValid(pinsHit);
  //   if (this.frameNumber == 10){
  //     this.finalFrame(pinsHit);
  //     return;
  //   };
  //   if (pinsHit === 10 && this.rollNumber === 1) {
  //     this.frameScore[this.frameNumber].push("X");
  //     this.bonus[this.frameNumber] = 'Strike';
  //     this.bonusNextFrame[this.frameNumber +1] = 'StrikeFrame';
  //     this.nextFrame(pinsHit);
  //     return pinsHit;
  //   } else if((pinsHit + this.firstRollScore()[0]) === 10 && this.rollNumber > 1) {
  //     this.frameScore[this.frameNumber].push("/");
  //     this.bonus[this.frameNumber] = 'Spare';
  //     this.bonusNextFrame[this.frameNumber +1] = 'SpareFrame';
  //     this.nextFrame();
  //     return pinsHit;
  //   }
  //   else {
  //     this.throw(pinsHit);
  //     this.frameScore[this.frameNumber].push(pinsHit)
  //     if (this.isFrameComplete()){
  //       this.nextFrame();
  //     } else {
  //       return pinsHit;
  //     }
  //   }
  // };
  
  
  // Game.prototype.isFrameComplete = function() {
  //   if(this.rollNumber > 2){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  
  // Game.prototype.nextFrame = function() {
  //   var spareBonus = this.firstRollScore();
  //   this.frameNumber ++;
  //   this.rollReset();
  //   this.calculateScore();
  //   this.sumGame();
  //   this.calculateBonus(this.totalScore,spareBonus);
  //   if(this.over()){
  //     console.log("Game Over")
  //     console.log("Final Score" +" "+ this.sumGame())
  //     return;
  //   }
  // };
  
  // Game.prototype.calculateBonus = function (scores,spareBonus) {
  //   if (this.bonusNextFrame[this.frameNumber-1] === 'StrikeFrame'){
  //     this.totalScore[this.frameNumber-3]+= this.totalScore[this.frameNumber-2];
  //   } else if(this.bonusNextFrame[this.frameNumber-1] === 'SpareFrame'){
  //     this.totalScore[this.frameNumber-3]+= spareBonus[0];
  //   }
  // };
  
  // Game.prototype.rollReset = function () {
  //   this.rollNumber = 1;
  //   this.pinCount = 10;
  // };
  
  // Game.prototype.firstRollScore = function () {
  //   return this.frameScore[this.frameNumber].slice(0,1)
  // };
  
  // Game.prototype.calculateScore = function () {
  //   if (this.bonus[this.frameNumber-1] === 'Strike'){
  //      var total = 10;
  //   }else if(this.bonus[this.frameNumber-1] === 'Spare'){
  //      var total = 10;
  //   }
  //   else{
  //      var total = this.frameScore[this.frameNumber - 1][0]+this.frameScore[this.frameNumber - 1][1];
  //   }
  //   this.totalScore.push(total)
  //   return total
  // };
  
  // Game.prototype.finalFrame = function (pinsHit) {
  //   if (pinsHit === 10 && this.rollNumber === 1) {
  //     this.frameScore[this.frameNumber].push("X");
  //     this.bonus[this.frameNumber] = 'Strike';
  //     this.bonusNextFrame[this.frameNumber +1] = 'StrikeFrame';
  //     this.rollNumber ++;
  //     this.calculateScore();
  //     this.calculateBonus(this.totalScore);
  //   }else if((pinsHit + this.firstRollScore()[0]) === 10 && this.rollNumber > 1) {
  //     this.frameScore[this.frameNumber].push("/");
  //     this.bonus[this.frameNumber] = 'Spare';
  //     this.bonusNextFrame[this.frameNumber +1] = 'SpareFrame';
  //     this.calculateScore();
  //     this.calculateBonus(this.totalScore);
  //   }else {
  //     this.throw();
  //     this.frameScore[this.frameNumber].push(pinsHit)
  //     if (this.isFrameComplete()){
  //       this.nextFrame();
  //     } else {
  //       return pinsHit;
  //     }
  //   }
  // };
  
  // Game.prototype.isRollValid = function(pinsHit) {
  //   if (pinsHit > this.pinCount ) {
  //     throw new Error("only 10 pins per frame");
  //     return false;
  //   }else if(this.frameNumber > 10){
  //     this.gameover = true;
  //     throw new Error("Game Over");
  //     return false;
  //   }else{
  //     return true;
  //   }
  // };
  
  // Game.prototype.over = function (){
  //   if (this.frameNumber > 10){
  //     return true;
  //   }
  // }
  
  // Game.prototype.sumGame = function(){
  //   var runTotal=0;
  //     for(var i = 0; i < this.totalScore.length; i++) {
  //       runTotal += this.totalScore[i];
  //     }
  //     this.runningTotal.push(runTotal);
  //     return runTotal;
  // }