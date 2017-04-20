
describe ("Frame", function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('starting a new frame', function(){
    it('starts with first bowl equal to null', function() {
      expect(frame.firstBowl).toEqual(null);
    });

    it('starts with second bowl equal to null', function() {
      expect(frame.secondBowl).toEqual(null);
    });

    it('allows a player to take first bowl', function() {
      spyOn(Math, 'random').and.returnValue(0.3);
      frame.bowl();
      expect(frame.firstBowl).toEqual(3);
    });

    it('allows a player to take second bowl', function() {
      spyOn(Math, 'random').and.returnValue(0.3);
      frame.bowl();
      frame.bowl();
      expect(frame.secondBowl).toEqual(2);
    });

    it('checks if frame is complete', function() {
      spyOn(Math, 'random').and.returnValue(0.3);
      frame.bowl();
      frame.bowl();
      expect(frame.canBowl()).toEqual(false);
    });
  });
  describe('it can check if frame is a spare or strike', function() {

    it('check if frame is a strike', function(){
      spyOn(Math, 'random').and.returnValue(0.99);
      frame.bowl();
      expect(frame.isAStrike()).toEqual(true);
    });

    it('checks if frame is a spare', function() {
      spyOn(Math, 'random').and.returnValues(0.5, 0.9);
      frame.bowl();
      frame.bowl();
      expect(frame.isASpare()).toEqual(true);
    });

    it('isASpare returns false if frame is a strike', function() {
      spyOn(Math, 'random').and.returnValue(0.99);
      frame.bowl();
      expect(frame.isASpare()).toEqual(false);
    });
  });

});
