
function Game() {
  this.scoreCapacity1to9=[];
  this.scoreCapacity10=[];
  this.score1= 1;
  this.score2= 5;
  this.score3= 3;


  //returns an array of two first points
    this.countScoresInRound1 = function() {

      this.scoreCapacity1to9.push(this.score1, this.score2)
      return this.scoreCapacity1to9

    };

//  console.log(this.countScoresInRound1());  ///--- function works outside the scope, which is good

    this.sumScoresInRound1 = function() {
      this.sum1=this.score1 + this.score2
      return this.sum1
    };



    console.log(this.sumScoresInRound1());







  //edge case
    this.countCapacityInFirst9Frames = function() {

      this.scoreCapacity1to9.push(this.score1, this.score2);
      return this.scoreCapacity1to9
    };
  //edge case
    this.countCapacityInFrame10 = function() {
      this.scoreCapacity10.push(this.score1, this.score2, this.score3)
      return this.scoreCapacity10
    };


  };
