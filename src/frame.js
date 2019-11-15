class Frame{
  constructor(){
    this.complete = false;
    this.score = 0;
    this.rollOne = 0;
    this.rollTwo = 0;
    this.rollCounter = [];
    this.pins = 10;
    this.strike = false;
    this.spare = false;
  }

  checkScore(){
    if (this.rollOne == 10){
      this.strike = true;
    }
    if (this.rollOne + this.rollTwo == 10 && this.rollOne != 10){
      this.spare = true;
    }
  }

  setScore(){
    if(this.rollCounter.length == 2){

      this.rollOne = this.rollCounter[0];
      this.rollTwo = this.rollCounter[1];
      this.score = this.rollOne + this.rollTwo;
      this.complete = true

    } else if (this.rollCounter.length == 1){

      this.rollOne = this.rollCounter[0];
      this.rollTwo = 0;
      this.score = this.rollOne + this.rollTwo;
      if (this.score == 10){ this.complete = true; }
    }
  }


  getRoll(score){
    if (this.rollCounter.length < 2) {
      if(score <= 10){
        this.rollCounter.push(score);
        this.setScore();
        this.checkScore();
      } else{
        throw new Error('Score of over 10 is not possible')
      }  
    } else {
      throw new Error('Can only accept 2 rolls')
    }
  }

  
}