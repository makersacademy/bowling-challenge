function Bowling () {
   
    this._round = []
    this._turn = []
    this._count = 1
    
}

Bowling.prototype.turn = function(x, y){
    this._turn.push(x, y);
  }

Bowling.prototype.addturn = function(turn){
    this._round.push(turn);
    this._turn = []
    this._count ++
  }
  
