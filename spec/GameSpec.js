describe("Game", function() {
  var game;

  describe("general game behaviour", function() {
    beforeEach(function() {
      game = new Game();
      game.start(10);
    });

    it("has 10 empty frames when the game starts", function() {
      expect(game.frames.length).toEqual(10);
    });

    it("knows it is the first frame", function() {
      expect(game.currentFrame).toEqual(1);
    });

    it("knows it is the second frame", function() {
      game.roll(7);
      game.roll(3);
      expect(game.currentFrame).toEqual(2);
    });

    it("knows it is the first frame", function() {
      game.roll(3);
      expect(game.frames[0].bowls[0]).toEqual(3);
    });

    it("knows it is the first roll", function() {
      game.roll(7);
      game.roll(3);
      expect(game.frames[1].isRoll).toEqual(1);
    });

    it("has a running total", function() {
      game.roll(3);
      game.roll(4);
      game.calculateTotal();
      expect(game.runningTotal).toEqual(7)
    });

    it("cannot add a roll if it takes the total over 10", function() {
      game.roll(3);
      expect( function() { game.roll(9) } ).toThrow('not enough pins!');
    });
  });

  describe("enters bowl scores", function() {
    beforeEach(function() {
      game = new Game();
      game.start(10);
    });

    it("enters a first bowl into a frame", function() {
      game.roll(3);
      expect(game.frames[0].bowls).toEqual([3])
    });

    it("enters a second bowl into a frame", function() {
      game.roll(3);
      game.roll(4);
      expect(game.frames[0].bowls).toEqual([3,4])
    });
  });

  describe("spare", function() {
    beforeEach(function() {
      game = new Game();
      game.start(10);
    });

    it("adds the next roll to the previous frame score", function() {
      game.roll(7);
      game.roll(3);
      game.roll(1);
      game.roll(3);
      expect(game.frames[0].total).toEqual(11)
    });

    it("has the correct running total", function() {
      game.roll(7);
      game.roll(3);
      game.roll(1);
      game.roll(3);
      game.calculateTotal();
      expect(game.runningTotal).toEqual(15)
    });
  });

  describe("strike", function() {
    beforeEach(function() {
      game = new Game();
      game.start(10);
    });

    it("adds the next two rolls to the previous frame score", function() {
      game.roll(10);
      game.roll(1);
      game.roll(3);
      expect(game.frames[0].total).toEqual(14)
    });

    it("adds the next two rolls if the first of them is strike", function() {
      game.roll(10);
      game.roll(10);
      game.roll(3);
      game.roll(5);
      expect(game.frames[0].total).toEqual(23)
      expect(game.frames[1].total).toEqual(18)
    });

    it("has the correct running total after 2 strikes", function() {
      game.roll(10);
      game.roll(10);
      game.roll(3);
      game.roll(5);
      game.calculateTotal();
      expect(game.runningTotal).toEqual(49)
    });
  });

  describe("10th frame", function() {

    beforeEach(function() {
      game = new Game();
      frame = new Frame();
      frame.bowls = [2,5]
      for(var i=0; i < 9; i++){
        game.frames.push(frame);
        game.frames[i].sumTotal();
      }
      frame1 = new Frame();
    });

    it("ends the game after 10th frame without bonuses", function() {
      frame1.bowls = [2,5]
      game.frames.push(frame1);
      game.frames[9].sumTotal();
      game.calculateTotal();
      expect(game.runningTotal).toEqual(70);
    });

    it("allows 3rd roll", function() {
      game.frames.push(frame1);
      game.currentFrame = 10
      game.roll(2);
      game.roll(8);
      expect(game.frames[9].isRoll).toEqual(3)
    });

    it("counts extra roll score if 10th frame is spare", function() {
      frame1.bowls = [5,5]
      game.frames.push(frame1);
      game.currentFrame = 10
      game.roll(5)
      game.frames[9].sumTotal();
      game.calculateTotal();
      expect(game.runningTotal).toEqual(78)
    });

    it("does not allow more than 10 pins when 1st bowl of 10th frame is a strike", function() {
      frame1.bowls = [10,8]
      frame1.isRoll = 3
      game.frames.push(frame1);
      game.currentFrame = 10
      expect( function() { game.roll(8); } ).toThrow('not enough pins on 10th frame!');
    });

    it("counts 2 extra rolls if 10th frame is strike", function() {
      game.frames.push(frame1);
      game.currentFrame = 10
      game.roll(10);
      game.roll(10);
      game.roll(4);
      game.frames[9].sumTotal();
      game.calculateTotal();
      expect(game.runningTotal).toEqual(87)
    });

    it("knows the game is over", function(){
      game.frames.push(frame1);
      game.currentFrame = 10
      game.roll(7);
      game.roll(1);
      expect( function() { game.roll(3); } ).toThrow("Game over!")
    });
  });

  describe("special cases", function() {
    beforeEach(function() {
      game = new Game();
      frame = new Frame();
    });

    describe("perfect game", function() {
      it("has a score of 300", function() {
        frame.bowls = [10]
        for(var i=0; i < 10; i++){
          game.frames.push(frame);
          game.frames[i].sumTotal();
        }
        game.roll(10);
        game.roll(10);
        game.frames[9].sumTotal();
        game.calculateTotal();
        expect(game.runningTotal).toEqual(300)
      });

      // it("ends game as appropriate", function() {
      //   console.log(game.frames)
      //   for(var i=0; i < 10; i++){
      //     game.roll(10);
      //   }
      //   console.log(game.frames)
      //   game.roll(10);
      //   game.roll(10);
      //   console.log(game.frames[game.currentFrame-1].bowls.length)
      //   expect( function() { game.roll(3); } ).toThrow("Game over!")
      // });
    });

    describe("gutter game", function() {
      it("has a score of 0", function() {
        frame.bowls = [0]
        for(var i=0; i < 10; i++){
          game.frames.push(frame);
          game.frames[i].sumTotal();
        }
        game.roll(0);
        game.frames[9].sumTotal();
        game.calculateTotal();
        expect(game.runningTotal).toEqual(0)
      });
    });

    it("gives the correct total for the example README game", function() {
      game.start(10);
      game.roll(1);
      game.roll(4);
      game.roll(4);
      game.roll(5);
      game.roll(6);
      game.roll(4);
      game.roll(5);
      game.roll(5);
      game.roll(10);
      game.roll(0);
      game.roll(1);
      game.roll(7);
      game.roll(3);
      game.roll(6);
      game.roll(4);
      game.roll(10);
      game.roll(2);
      game.roll(8);
      game.roll(6);
      console.log(game.frames)
      game.calculateTotal();
      expect(game.runningTotal).toEqual(133)
    });
    it("gives the correct total for the example README game", function() {
      game.start(10);
      game.roll(1);
      game.roll(4);
      game.roll(4);
      game.roll(5);
      game.roll(6);
      game.roll(4);
      game.roll(5);
      game.roll(5);
      game.roll(10);
      game.roll(0);
      game.roll(1);
      game.roll(7);
      game.roll(3);
      game.roll(6);
      game.roll(4);
      game.roll(10);
      game.roll(2);
      game.roll(8);
      game.roll(6);
      expect( function() { game.roll(3); } ).toThrow("Game over!")
    });

  });
});
