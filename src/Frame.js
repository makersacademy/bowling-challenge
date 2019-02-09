function Frame () {
}


  var Frame = function(bowl) {
    this.bowl = bowl
    this.oneframemax = 10
  }

  Frame.prototype = {
    scoreframeone: function() {
      return this.bowl.reduce(function(score,score) {
        return score + score;
      })
    },
    scoreframetwo: function() {
      return this.bowl.reduce(function(score,score) {
        return score + score
      })
    },
