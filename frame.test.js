const Frame = require("./frame");

beforeEach(() => {
  sut = new Frame();
});


describe('Frame', () => {

  it('checks frame is a new instance of the class Frame', () => {
    expect(sut).toBeInstanceOf(Frame);
  });

 it('frame starts at score equalling 0', () => {
    expect(sut.points).toEqual(0);
  });

  it('starts with rollOne and rollTwo equalling null', () => {
    expect(sut.rollOne).toEqual(null);
    expect(sut.rollTwo).toEqual(null);
  });

  it('starts with round being round 1', () => {
    expect(sut.round).toEqual(1);
  });

  it('perform first roll and the amount of pins get added to rollOne', () => {
    sut.roll(8);
    expect(sut.rollOne).toEqual(8);
  });

  it('perform two rolls and you can shows rollTwo score and round score', () => {
    sut.roll(1);
    sut.roll(2);
    expect(sut.rollTwo).toEqual(2);
  });

  it('performs two rolls and calculates round score', () => {
    sut.roll(1);
    sut.roll(2);
    expect(sut.points).toEqual(3);
  });

  it('confirms neither a strike or spare has been bowled in a round', () => {
    sut.roll(4);
    sut.roll(3);
    expect(sut.spare()).toEqual(false);
    expect(sut.strike()).toEqual(false);
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
    expect(sut.complete).toEqual(false);
    sut.roll(1);
    expect(sut.complete).toEqual(false);
    sut.roll(2)
    expect(sut.complete).toEqual(true);
  });

  it('checks to see if round is complete with a one roll strike', () => {
    sut.roll(10);
    expect(sut.complete).toEqual(true);
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
      sut.roll(10);
      expect(() => {
        sut.roll(1).toThrow("It's over! Stop lobbing the balls!")
      });
      frame_5 = new Frame(10);
      frame_5.roll(8);
      expect(() => {
        frame_5.roll(1).toThrow("It's over! Stop lobbing the balls!")
      });
    });


});