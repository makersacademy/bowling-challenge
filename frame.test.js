const Frame = require("./frame");

beforeEach(() => {
  frame = new Frame();
});


describe('Frame', () => {
 it('frame starts at score equalling 0', () => {
    expect(frame.points).toEqual(0);
  });

  it('starts with rollOne and rollTwo equalling null', () => {
    expect(frame.rollOne).toEqual(null);
    expect(frame.rollTwo).toEqual(null);
  });

  it('starts with round being round 1', () => {
    expect(frame.round).toEqual(1);
  });

  it('perform first roll and the amount of pins get added to rollOne', () => {
    frame.roll(8);
    expect(frame.rollOne).toEqual(8);
  });

  it('perform two rolls and you can shows rollTwo score and round score', () => {
    frame.roll(1);
    frame.roll(2);
    expect(frame.rollTwo).toEqual(2);
  });

  it('performs two rolls and calculates round score', () => {
    frame.roll(1);
    frame.roll(2);
    expect(frame.points).toEqual(3);
  });

  it('confirms neither a strike or spare has been bowled in a round', () => {
    frame.roll(4);
    frame.roll(3);
    expect(frame.spare()).toEqual(false);
    expect(frame.strike()).toEqual(false);
  })

  it('confirms whether spare has been bowled in a round', () => {
    frame_1 = new Frame();
    frame_2 = new Frame();
    frame_1.roll(8);
    frame_1.roll(1)
    expect(frame_1.spare()).toEqual(false);
    frame_2.roll(9);
    frame_2.roll(1);
    expect(frame_2.spare()).toEqual(true);
  });

  it('confirms whether strike has been bowled in a round', () => {
    frame_1 = new Frame();
    frame_2 = new Frame();
    frame_1.roll(9);
    expect(frame_1.strike()).toEqual(false);
    frame_2.roll(10);
    expect(frame_2.strike()).toEqual(true);
  });

  it('checks to see if round is complete or not', () => {
    expect(frame.complete).toEqual(false);
    frame.roll(1);
    expect(frame.complete).toEqual(false);
    frame.roll(2)
    expect(frame.complete).toEqual(true);
  });

  it('checks to see if round is complete with a one roll strike', () => {
    frame.roll(10);
    expect(frame.complete).toEqual(true);
  });

  it('checks to see whether round 10 complete if spare happens or not and allows 3rd go', () => {
    frame_3 = new Frame(10);
    frame_4 = new Frame(10);
    frame_3.roll(8);
    frame_3.roll(1);
    expect(frame_3.complete).toEqual(true);
    frame_4.roll(8);
    frame_4.roll(2);
    expect(frame_4.complete).toEqual(false);
    frame_4.roll(7);
    expect(frame_4.complete).toEqual(true);
    });
  
    it('will not allow more rolls if frame is complete', () => {
      frame.roll(10);
      expect(() => {
        frame.roll(1).toThrow("It's over! Stop lobbing the balls!")
      });
      frame_5 = new Frame(10);
      frame_5.roll(8);
      expect(() => {
        frame_5.roll(1).toThrow("It's over! Stop lobbing the balls!")
      });
    });


});