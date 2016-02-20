describe('Bowling', function(){
  var bowling = new Bowling();

  describe("When a new game begins", function () {

    it("has 10 current pins", function() {
      expect(bowling.currentPins).toEqual(10);
    });

    it("has a score of 0", function() {
      expect(bowling.score).toEqual(0);
    });

    it("returns the current frame", function() {
      expect(bowling.currentFrame).toEqual(1);
    });

  });

  describe("When a user bowls", function () {

    beforeEach(function(){
      spyOn(bowling, 'randomHit');
    });

    it("sets second round to 0 if strike", function(){
      bowling.randomHit.and.returnValue(10);
      bowling.bowl();
      expect(bowling.allFrames[bowling.currentFrame]).toContain(10, 0);
    });

    it("scores 3 if it hits 3 pins", function(){
      bowling.randomHit.and.returnValue(3);
      bowling.bowl();
      expect(bowling.score).toEqual(3);
    });

    it("is on the 2nd frame", function(){
      bowling.randomHit.and.returnValue(3);
      bowling.bowl();
      expect(bowling.currentFrame).toEqual(2);
    });

  });

});
