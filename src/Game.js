var Game = function(){
  this.score = 0;
  this.framenumber = 0;
  this.framescore = [];
  this.pinsko = [];
};


Game.prototype.score = function () {
  // if (this.framescore !== []) {
  //   return this.framescore.reduce(function(a,b) { return a+b; } );
  // };
  return this.score
};

Game.prototype.rollBall = function(x, y, z){
  this.framenumber+=1;
  if (this.framenumber >= 11) {
    throw new Error('The game is over');
  };

  this.pinsko.push(x); 

  if (x === 10) {
    if (this.framenumber !== 10) {
      if ((y != undefined ) || (z != undefined )) {
      throw new Error('CHEATER!');
      }
      else {
      // It works but stops the code from running. so have to by pass.
      // throw 'STRIKE!';
      this.framescore.push('X');
      };
    } else {
      if ((y === undefined ) || (z === undefined )) {
        throw new Error('This frame is not over! Roll a ball');
      };
    this.pinsko.push(y);
    this.pinsko.push(z);
    };
  }
  else {
    this.pinsko.push(y);
    if ((x+y) ===10) {
    // throw 'SPARE!';
    this.framescore.push('/');
    }
    else {
    this.framescore.push(x+y);
    };
  };
};