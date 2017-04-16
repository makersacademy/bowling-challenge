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

  if (this.framescore.indexOf('/') > -1) {
    this.framescore.pop();
    this.score += (10+x);
    this.framescore.push(this.score);
  };


  var count = 0;
  for(var i = 0; i < this.framescore.length; ++i){
    if(this.framescore[i] == 'X')
        count++;
  };

  if (count === 1) {
    if (x!== 10) {
      this.framescore.pop();
      this.score += (10+x+y);
      this.framescore.push(this.score);
    };
  };

  if (count === 2) {
      this.framescore.pop();
      this.framescore.pop();
      this.score += (20+x);
      this.framescore.push(this.score);
      this.framescore.push('X');
  };

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
    this.score += (10+y+z);
    this.framescore.push(this.score);
    };
  }
  else {
    this.pinsko.push(y);
    if (this.framenumber !== 10) {
      if ((x+y) ===10) {
      // throw 'SPARE!';
      this.framescore.push('/');
      } else {
      this.score += (x+y)
      this.framescore.push(this.score);
      };
    } else {
      if ((x+y) === 10) {
        if (z === undefined ) {
        throw new Error('This frame is not over! Roll a ball');
        } else {
        this.pinsko.push(z);
        this.score += (10+z);
        this.framescore.push(this.score);
        };
      };
    };
  };
};