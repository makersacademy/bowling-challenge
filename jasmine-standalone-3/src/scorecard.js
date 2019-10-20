function Scorecard() {
 this.arrayScore = [];
 this.score = 0;
 this.frame = 0;
 this.strikeScore = 0;
 this.strikeScore2 = 0;
 this.spareScore = 0
}

Scorecard.prototype = {
  totalScore: function() {
     for (var i = 0; i<this.arrayScore.length; i ++) {
       this.score += this.arrayScore[i];
      }
     console.log(this.arrayScore);
     console.log(this.frame);
     return this.score;
      },

  roll: function(roll1, roll2) {

    if (roll1 != 10 && this.strikeScore == 0) {
      if (roll1 + roll2 != 10) {
        if (this.spareScore == 0) {
          this.score = 0;
          this.arrayScore.push(roll1 + roll2);
          this.frame++;
          console.log("1 happened");
        }

        if (this.spareScore == 10) {
          if (this.frame < 10) {
            this.score = 0;
            this.arrayScore.push(this.spareScore + roll1);
            this.arrayScore.push(roll1 + roll2);
            this.spareScore = 0;
            this.frame++;
            console.log("1.25 happened");
            }

          if (this.frame == 10) {
            this.score = 0;
            this.arrayScore.push(this.spareScore + roll1);
            // this.arrayScore.push(roll1 + roll2);
            this.spareScore = 0;
            // this.frame++;
            console.log("1.35 happened");
          }

        }

      }

      if (roll1 + roll2 == 10 && this.spareScore == 0) {
        this.score = 0;
        this.spareScore = 10;
        this.frame++
        roll1 = 0;
        roll2 = 0;
        console.log("1.5 happened");
      }

      if (roll1 + roll2 == 10 && this.spareScore == 10) {
        this.score = 0;
        this.arrayScore.push(this.spareScore + roll1);
        // this.spareScore = 0
        this.frame++;
        console.log("1.75 happened");
      }
    }

    else if (roll1 !=10 && this.strikeScore == 10 && this.strikeScore2 ==0) {
    this.score = 0
    this.arrayScore.push(roll1 + roll2 + this.strikeScore);
    this.arrayScore.push(roll1 + roll2);
    this.strikeScore = 0;
    this.strikeScore2 = 0;
    this.frame++;
    console.log("2 happened");
    }

    else if (roll1 !=10 && this.strikeScore == 10 && this.strikescore ==10){
    this.score = 0
    this.arrayScore.push(this.strikeScore + this.strikeScore2 +roll1);
    this.arrayScore.push(this.strikeScore2 + roll1 + roll2);
    this.strikeScore = 0;
    this.strikeScore2 = 0;
    this.frame++;
    console.log("3 happened");
    }

    if (this.strikeScore == 10 && this.strikeScore2 == 10) {
      if (roll1 != 10) {
        this.score = 0;
        this.arrayScore.push(this.strikeScore + this.strikeScore2 + roll1);
        this.arrayScore.push(this.strikeScore2 + roll1 + roll2);
        this.arrayScore.push(roll1 + roll2);
        this.strikeScore = 0;
        this.strikeScore2 = 0;
        this.frame++;
        console.log("4 happened");
        }

      if (roll1 == 10) {
        this.score = 0;
        this.arrayScore.push(this.strikeScore + this.strikeScore2 + roll1);
        this.strikeScore = 10;
        this.strikeScore2 = 10;
        this.frame++;
        console.log("4.5 happened");
        }
    }

    if (roll1 == 10 && this.strikeScore == 0) {
      if (this.spareScore == 0) {
        this.score = 0;
        this.strikeScore = 10;
        this.frame ++;
        console.log("5 happened");
      }

      if (this.spareScore == 10) {
        this.score = 0;
        this.strikeScore = 10;
        this.arrayScore.push(this.spareScore + roll1);
        this.spareScore = 0;
        this.frame ++;
        console.log("5.5 happened");
      }

    }

    else if (roll1 == 10 && this.strikeScore == 10) {
    this.score = 0;
    this.strikeScore2 = 10;
    this.frame ++;
    console.log("6 happened");
      }
    }
  }
var test = new Scorecard;


//test 4 (97)
// test.roll(10,0);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();
// test.roll(1,2);
// test.totalScore();

// test 5 (14)
// test.roll(1,9);
// test.totalScore();
// test.roll(1,2);
// test.totalScore();

// test 6 (50)
// test.roll(1,9);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();

// test 7 (60)
// test.roll(1,9);
// test.totalScore();
// test.roll(1,2);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();
// test.roll(1,2);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();
// test.roll(1,2);
// test.totalScore();
// test.roll(1,9);
// test.totalScore();
// test.roll(1,2);
// test.totalScore();

// test 8 (182)
// test.roll(1,9);
// test.totalScore();
// test.roll(1,9);
// test.totalScore();
// test.roll(1,2);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();
// test.roll(1,2);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();

// test 9 (172)
// test.roll(1,9);
// test.totalScore();
// test.roll(1,9);
// test.totalScore();
// test.roll(1,2);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();
// test.roll(1,2);
// test.totalScore();
// test.roll(1,9);
// test.totalScore();
// test.roll(10,0);
// test.totalScore();

// test 10 (150)
// test.roll(5,5);
// test.totalScore();
// test.roll(5,5);
// test.totalScore();
// test.roll(5,5);
// test.totalScore();
// test.roll(5,5);
// test.totalScore();
// test.roll(5,5);
// test.totalScore();
// test.roll(5,5);
// test.totalScore();
// test.roll(5,5);
// test.totalScore();
// test.roll(5,5);
// test.totalScore();
// test.roll(5,5);
// test.totalScore();
// test.roll(5,5);
// test.totalScore();
// test.roll(5,0);
// test.totalScore();

// test 11 (30)
// test.roll(1,2);
// test.totalScore();
// test.roll(1,2);
// test.totalScore();
// test.roll(1,2);
// test.totalScore();
// test.roll(1,2);
// test.totalScore();
// test.roll(1,2);
// test.totalScore();
// test.roll(1,2);
// test.totalScore();
// test.roll(1,2);
// test.totalScore();
// test.roll(1,2);
// test.totalScore();
// test.roll(1,2);
// test.totalScore();
// test.roll(1,2);
// test.totalScore();

// test 12 (29)
// test.roll(1,1);
// test.totalScore();
// test.roll(1,1);
// test.totalScore();
// test.roll(1,1);
// test.totalScore();
// test.roll(1,1);
// test.totalScore();
// test.roll(1,1);
// test.totalScore();
// test.roll(1,1);
// test.totalScore();
// test.roll(1,1);
// test.totalScore();
// test.roll(1,1);
// test.totalScore();
// test.roll(1,1);
// test.totalScore();
// test.roll(1,9);
// test.totalScore();
// test.roll(1,0);
// test.totalScore();
