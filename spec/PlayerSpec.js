describe("Player", function() {
  var player;
  var scoreSheet;
  var game;


  beforeEach(function(){
    game = jasmine.createSpyObj('game', ['scoreSheet', 'player', 'newFrame', 'finishFrame']);
    player = new Player('Viola', game);
  });


  it("starting a new player starts a new game", function(){
    expect(player.playerGame).toEqual(game);
  });

  it("stores the players name", function(){
    expect(player.playerName).toEqual('Viola');
  });

  it("starts the player off with no rolls", function(){
    expect(player.rollCount).toEqual(0);
  });

  describe("#roll", function(){
    var score;

    beforeEach(function(){
      score = 4;
      spyOn(Math,'random').and.returnValue(score);
    });


    it("will generate a newFrame if the player is new", function(){
      player.roll();
      expect(game.newFrame).toHaveBeenCalled();
    });

    it("will finish the frame on the second go", function(){
      player.roll();
      player.roll();
      expect(game.finishFrame).toHaveBeenCalled();
    });

  });

    describe("#isFrameOver", function(){


      it("checks if the player has had all the rolls in this frame", function(){
        expect(player.isFrameOver()).toBeFalsy();
      });

      it("checks if the player still has rolls in the frame", function(){
        player.roll();
        expect(player.rollCount).toEqual(1);
      });

      it("checks if the player has no rolls left in the frame", function(){
        player.roll();
        expect(player.isFrameOver()).toBeFalsy();
      });
    });

    describe("#resetRollCount", function(){

      it("will reset the roll round if the frame is over", function(){
        player.roll()
        player.roll()
        expect(player.rollCount).toEqual(0)
      });

      it("will not the roll round if the frame is not over", function(){
        player.roll()
        expect(player.rollCount).toEqual(1)
      });

    });



  describe("#rollScoreGenerator", function(){

    it("generates a number between 0 and the number of pins left", function(){
      expect(player.rollScoreGenerator(10)).toBeLessThan(11)
    });

    it("again generates a number between 0 and the number of pins left", function(){
      expect(player.rollScoreGenerator(5)).toBeLessThan(6)
    });

  });




});
