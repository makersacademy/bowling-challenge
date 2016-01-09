describe ('frame', function() {
  var frame;
});

beforeEach(function() {
  frame = new Frame();
});

describe('Stores partial score', function() {
  it('of knocked pins', function() {
    frame.setKnockedPins(4);
    frame.startFrame(1,1)
    expect(frame.getTotal()).toBe(4);
  });
});

describe('Playing one frame', function() {
  describe('returns frame total', function() {
    it('combines roll 1 with roll 2', function() {
      frame.setKnockedPins(4);
      frame.startFrame(1,1);
      frame.setKnockedPins(3);
      frame.startFrame(1,2);
      expect(frame.getTotal()).toBe(7);
    });
  });
});

describe('frame reset', function() {
  it('sets default values',function() {
    frame.setKnockedPins(4);
    frame.startFrame(1,1);
    frame.setKnockedPins(3);
    frame.startFrame(1,2);
    frame.resetFrame();
    expect(frame.getTotal()).toBe(0);
  });
});
