describe("Score", function () {
  var score;

  beforeEach(function() {
    score = new Score;
  });

  it("can be evaluated from a single full frame", function(){
    frames = {1 : [5,2]};
    currentFrame = 2;
    expect(score.calculate(frames, currentFrame)).toEqual(7);
  });

  it("can recognise a strike", function(){
    frame = [10,0]
    expect(score.isStrike(frame)).toBe(true);
    expect(score.isSpare(frame)).toBe(false);
  });

  it("can recognise a spare", function(){
    frame = [8,2]
    expect(score.isSpare(frame)).toBe(true);
    expect(score.isStrike(frame)).toBe(false);
  });

  it("can add bonus points for a strike", function(){
    frames = {1 : [10,0], 2 : [5,2]};
    currentFrame = 3;
    expect(score.calculate(frames, currentFrame)).toEqual(24);
  });

  it("can add bonus points for a spare", function(){
    frames = {1 : [8,2], 2 : [5,2]};
    currentFrame = 3;
    expect(score.calculate(frames, currentFrame)).toEqual(22);
  });

  describe("of previous frame", function(){

    it("with normal frames", function(){
      frames = {1 : [5,2], 2 : [5,2], 3 : [5,2]};
      chosenFrame = 2;
      expect(score.calculateChosen(frames, chosenFrame)).toEqual(14);
    });

    it("with strike frames", function(){
      frames = {1 : [5,2], 2 : [10,0], 3 : [5,2]};
      chosenFrame = 2;
      expect(score.calculateChosen(frames, chosenFrame)).toEqual(24);
    });

    it("with spare frames", function(){
      frames = {1 : [5,2], 2 : [5,5], 3 : [5,2]};
      chosenFrame = 2;
      expect(score.calculateChosen(frames, chosenFrame)).toEqual(22);
    });

    it("with spare, spare frames", function(){
      frames = {1 : [5,2], 2 : [5,5], 3 : [5,5], 4 : [5,2]};
      chosenFrame = 2;
      expect(score.calculateChosen(frames, chosenFrame)).toEqual(22);
    });

    it("with strike, strike frames", function(){
      frames = {1 : [5,2], 2 : [10,0], 3 : [10, 0], 4 : [5,2]};
      chosenFrame = 2;
      expect(score.calculateChosen(frames, chosenFrame)).toEqual(32);
    });

  });

  describe("can create a score array", function(){

    it("normal, normal, normal", function(){
      frames = {1 : [5,2], 2 : [5,2], 3 : [5, 2]};
      currentFrame = 4;
      expect(score.createScoreArray(frames, currentFrame)).toEqual([7,14,21]);
    });

  });




});
