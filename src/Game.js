var Game = function(){
  this.score = 0;
  this.number = 1;
  this.framescore = [];
};


Game.prototype.score = function () {
  // if (this.framescore !== []) {
  //   return this.framescore.reduce(function(a,b) { return a+b; } );
  // };
  return this.score
};

Game.prototype.rollBall = function(x, y){
  if (this.number >= 11) {
    throw new Error('The game is over');
  };
  this.number+=1;

  if (x === 10) {
    if (y != null) {
    throw new Error('CHEATER!');
    }
    else {
    // It works but stops the code from running. so have to by pass.
    // throw 'STRIKE!';
    this.framescore.push('X');
    };
  }
  else {
    if ((x+y) ===10) {
    // throw 'SPARE!';
    this.framescore.push('/');
    }
    else {
    this.framescore.push(x+y);
    };
  };
};