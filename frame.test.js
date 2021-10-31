const Frame = require("./frame");

describe(Frame, () => {
  describe("#isOpen", () => {
    it("is an open frame", () => {
      let open_frame = new Frame(5, 3);
      open_frame.isOpen();
      expect(open_frame.open).toBe(true);
    });
  });
  describe("#isSpare", () => {
    it("is a spare frame", () => {
      let spare_frame = new Frame(4, 6);
      spare_frame.isSpare();
      expect(spare_frame.spare).toBe(true);
    });
  });
  describe("#isStrike", () => {
    it("is a strike", () => {
      let strike_frame = new Frame(10);
      strike_frame.isStrike();
      expect(strike_frame.strike).toBe(true);
    });
  });
  xdescribe("#", () => {
    it("", () => {});
  });
  xdescribe("#", () => {
    it("", () => {});
  });
});
