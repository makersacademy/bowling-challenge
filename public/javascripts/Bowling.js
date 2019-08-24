function Bowling () {
   
    this._scorecard = []
    this._turn = []
    this._count = 1
    this._score = []
};

Bowling.prototype.turn = function(x, y){
    this._turn.push(x, y);
  };

Bowling.prototype.addTurn = function(turn){
    this._scorecard.push(turn);
    this._count ++
    this._turn = [];
  };
  
Bowling.prototype.scoreCalculatorPins = function(turn) {
    var a = parseInt(turn[0], 10)
    var b = parseInt(turn[1], 10)
    this._score.push(a + b)

};