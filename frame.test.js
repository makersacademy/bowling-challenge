const Frame = require("./frame");

describe("class: Frame", () => {
  beforeEach(() => {
    this.frame = new Frame();
  });
  describe("get Methods", () => {
    it("getRoll1 can get this.roll1", () => {
      expect(this.frame.getRoll1()).toEqual(0);
    });

    it("getRoll2 can get this.roll2", () => {
      expect(this.frame.getRoll2()).toEqual(0);
    });

    it("getRoll3 can get this.roll3", () => {
      expect(this.frame.getRoll3()).toEqual(0);
    });
  });

  describe("set Methods", () => {
    it("setRoll1 can set this.roll1", () => {
      this.frame.setRoll1(4);
      expect(this.frame.getRoll1()).toEqual(4);
    });

    it("setRoll2 can set this.roll2", () => {
      this.frame.setRoll2(4);
      expect(this.frame.getRoll2()).toEqual(4);
    });

    it("setRoll3 can set this.roll3", () => {
      this.frame.setRoll3(4);
      expect(this.frame.getRoll3()).toEqual(4);
    });
  });

  describe("total", () => {
    it("getTotal will get the total", () => {
      expect(this.frame.getTotal()).toEqual(0);
    });

    it("addToTotal will add to total", () => {
      this.frame.addToTotal(3);
      expect(this.frame.getTotal()).toEqual(3);
      this.frame.addToTotal(4);
      expect(this.frame.getTotal()).toEqual(7);
    });
  });
});
