describe("BowlingAlley", function() {
    var bowlingAlley;
    var player;

    beforeEach(function() {
        bowlingAlley = new BowlingAlley();
        player = new Player();
        bowl = jasmine.createSpyObj('bowlingAlley', ['pinCount']);
    });

    it('initializes the score at 0', function(){
        expect(bowlingAlley.getScore()).toEqual(0);
      });

    describe("getCurrentScore", function() {
        it('calls the fake getCurrentScore() created by createSpy() with an initialised current score return value of 0', function() {
            player.getCurrentScore = jasmine.createSpy().and.returnValue(0);
            console.log(player.getCurrentScore());
            expect(player.getCurrentScore()).toEqual(0);
        });
    });

    describe("randPinHit", function() {
        it("calls randPinHit() and gets an int between 0-10, gives us a random pin hit count", function() {
            bowlingAlley.randPinHit = jasmine.createSpy().and.returnValue(6);
            expect(bowlingAlley.randPinHit()).toEqual(6);
        });
    });

    describe("pinsCount", function() {
        it("method that knocks the appropriate number of pins between rounds", function() {
            bowl.pinsCount = jasmine.createSpy().and.returnValue(4);
            expect(bowl.pinsCount()).toEqual(4);
        })
    });

    describe(".strikeFlag", function() {
        it("returns true if hit was a strike", function() {
              bowlingAlley.strikeFlag = true;
            expect(bowlingAlley.strikeFlag).toEqual(true);
        });
    });

    describe(".spareFlag", function() {
        it("returns true if hit was a spare", function() {
              bowlingAlley.spareFlag = true;
            expect(bowlingAlley.spareFlag).toEqual(true);
        });
    });

    describe("#isSpare", function() {
        it("method adds spare bonus", function() {
              frames = {
                frameOne: 3,
                frameTwo: 7
              }
              bowlingAlley.pinHit = jasmine.createSpy().and.returnValue(frames);
              a = frames.frameOne
              bowlingAlley.isSpare(a);
              expect(a).toEqual(3);
        });
    });

    describe("#isStrike", function() {
        it("method adds strike bonus", function() {
              frames = {
                frameOne: 2,
                frameTwo: 4
              }
              bowlingAlley.pinHit = jasmine.createSpy().and.returnValue(frames);
              a = frames.frameOne
              b = frames.frameTwo

              bowlingAlley.isStrike(a, b);
              expect(a).toEqual(2);
              expect(b).toEqual(4);

        });
    });
    describe("#bonusScore", function() {
      it("calculate a bonus score", function() {
        bowel = spyOn(bowlingAlley, 'bonusScore').withArgs(3, 9).and.returnValue(12)
        expect(bowlingAlley.bonusScore(3, 9)).toEqual(12);
      });
    });

});
