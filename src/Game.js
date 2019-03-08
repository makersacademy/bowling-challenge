function Game() {

  this.score = 0;
  this.frames = Array();
  this.gutterGame = false;
  this.perfectGame = false;
}

Game.prototype.addFrame = function(firstRoll, secondRoll) {
  var frame = new Frame(firstRoll, secondRoll);
  this.frames.push(frame);
}

Game.prototype.scoreGame = function() {
  
  for(var thisFrame = 0; thisFrame < this.frames.length; thisFrame++) {

    // base score
    this.score += this.frames[thisFrame].score;

    // bonuses
    if (thisFrame < 9) {

      if (this.frames[thisFrame].isAStrike) { // strike
        
        // is the next frame a strike?
        if (this.frames[thisFrame+1].isAStrike) {

          console.log('next frame is a strike');
          this.score += this.frames[thisFrame+1].score;

        } else { 
          
          // spare
          this.score += this.frames[thisFrame+1].rolls[0];
          this.score += this.frames[thisFrame+1].rolls[1];
        }

      } else if (this.frames[thisFrame].isASpare) { 
        
        // sapre
        this.score += this.frames[thisFrame+1].rolls[0];
      }

    } else if (thisFrame == 9) {

      // last frame
      
    } 
  }

  this.score == 0 ? this.gutterGame = true : this.gutterGame = false;
}