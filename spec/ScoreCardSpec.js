describe("ScoreCard", function() {
  var scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard();
  });

  it("should update the rollNumber and frameNumber", function() {
    expect(scoreCard.rollNumber).toEqual(1);
    expect(scoreCard.frameNumber).toEqual(1);
    scoreCard.addScore(2);
    expect(scoreCard.rollNumber).toEqual(2);
    expect(scoreCard.frameNumber).toEqual(1);
    scoreCard.addScore(2);
    expect(scoreCard.rollNumber).toEqual(1);
    expect(scoreCard.frameNumber).toEqual(2);
  });

  it("should record the pins knocked down", function() {
    scoreCard.addScore(2);
    scoreCard.addScore(3);
    scoreCard.addScore(4);
    scoreCard.addScore(5);
    pins = [ [2,3],[4,5],[],[],[],[],[],[],[],[] ];
    expect(scoreCard.pinsKnockedDown).toEqual(pins);
  });

  it("should calculate the score", function() {
    for (var i = 0; i < 20; i++) {
      scoreCard.addScore(2);
    };
    expect(scoreCard.calculateScore()).toEqual(40);
  });

  it("strike should add bonus of next two rolls", function() {
    scoreCard.addScore(10);
    expect(scoreCard.rollNumber).toEqual(1);
    expect(scoreCard.frameNumber).toEqual(2);
    expect(scoreCard.bonusTrackers[0].counter).toEqual(2);
    scoreCard.addScore(3);
    expect(scoreCard.bonusTrackers[0].counter).toEqual(1);
    scoreCard.addScore(4);
    expect(scoreCard.bonusTrackers[0].counter).toEqual(0);
    expect(scoreCard.calculateScore()).toEqual(24);
  });

  it("spare should add bonus of next roll", function() {
    scoreCard.addScore(6);
    scoreCard.addScore(4);
    expect(scoreCard.bonusTrackers[0].counter).toEqual(1);
    scoreCard.addScore(3);
    expect(scoreCard.bonusTrackers[0].counter).toEqual(0);
    scoreCard.addScore(4);
    expect(scoreCard.bonusTrackers[0].counter).toEqual(0);
    expect(scoreCard.calculateScore()).toEqual(20);
  });

  describe("during the 10th frame", function() {

    beforeEach(function() {
      for (var i = 0; i < 18; i++) {
        scoreCard.addScore(4);
      };
    });

    it("spare allows one additional roll, which can only count for bonus", function() {
      for (var i = 0; i < 3; i++) {
        scoreCard.addScore(5);
      };
      pins = [ [4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[5,5] ];
      bonus = [0, 0, 0, 0, 0, 0, 0, 0, 0, 5];
      expect(scoreCard.pinsKnockedDown).toEqual(pins);
      expect(scoreCard.calculateScore()).toEqual(87);
    });

    it("strike allows two additional rolls, which only count for bonus", function() {
      scoreCard.addScore(10);
      scoreCard.addScore(4);
      scoreCard.addScore(4);
      pins = [ [4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[10] ];
      bonus = [0, 0, 0, 0, 0, 0, 0, 0, 0, 8];
      expect(scoreCard.pinsKnockedDown).toEqual(pins);
      expect(scoreCard.bonusPins).toEqual(bonus);
      expect(scoreCard.calculateScore()).toEqual(90);
    });
  });

  it("a perfect game should equal 300", function() {
    for (var i = 0; i < 12; i++) {
      scoreCard.addScore(10);
    };
    expect(scoreCard.calculateScore()).toEqual(300);
  })
});
