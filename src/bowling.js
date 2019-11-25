  function Game() {
    
    this._totalScore = 0
    
    this._frameScore = 0 
    this._frame = 1
    
    this._noOfRolls = 0

    this._strike = 0
    this._isStrike = false

    this._spare = 0
    this._isSpare = false

    this._pinsKnockedDown = 0
};



// Logic Functions ----------------------------------------------

Game.prototype.strikeOrSpare = function() {
  if (this._pinsKnockedDown == 10) {
    this._strike++ 
    this._isStrike = true
  }
  if (this._pinsKnockedDown < 10) {
    this._spare++
    this._isSpare = true
    // spare pinsKnockedDown - 10 
  }
}

// Simple Functions ---------------------------------------------

// Roll & Shows total number of pins knocked
Game.prototype.roll = function() {
  this._pinsKnockedDown = Math.ceil(Math.random() * 10)

  if (this._noOfRolls >= 2) throw ("Max rolls for frame: Hit Reset ");
  this._noOfRolls++ 
}

// Add Pins to Frame Score 
Game.prototype.add = function() {
  this._frameScore += this._pinsKnockedDown
}

// Change Frame number
Game.prototype.changeFrame = function() {
  if (this._frame >= 10) throw ("Max frames reached : Hit Reset ");
  
  if(this._noOfRolls === 2 && this._isSpare === true) {
    this._frame++ 
  } 
  if (this._noOfRolls === 1 && this._isStrike === true) {
    this._frame++
  }
}

//Add the Frame Score to the Total Score  
Game.prototype.score = function() {
  this._totalScore += this._frameScore 
}

// Reset pins for each frame & isSpare && isStrike 
Game.prototype.reset = function() {

    this._noOfRolls = 0 
    this._isSpare = false 
    this._isStrike = false
    this._frameScore = 0 
    this._pinsKnockedDown = 0
  
}




  // Test 
  
  // Determines how many pins are standing after the 1st Roll 
  // Game.prototype.pinsRemaining = function() {
  //   if (pinsKnockedDown < 10) {
  //     pinsStanding = this._pinsKnockedDown -= this._totalPins
  //   }
  // }


// Need to determine what this does 
Game.prototype.addFrame = function(frame){
  this._currentFrame.push(frame)
  };

  // Calculating the bonus 
  Game.prototype.bonus = function() {
    if (this._isStrike === true) {
      this._frameScore += 10 
    }
  }

  // 10th Frame 


  // Is the Game a Perfect Game or a Gutter Game 






































    // Game.prototype.rolls = function() {
    //     this.no_of_rolls ++
    //     this.score.push(this.pinsKnockedDown)
    // };    

    // Game.prototype.add = function() {
    //   this.score = this.pinsKnockedDown
    // };

    // Game.prototype.frame = function() {
    //     if (this.rolls >= 2 ) {
    //     this.frame ++ 
    //     };
    // };

    // Game.prototype.test = function() {
    //   return 0
    // }




