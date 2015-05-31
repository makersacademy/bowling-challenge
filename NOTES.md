NOTES

How to strike:

  if number === 10
  this.scorecard


  NEXT GAME
  number * 2


SCORECARD

An array of hashes?

But how to call on it

   this.scorecard[this.score].push;
  this.frame = (this.frame - number);

        for (var i = 0; i < 20; i++) {
            game.roll(0);
        }
        expect(game.score()).to.equal(0);
    });
});

==========================

  function game(){
    this.balls = [];
}

game.prototype = {
    addBalls : function(n){
        this.balls.push.apply(this.balls, arguments);
    },

    getScoreArray : function(){
        var score=0, ball=0, frame=1, frames=[], cur;
        for(var i=0, l=this.balls.length; i<l; i++){
            score += (cur = this.balls[i])
                + ((!ball && frame<10 && cur==10 && this.balls[i+2]) || 0)
                + (frame<10 && (((ball ? this.balls[i-1] : 0) + cur) == 10) ? this.balls[i+1] || 0 : 0);
            ball = ball || (cur==10) ? 0 : 1;
            ball || (frame<10 ? frames.push(score) && frame++ : frames[9] = score);
        }

        return frames;
    }
};