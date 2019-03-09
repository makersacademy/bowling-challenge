function Game() {

  this.score = 0;
  this.frames = Array();
  this.gutterGame = false;
  this.perfectGame = false;
}

Game.prototype.addFrame = function(firstRoll, secondRoll) {
  console.log('adding frame (' + firstRoll + ',' + secondRoll + ')');
  var frame = new Frame(firstRoll, secondRoll);
  this.frames.push(frame);
}

Game.prototype.scoreGame = function() {
  
  for(var thisFrame = 0; thisFrame < this.frames.length; thisFrame++) {

    console.log('scoring frame #' + (thisFrame+1));

    // base score
    this.score += this.frames[thisFrame].score;

    // bonuses
    if (thisFrame < 9) {

      if (this.frames[thisFrame].isAStrike) { // strike
        console.log("frame " + thisFrame + " is a strike!");
        
        // is the next frame a strike?
        if (this.frames[thisFrame+1].isAStrike) {

          console.log('the next frame (#' + (thisFrame+1) + ') is a strike');
          this.score += this.frames[thisFrame+1].score;

        } else if (this.frames[thisFrame+1].isASpare) { 
          
          // spare
          this.score += this.frames[thisFrame+1].rolls[0];
          this.score += this.frames[thisFrame+1].rolls[1];

        } else if (this.frames[thisFrame+1].isAnOpenFrame) {

          console.log('the next frame is an open frame...');
          this.score += this.frames[thisFrame+1].rolls[0];
          this.score += this.frames[thisFrame+1].rolls[1];
        }

      } else if (this.frames[thisFrame].isASpare) { 
        console.log('look at spares...');
        // sapre
        this.score += this.frames[thisFrame+1].rolls[0];

      } 

    } else {

      console.log('checking the last frame');
      
      if (this.frames[thisFrame].isAStrike) { // strike
        console.log("frame " + thisFrame + " is a strike!");
        this.score += this.frames[thisFrame].rolls[1];
        this.score += this.frames[thisFrame].rolls[2];
      }
    } 
  }

  this.score == 0 ? this.gutterGame = true : this.gutterGame = false;
}