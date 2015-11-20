function ScoreSheet() {
  this._sheet = [];
}

ScoreSheet.prototype.update = function(frame, roll, pinsDown, score) {
  var entry = { frame: frame,
                roll: roll,
                pinsDown: pinsDown,
                score: score
              };
  this._sheet.push(entry);
}

ScoreSheet.prototype.lastEntry = function() {
  return this._sheet.last();
}

ScoreSheet.prototype.erase = function() {
  this._sheet = []
}

if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
}