describe ('Game', function() {

  var game;

  beforeEach(function () {
    game = new Game();
  });

  var rollMany = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };



  it("can roll spare", function () {
    game.roll(8);
    game.roll(2);
    game.roll(4);
    rollMany(0, 17);
    expect(game.score()).toEqual(18);
  });

  it("can roll strike", function() {
    game.roll(10);
    game.roll(2);
    game.roll(1);
      rollMany(0, 16);
    expect(game.score()).toEqual(16);
  });

  it("can roll all 0's (A.K.A gutter game)", function() {
    rollMany(0, 20);
    expect(game.score()).toEqual(0);
  });

  it("can roll all 1's", function() {
    rollMany(1, 20);
    expect(game.score()).toEqual(20);
  });

  it("can have perfect 300 point game i.e. 12 strikes", function() {
    rollMany(10, 12);
    expect(game.score()).toEqual(300);
  });

  // describe('10th frame logic', function(){

    it('gives the bonus points for strikes on the 10th frame & then spare', function(){
      rollMany(1, 18);
      // score will be 18
      game.roll(10);
      game.roll(4);
      game.roll(6);
      expect(game.score()).toEqual(38);
    });

  // });


});
