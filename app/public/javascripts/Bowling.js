function Bowling() {

  Bowling.prototype.strike = function (turn) {
    if (turn === 10) {
      return true;
    } else {
      return false;
    }
  };

}
