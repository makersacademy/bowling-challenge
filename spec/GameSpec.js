describe("Game", function(){

  var game;
  var frame;

  beforeEach(function() {
    frame = jasmine.createSpy('frame');
    game = new Game(frame);
  });

  it("starts with 10 frames", function(){
    expect(game.frameArray.length).toEqual(10);
  });

  describe("#bowl", function(){

    beforeEach(function(){
      frame = jasmine.createSpyObj('frame', ['firstRoll'])
      for (var i = 0; i < 10; i++) {
        game.frameArray[i] = frame;
      };

    });

    it("selects the first frame and calls its #firstRoll function", function(){
      game.bowl();
      expect(game.frameArray[0].firstRoll).toHaveBeenCalled();
    });


  });

});