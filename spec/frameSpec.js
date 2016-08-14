describe('Frame', function(){
  var game;
  var frame;

  beforeEach(function(){
    frame = new Frame();
    game = new Game();
  });

  it('a frame starts with one ball', function(){
    expect(frame.getCurrentRoll()).toEqual(1);
  });

  it('a frame starts with 10 pins', function(){
    expect(frame.getRemainingPins()).toEqual(10);
  });

  it('a frame starts with all pins standing', function(){
    expect(frame.getPinsKnockedOne()).toEqual(0);
  });

  describe('scores', function(){

    describe('#firstRoll', function(){

      it('tracks the pins knocked down in the first roll', function(){
        spyOn(Math, 'random').and.returnValue(0.6);
        frame.firstRoll();
        expect(frame.getPinsKnockedOne()).toEqual(6);
      });
      it('tracks the pins still standing after the first roll', function(){
        spyOn(Math, 'random').and.returnValue(0.6);
        frame.firstRoll();
        expect(frame.getRemainingPins()).toEqual(4);
      });

    });

    describe('#secondRoll', function(){

      it('can roll a second time', function(){
        frame.firstRoll();
        expect(frame.getCurrentRoll()).toEqual(2);
      });
      it('can track the pins knocked down in the second roll', function(){
        frame.standingPins = 3;
        spyOn(Math, 'random').and.returnValue(0.5);
        frame.secondRoll();
        expect(frame.getPinsKnockedTwo()).toEqual(2);
        expect(frame.getRemainingPins()).toEqual(1);
      });

    });

    describe('a strike', function(){

      it('records a strike if 10 pins knocked on first roll', function(){
        frame.firstRollDown = 10;
        expect(frame.isStrike()).toBe(true);
      });
      it('records a spare when first and second rolls equal 10', function(){
        frame.firstRollDown = 7;
        frame.secondRollDown = 3;
        expect(frame.isSpare()).toBe(true);
      });
    });
  });
});
