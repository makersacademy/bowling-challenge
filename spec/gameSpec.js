describe('Game', function() {
  let game

  beforeEach( () => {
    game = new Game()
  })
  describe('Instantiation', () => {
        it('should make a new instanct of class', () => {
          expect(game).toBeInstanceOf(Game)
        })
      })

  describe('play', () => {
      it('calculates the score if the fisrt frame is Strike', () => {
        frame1 = new Frame(10 , 0)
        frame2 = new Frame(2 , 5)
        game.play(frame1)
        game.play(frame2)
        expect(game.frames[0].frameScore).toEqual(17)
      })
      it('calculates the score if the fisrt frame is Spare', () => {
        frame1 = new Frame(5 , 5)
        frame2 = new Frame(2 , 5)
        game.play(frame1)
        game.play(frame2)
        expect(game.frames[0].frameScore).toEqual(12)
      })
      it('calculates the score of the first three frames', () => {
        frame1 = new Frame(10 , 0)
        frame2 = new Frame(2 , 8)
        frame3 = new Frame(2 , 4)
        game.play(frame1)
        game.play(frame2)
        game.play(frame3)
        expect(game.frames[0].frameScore).toEqual(20)
        expect(game.frames[1].frameScore).toEqual(12)
        expect(game.score).toEqual(38)
      });
      it('return an error if user is playing more than 10 times', () => {
        frame = new Frame(2 , 4)
        for (let i = 1; i <= 10; i++) {
          game.play(i)
        }
        frame11 = new Frame(2 , 5)
        expect(function () { game.play(frame11)}).toThrow(new TypeError("You cannot play more than 10 frames"));
      })
  })
  describe('checkLastFrame', () => {
        it('checks the score of the frame ten when last_frame is regular', () => {
        frame = new Frame(2 , 4)
        for (let i = 1; i <= 9; i++) {
          game.play(i)
        }
        frameTen = new FrameTen(2,4,0)
        game.checkLastFrame(frameTen)
        expect(frameTen.frameScore).toEqual(6)
      })
        it('checks the score of the frame ten when last_frame is ra spare', () => {
          frame = new Frame(2 , 4)
          for (let i = 1; i <= 9; i++) {
            game.play(i)
          }
          frameTen = new FrameTen(2,8,1)
          game.checkLastFrame(frameTen)
          expect(frameTen.frameScore).toEqual(11)
        })
  })
})
