class Game{

  roll(pinsDown){
    this.score(pinsDown);
  };

  score(pinsDown){
    var totalScore = 0;
    totalScore += pinsDown;
    return totalScore;
  };

}; // end of class
