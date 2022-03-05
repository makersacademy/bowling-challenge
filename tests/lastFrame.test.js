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

})