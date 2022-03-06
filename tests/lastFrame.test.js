const LastFrame = require("../lib/lastFrame.cjs");

describe ("Last Frame class", () => {
  let lastFrame

  beforeEach(() => {
    lastFrame = new LastFrame();
  });

  it("the frame is completed", () => {
    lastFrame.logRoll(6);
    lastFrame.logRoll(3);
    expect(lastFrame.frameComplete()).toBe(true);
  });

  it("the frame is completed", () => {
    lastFrame.logRoll(6);
    lastFrame.logRoll(4);
    lastFrame.logRoll(3);
    expect(lastFrame.frameComplete()).toBe(true);
  });

  it("the frame is not completed on a strike", () => {
    lastFrame.logRoll(10);
    expect(lastFrame.frameComplete()).toBe(false);
  });

  
  it("the frame is not completed on a strike and following roll", () => {
    lastFrame.logRoll(10);
    lastFrame.logRoll(10);
    expect(lastFrame.frameComplete()).toBe(false);
  });

  it("the frame is completed on 3 rolls and a strike", () => {
    lastFrame.logRoll(10);
    lastFrame.logRoll(10);
    lastFrame.logRoll(10);
    expect(lastFrame.frameComplete()).toBe(true);
  });


  it("returns a formatted string for a strike ", () => {
    lastFrame.logRoll(10);
    expect(lastFrame.formatFrame()).toBe('X |');
  });

  it("returns a formatted string for 2 strikes ", () => {
    lastFrame.logRoll(10);
    lastFrame.logRoll(10);
    expect(lastFrame.formatFrame()).toBe('X |X ');
  });

  
  it("returns a formatted string for a spare ", () => {
    lastFrame.logRoll(3);
    lastFrame.logRoll(7);
    expect(lastFrame.formatFrame()).toBe('3 |/ ');
  });

  it("returns a formatted string for an open game ", () => {
    lastFrame.logRoll(3);
    lastFrame.logRoll(3);
    expect(lastFrame.formatFrame()).toBe('3 |3 ');
  });
})