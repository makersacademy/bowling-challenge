describe('Game', function(){

  beforeEach(function() {
    game = new Game();
  });

  it('starts with 10 frames', function(){
    expect(game.frames.length).toEqual(10);
  })

  it('starts with zero score', function(){
    expect(game.score()).toEqual(0);
  })

  it('starts with currentFrameIndex of zero', function() {
    expect(game.currentFrameIndex).toEqual(0)
  })

  describe('bowl', function () {
    it('should increase the score by the number of pins', function () {
      game.bowl(4)
      expect(game.score()).toEqual(4);
      expect(game.frames[0]).toEqual([4]);
    })

    it('should add second roll pins to frame', function () {
      game.bowl(4)
      game.bowl(2)
      expect(game.frames[0]).toEqual([4, 2]);
      expect(game.score()).toEqual(6);
    })

    it('should increment currentFrameIndex after two bowls', function () {
      game.bowl(4)
      game.bowl(2)
      expect(game.currentFrameIndex).toEqual(1);
    })

    it('should add third bowl to second frame', function () {
      game.bowl(4)
      game.bowl(2)
      game.bowl(5)
      expect(game.frames[0]).toEqual([4, 2]);
      expect(game.frames[1]).toEqual([5]);
      expect(game.score()).toEqual(11);
    })

    describe('strike', function () {
      it('should increment currentFrameIndex after a strike', function () {
        game.bowl(10)
        expect(game.currentFrameIndex).toEqual(1);
      })

      it('should add the next bowl as bonus points', function () {
        game.bowl(10)
        game.bowl(5)
        expect(game.currentFrameIndex).toEqual(1);
        expect(game.frames[0]).toEqual([10, 5]);
        expect(game.frames[1]).toEqual([5]);
        expect(game.score()).toEqual(20);
      })

      it('should add the next two bowls as bonus points', function () {
        game.bowl(10)
        game.bowl(5)
        game.bowl(4)
        expect(game.currentFrameIndex).toEqual(2);
        expect(game.frames[0]).toEqual([10, 5, 4]);
        expect(game.frames[1]).toEqual([5, 4]);
        expect(game.score()).toEqual(28);
      })

      it('should not add the third bowl as bonus points', function () {
        game.bowl(10)
        game.bowl(5)
        game.bowl(4)
        game.bowl(3)
        expect(game.currentFrameIndex).toEqual(2);
        expect(game.frames[0]).toEqual([10, 5, 4]);
        expect(game.frames[1]).toEqual([5, 4]);
        expect(game.frames[2]).toEqual([3]);
        expect(game.score()).toEqual(31);
      })

      it('should award multiple strike bonus points', function () {
        game.bowl(10)
        game.bowl(10)
        game.bowl(10)
        expect(game.currentFrameIndex).toEqual(3);
        expect(game.frames[0]).toEqual([10, 10, 10]);
        expect(game.frames[1]).toEqual([10, 10]);
        expect(game.frames[2]).toEqual([10]);
        expect(game.score()).toEqual(60);
      })
    })

    describe('spare', function() {
      it('should increment currentFrameIndex after a spare', function () {
        game.bowl(4)
        game.bowl(6)
        expect(game.currentFrameIndex).toEqual(1);
      })

      it('should add the next bowl as bonus points', function () {
        game.bowl(4)
        game.bowl(6)
        game.bowl(5)
        expect(game.currentFrameIndex).toEqual(1);
        expect(game.frames[0]).toEqual([4, 6, 5]);
        expect(game.frames[1]).toEqual([5]);
        expect(game.score()).toEqual(20);
      })

      it('should not add the second bowl as bonus points', function () {
        game.bowl(4)
        game.bowl(6)
        game.bowl(5)
        game.bowl(4)
        game.bowl(3)
        expect(game.currentFrameIndex).toEqual(2);
        expect(game.frames[0]).toEqual([4, 6, 5]);
        expect(game.frames[1]).toEqual([5, 4]);
        expect(game.frames[2]).toEqual([3]);
        expect(game.score()).toEqual(27);
      })

      it('should award multiple spare bonus points', function () {
        game.bowl(4)
        game.bowl(6)
        game.bowl(4)
        game.bowl(6)
        game.bowl(3)
        expect(game.currentFrameIndex).toEqual(2);
        expect(game.frames[0]).toEqual([4, 6, 4]);
        expect(game.frames[1]).toEqual([4, 6, 3]);
        expect(game.frames[2]).toEqual([3]);
        expect(game.score()).toEqual(30);
      })
    })

    describe('final frame', function () {
      it('should allow a second bowl if the first bowl is a strike', function () {
        new Array(18).fill(null).forEach(function () {
          game.bowl(4)
        })
        game.bowl(10)
        console.log(game)
        game.bowl(9)
        console.log(game)
        expect(game.frames[9]).toEqual([10, 9]);
        expect(game.score()).toEqual(91);
      })
    })
  })
})
