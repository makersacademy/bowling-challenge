// possible  functions needed
// score_with_bunus - 
//   would loop for as long as is left on this.rounds
//   and if a 0 score is entered as the first score this loop would
//   end 
      // this will keep track of a perfect score game score 

// score_nonBonus - 
//   would allow for anothoer score of 0 called it would call itself
//   and increment the this.rounds
//   if a score higher was called it would use the inputs on the 
//   score_with_bunus function.
      // this will also keep track of if a gutter game score is produced


class BowlingScore{
  
  constructor(){
    this.strikes = 0;
    this.scores = [];
    this.frames = 0;
    this.tot = 0;
  }

   scoreTotal(){
    this.getBonus()
    const all_scores = this.scores
    for(let i = 0; i < 10; i++){
      this.tot += all_scores[i].score1 + all_scores[i].score2 + all_scores[i].bonus
    }
    return this.tot ;
  }

  inputScore(score1, score2){
    this.frames += 1;
    if (score1 + score2 >= 10){
      this.scoreWithBonus(score1, score2);
    }else{
       this.scoreNoBonus(score1, score2);
    }
  
  }

  scoreWithBonus(score1, score2){
   while(true){

      if (score1 === 10 && this.frames === 10 && this.strikes < 3){
        this.strikes += 1;
        this.scores.push({frame:`${this.frames}` ,score1: score1  ,score2: score2  ,bonus: null});
        this.frames -= 1;
        return 
      } else{
        this.scores.push({frame:`${this.frames}` ,score1: score1  ,score2: score2  ,bonus: null});
        return 
      }
    }
  }

  getBonus(){
   for(let i = 0; i < 10; i++){
    if (this.scores[i].score1 === 10){
      if (this.scores[i+1].score1 === 10){
        this.scores[i].bonus = this.scores[i+1].score1 + this.scores[i+2].score1
      
      }else{
        this.scores[i].bonus = this.scores[i+1].score1 + this.scores[i+1].score2
      }
    }else if(this.scores[i].score1 + this.scores[i].score2 === 10){
      this.scores[i].bonus = this.scores[i + 1].score1 
    } 
   }

    // if(this.frames === 1){
    //   return p 
    // }else if (this.scores[this.frames - 1].score1 === 10){
    //   this.scores[this.frames - 1].bonus = this.scores[this.frames - 2].score1 + this.scores[this.frames - 2].score2;
    // }else{
    //   this.scores[this.frames - 1].bonus = this.scores[this.frames - 2].score1 + this.scores[this.frames - 2].score2;
    //   return 
    // }
  }

  scoreNoBonus(score1, score2){
    this.scores.push({frame:`${this.frames}` ,score1: score1  ,score2: score2  ,bonus: null});
  }
}
module.exports = BowlingScore;

