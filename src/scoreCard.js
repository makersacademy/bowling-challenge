var ScoreCard = {
  rollsSheet: [],
  totalScore: function() {
    return 0;
  },
  addFrameRolls: function(rolls) {
    if (rolls) {
      this.rollsSheet.push(rolls);
    }
  },
  seeRolls: function() {
    return this.rollsSheet;
  }
};
