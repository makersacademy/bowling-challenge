function Scorecard() {

  this.scoreArray = [];
  this.frameScore = {};
  this.frameNumber = 1;

};

Scorecard.prototype.addScore = function(number) {

  if (this.frameNumber === 10) {

    this.frameTen(number)

  } else if (number === 10 && this.frameScore.throw_1 == undefined) {

    this.frameScore.throw_1 = number
    this.frameScore.throw_2 = 0
    this.frameScore.result = 'X'
    this.storeFrame()

  } else if (number + this.frameScore.throw_1 === 10) {

    this.frameScore.throw_2 = number
    this.frameScore.result = '/'
    this.storeFrame()

  } else if (this.frameScore["throw_1"] !== undefined) {

    this.frameScore.throw_2 = number
    this.frameScore.result = this.frameScore.throw_1 + this.frameScore.throw_2
    this.storeFrame()

  } else {

    // stores score in dictionary as throw_1 with argument as value
    this.frameScore.throw_1 = number

  }

}

Scorecard.prototype.storeFrame = function() {

  this.frameNumber ++

  this.scoreArray.push(this.frameScore)
  this.frameScore = {}

}

Scorecard.prototype.frameTen = function(number) {

  if (this.frameScore.result === '/' || this.frameScore.result === 'X') {
    
    this.frameScore.throw_3 = number
    this.storeFrame()

  } else if (number === 10 && this.frameScore.throw_1 == undefined) {

  this.frameScore.throw_1 = number
  this.frameScore.throw_2 = 0
  this.frameScore.result = 'X'

  } else if (number + this.frameScore.throw_1 === 10) {

    this.frameScore.throw_2 = number
    this.frameScore.result = '/'

  } else if (this.frameScore["throw_1"] !== undefined) {

    this.frameScore.throw_2 = number
    this.frameScore.result = this.frameScore.throw_1 + this.frameScore.throw_2
    this.storeFrame()

  } else {

    // stores score in dictionary as throw_1 with argument as value
    this.frameScore.throw_1 = number

  }


  // Scorecard.prototype.cumulativeScore = function() {

  //   for (index = 0; index < this.scoreArray.length; index++) { 
  //     console.log(scoreArray[index]); 
  //   } 





  // }

}