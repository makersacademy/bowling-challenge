describe("Score", function () {
  var score;

  beforeEach(function() {
    score = new Score;
  });

  it("can be evaluated from a single full frame", function(){
    frames = {1 : [5,2]};
    chosenFrame = 1;
    expect(score.calculateChosen(frames, chosenFrame)).toEqual(7);
  });

  it("can recognise a strike", function(){
    frame = [10,0];
    expect(score.isStrike(frame)).toBe(true);
    expect(score.isSpare(frame)).toBe(false);
  });

  it("can recognise a spare", function(){
    frame = [8,2];
    expect(score.isSpare(frame)).toBe(true);
    expect(score.isStrike(frame)).toBe(false);
  });

  it("can recognise a 0 roll then a 10", function(){
    frames = {1 : [0,10], 2 : [5,2]};
    expect(score.calculateChosen(frames, 1)).toEqual(15);
  });

  it("can add bonus points for a strike", function(){
    frames = {1 : [10,0], 2 : [5,2]};
    chosenFrame = 2;
    expect(score.calculateChosen(frames, chosenFrame)).toEqual(24);
  });

  it("can add bonus points for a spare", function(){
    frames = {1 : [8,2], 2 : [5,2]};
    chosenFrame = 2;
    expect(score.calculateChosen(frames, chosenFrame)).toEqual(22);
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

    it("normal - 0 then a 10", function(){
      frames = {1 : [0,10]};
      currentFrame = 2;
      expect(score.createScoreArray(frames, currentFrame)).toEqual(['/']);
    });

    it("normal, normal, normal", function(){
      frames = {1 : [5,2], 2 : [5,2], 3 : [5, 2]};
      currentFrame = 4;
      expect(score.createScoreArray(frames, currentFrame)).toEqual([7,14,21]);
    });

    it("normal, spare, normal", function(){
      frames = {1 : [5,2], 2 : [5,5], 3 : [5, 2]};
      currentFrame = 4;
      expect(score.createScoreArray(frames, currentFrame)).toEqual([7,22,29]);
    });

    it("normal, normal, spare", function(){
      frames = {1 : [5,2], 2 : [5,2], 3 : [5, 5]};
      currentFrame = 4;
      expect(score.createScoreArray(frames, currentFrame)).toEqual([7,14,'/']);
    });

    it("normal, strike, normal", function(){
      frames = {1 : [5,2], 2 : [10,0], 3 : [5, 2]};
      currentFrame = 4;
      expect(score.createScoreArray(frames, currentFrame)).toEqual([7,24,31]);
    });

    it("normal, normal, strike", function(){
      frames = {1 : [5,2], 2 : [5,2], 3 : [10,0]};
      currentFrame = 4;
      expect(score.createScoreArray(frames, currentFrame)).toEqual([7,14,'x']);
    });

    it("normal, strike, strike, normal", function(){
      frames = {1 : [5,2], 2 : [10,0], 3 : [10,0], 4 : [5, 2]};
      currentFrame = 5;
      expect(score.createScoreArray(frames, currentFrame)).toEqual([7,32,49,56]);
    });

    it("normal, strike, strike", function(){
      frames = {1 : [5,2], 2 : [10,0], 3 : [10,0]};
      currentFrame = 4;
      expect(score.createScoreArray(frames, currentFrame)).toEqual([7,'x','x']);
    });

    it("normal, spare, strike", function(){
      frames = {1 : [5,2], 2 : [5,5], 3 : [10,0]};
      currentFrame = 4;
      expect(score.createScoreArray(frames, currentFrame)).toEqual([7,27,'x']);
    });

    it("normal, strike, spare", function(){
      frames = {1 : [5,2], 2 : [10,0], 3 : [5,5]};
      currentFrame = 4;
      expect(score.createScoreArray(frames, currentFrame)).toEqual([7,27,'/']);
    });

    describe('frame 10', function(){
      it("normal", function(){
        frames = {1 : [5,2], 2 : [5,2], 3 : [5,2], 4 : [5,2], 5 : [5,2], 6 : [5,2], 7 : [5,2], 8 : [5,2], 9 : [5,2], 10 : [5,2]};
        currentFrame = 11;
        expect(score.createScoreArray(frames, currentFrame)).toEqual([7,14,21,28,35,42,49,56,63,70]);
      });

      it("strike", function(){
        frames = {1 : [5,2], 2 : [5,2], 3 : [5,2], 4 : [5,2], 5 : [5,2], 6 : [5,2], 7 : [5,2], 8 : [5,2], 9 : [5,2], 10 : [10,1,1]};
        currentFrame = 11;
        expect(score.createScoreArray(frames, currentFrame)).toEqual([7,14,21,28,35,42,49,56,63,75]);
      });

      it("spare", function(){
        frames = {1 : [5,2], 2 : [5,2], 3 : [5,2], 4 : [5,2], 5 : [5,2], 6 : [5,2], 7 : [5,2], 8 : [5,2], 9 : [5,2], 10 : [5,5,1]};
        currentFrame = 11;
        expect(score.createScoreArray(frames, currentFrame)).toEqual([7,14,21,28,35,42,49,56,63,74]);
      });

      it("strike, strike", function(){
        frames = {1 : [5,2], 2 : [5,2], 3 : [5,2], 4 : [5,2], 5 : [5,2], 6 : [5,2], 7 : [5,2], 8 : [5,2], 9 : [10,0], 10 : [10,1,1]};
        currentFrame = 11;
        expect(score.createScoreArray(frames, currentFrame)).toEqual([7,14,21,28,35,42,49,56,77,89]);
      });

      it("strike, strike, strike", function(){
        frames = {1 : [5,2], 2 : [5,2], 3 : [5,2], 4 : [5,2], 5 : [5,2], 6 : [5,2], 7 : [5,2], 8 : [10,0], 9 : [10,0], 10 : [10,1,1]};
        currentFrame = 11;
        expect(score.createScoreArray(frames, currentFrame)).toEqual([7,14,21,28,35,42,49,79,100,112]);
      });

      it("spare, spare", function(){
        frames = {1 : [5,2], 2 : [5,2], 3 : [5,2], 4 : [5,2], 5 : [5,2], 6 : [5,2], 7 : [5,2], 8 : [5,2], 9 : [5,5], 10 : [5,5,1]};
        currentFrame = 11;
        expect(score.createScoreArray(frames, currentFrame)).toEqual([7,14,21,28,35,42,49,56,71,82]);
      });
    });
    describe('partial frames', function(){
      it("normal, normal, normal", function(){
        frames = {1 : [5,2], 2 : [5,2], 3 : [5]};
        currentFrame = 3;
        expect(score.createScoreArray(frames, currentFrame)).toEqual([7,14]);
      });
    });

  });




});
