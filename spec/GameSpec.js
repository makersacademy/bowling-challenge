describe('Game', function(){

  var game;

  beforeEach(function(){
        game = new Game();
    });

    function rollMany (n, pins) {
        for (var i = 0; i < n; i++) {
            game.roll(pins);
        };
    };

    function rollSpare() {
      game.roll(5);
      game.roll(5);
    };

    function rollStrike() {
      game.roll(10);
    };

    it("handle gutter game", function() {
        rollMany(20, 0);
        expect(game.score()).toEqual(0);
    });

    it("should handle all ones", function() {
        rollMany(20, 1);
        expect(game.score()).toEqual(20);
    });


});
