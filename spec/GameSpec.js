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

  xdescribe("#bowl", function(){


  });

});