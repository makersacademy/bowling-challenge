
describe ('Bowling', () => {
  describe('Bowling_&_Frame', () => {
    beforeEach(function () {
      bowling = new Bowling();
      frame = new Frame();
    });

      it ('user scores a gutter game', () => {
        for (let i = 0; i < 10; i ++) {
          frame.addRoll(0);
          bowling.addFrame(frame.latestFrame)
          frame.addRoll(0);
          bowling.addFrame(frame.latestFrame);
        }
        expect(bowling.score()).toEqual(0)
      });

      it ('user receives score after 1 frame', () => {
        frame.addRoll(4)
        bowling.addFrame(frame.latestFrame)
        frame.addRoll(4)
        bowling.addFrame(frame.latestFrame)
        expect(bowling.score()).toEqual(8)
      });

      it ('gives the user a spare bonus', () => {
        frame.addRoll(5);
        bowling.addFrame(frame.latestFrame)
        frame.addRoll(5);
        bowling.addFrame(frame.latestFrame)
        frame.addRoll(3)
        bowling.addFrame(frame.latestFrame)
        //bonus points of 3 are added to the first frame
        frame.addRoll(3)
        bowling.addFrame(frame.latestFrame)
        expect(bowling.score()).toEqual(19)
      })

      it('gives the user a strike bonus', () => {
        frame.addRoll(10);
        bowling.addFrame(frame.latestFrame)
        frame.addRoll(4);
        bowling.addFrame(frame.latestFrame)
        frame.addRoll(4);
        bowling.addFrame(frame.latestFrame)
        expect(bowling.score()).toEqual(26)
      })

      it('gives the user a perfect score without bonus points', () => {
        for(let i = 0; i < 10; i++) {
          frame.addRoll(10);
          bowling.addFrame(frame.latestFrame)
        }
        expect(bowling.score()).toEqual(270)
      })

      it('gives the user a perfect score', () => {
        for(let i = 0; i <= 12; i++) {
          frame.addRoll(10);
          bowling.addFrame(frame.latestFrame)
        }
        expect(bowling.score()).toEqual(300)
      })

      it ('expected to give user a spare bonus of 10 when user gets strike after a spare', () => {
          frame.addRoll(5);
          bowling.addFrame(frame.latestFrame);
          frame.addRoll(5);
          bowling.addFrame(frame.latestFrame);
          frame.addRoll(10);
          bowling.addFrame(frame.latestFrame);
          frame.addRoll(1);
          bowling.addFrame(frame.latestFrame);
          expect(bowling.score()).toEqual(32)
      })

      it ('gives the user a maximum score from spares', () => {
        for (let i =0; i < 21; i++) {
          frame.addRoll(5);
          bowling.addFrame(frame.latestFrame);
        }
        expect(bowling.score()).toEqual(150);
      })

      it('user gets a spare in the final frame and gutters', () => {
        for(let i = 0; i <= 9; i++) {
          frame.addRoll(10);
          bowling.addFrame(frame.latestFrame)
        }
        frame.addRoll(8);
        bowling.addFrame(frame.latestFrame)
        frame.addRoll(2);
        bowling.addFrame(frame.latestFrame)
        frame.addRoll(0);
        bowling.addFrame(frame.latestFrame)
        frame.addRoll(0);
        bowling.addFrame(frame.latestFrame)
        expect(bowling.score()).toEqual(280)
      })
  })
});