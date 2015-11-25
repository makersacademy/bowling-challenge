describe("Player:", function() {
  var player;
  var number;
  var frame;

  beforeEach(function(){
    frame = { setKnockedDownPins: function(number){
      return number;
    }};
    player = new Player(frame);
    number = 5;
  });

  describe("Rolling and Bowling!", function(){


    // TESTS NO LONGER NEEDED AS randomNumberGenerator IS PRIVATE - ALL ELSE COVERED BELOW
    // it("returns a number of knocked over pins", function(){
    //   spyOn(Math, "random").and.returnValue(0.2);
    //   expect(_randomNumberGenerator(number)).toBeTruthy();
    // });
    //
    // it("returns a random number between 0 and a defined number", function(){
    //   spyOn(Math, "random").and.returnValue(0.6);
    //   expect(_randomNumberGenerator(number)).toEqual(3);
    // });

    it("calls setKnockedDownPins from the Frame object", function(){
      spyOn(Math, "random").and.returnValue(0.6);
      spyOn(frame, 'setKnockedDownPins');
      player.roll(number);
      //toHaveBeenCalled requires a spy (necessary to have the frame = statement in beforeEach AND the spyOn statement 2 lines above)
      expect(frame.setKnockedDownPins).toHaveBeenCalledWith(3);
    });
  });
});
