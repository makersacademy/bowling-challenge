'use strict';

  function Frame() {
    this.score = []


  };

  Frame.prototype.roll = function(n) {
    // var num = Math.floor(Math.random() * n + 1);
    this.score.push(n)
    console.log(this.score)
  }
