function Scorecard() {

  this.cumulativeScoreArray = [];
  this.scoreArray = [];
  this.frameScore = {};
  this.frameNumber = 1;

};

Scorecard.prototype.addScore = function(number) {

  if (this.frameNumber === 10) {

    this.frameTen(number)

  } else if (number === 10 && this.frameScore.throw_1 == undefined) {

    this.frameScore.throw_1 = number
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

}

Scorecard.prototype.cumulativeScore = function() {
  var index;
  var currentTotal = 0;
  for (index = 0; index < this.scoreArray.length; index++) {
    if (this.scoreArray.length === 1){
      var value = this.scoreArray[0]["result"];
      if (typeof value !== "string"){
        this.cumulativeScoreArray.push(value)
      }
    } else {
      sum = this.scoreArray[index - 1]["result"] + this.scoreArray[index]["result"]
      this.cumulativeScoreArray.push(sum)
    }
  } 
}


// Scorecard.prototype.cumulativeScore = function() {
//   var index;
//   var total = 0;
//   for (index = 0; index < this.scoreArray.length; index++) { 
//     // If you can add the score then add it, else do nothing

//     if (this.scoreArray[index]["result"] === "X") {
//       // Do this for a strike

//     } else if (this.scoreArray[index]["result"] === "/"){
//       //  Do this for a Spare

//     } else {
//       // Add result to the total and save as a new term 
//       sum = this.scoreArray[index - 1]["result"] + this.scoreArray[index]["result"]
//       this.cumulativeScoreArray.push(sum)
//     }
//   } 

//   return (total)
// }


