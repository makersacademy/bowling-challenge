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
    scoreframethree: function () {
      return this.bowl.reduce(function(score, score) {
      })
    },
    scoreframefour: function () {
      return this.bowl.reduce(function(score, score){
      })
    },
    scoreframefive: function () {
      return this.bowl.reduce(function(score, score){
      })
    },
    scoreframesix: function () {
      return this.bowl.reduce(function(score, score){
      })
    },
    scoreframeseven: function () {
      return this.bowl.reduce(function(score, score){
      })
    },
    scoreframeeight: function () {
      return this.bowl.reduce(function(score, score){
      })
    },
    scoreframenine: function () {
      return this.bowl.reduce(function(score, score){
      })
    },
    scoreframeten: function () {
      return this.bowl.reduce(function(score, score){
      })
    },
    totalscoreinallframes: = function(frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10)
    return scoreframeone + scoreframetwo + scoreframethree + scoreframefour + scoreframefive + scoreframesix + scoreframeseven + scoreframeeight + scoreframenine + scoreframeten
  })
