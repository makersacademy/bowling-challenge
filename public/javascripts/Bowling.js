function Bowling () {
   
    this._scorecard = []
    this._turn = []
    this._count = 1
    this._scores = []
    this._cumulator = 0
};

Bowling.prototype.turn = function(x, y){
    this._turn.push(x, y);
  };

Bowling.prototype.addTurn = function(turn){
    this._scorecard.push(turn);
    this.scoreCalculatorPins(turn);
    this._count ++
    this._turn = [];
    this.cumulator
    console.log(this._scores)
  };
  
Bowling.prototype.scoreCalculatorPins = function(turn) {  
    var a = parseInt(turn[0], 10)
    var b = parseInt(turn[1], 10)
    this._scores.push(a + b)
};



function myTot(total, num) {
  return total + num;
}
