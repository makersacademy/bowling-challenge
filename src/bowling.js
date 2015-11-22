function Bowling(){
  this.rolls = [];
}

    Bowling.prototype.roll = function(hit1, hit2){
          hit2 = hit2 || 0;
          this.rolls.push(hit1, hit2);
    };


    Bowling.prototype.score = function() {
        var result = 0;
        var rollIndex = 0;
        var game = this;
        var length = game.rolls.length / 2;

        for (var frameIndex  = 0; frameIndex < length; frameIndex++) {
        ;  if (isStrike()){
            result += getStrikeScore();
            rollIndex += 2;
          } else if (isSpare()) {
            result += getSpareScore();
            rollIndex += 2;
          } else {
            result += getNormalScore();
            rollIndex += 2;
          }
        }
        return result;

        function isStrike(){
          return game.rolls[rollIndex] === 10;
        }

        function isSpare(){
          return game.rolls[rollIndex] + game.rolls[rollIndex + 1] === 10;
        }

        function getStrikeScore(){
          return game.rolls[rollIndex] + getNextRoll();
        }

        function getSpareScore(){
          return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + (game.rolls[rollIndex + 2] || 0);
        }

        function getNormalScore(){
          return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
        }

        function getNextRoll(){
            if (game.rolls[rollIndex + 2] == 10) {
              return (game.rolls[rollIndex + 2] + (game.rolls[rollIndex + 4] || 0) + (game.rolls[rollIndex + 5] || 0));
          } else if  (game.rolls[rollIndex + 2] != 10 ) {
              return (game.rolls[rollIndex + 2] + game.rolls[rollIndex + 3] || 0);
          } else {
              return 0;
            }
        }
    };
