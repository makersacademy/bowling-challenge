class Game{

  roll(pinsDown){
    this.score(pinsDown);
  };

  score(pinsDown){
    var totalScore = 0;
    totalScore += pinsDown;
    return totalScore;
  };

  frame(){
    return 1;
  };

}; // end of class
