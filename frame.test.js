import Frame from './frame';

describe('Frame', () => {
 let frame;

 beforeEach(() => {
   frame = new Frame(3, 4);
  });

  it('creates a new instance of the class Frame', () => {
    expect(frame).toBeInstanceOf(Frame);
  });
});
