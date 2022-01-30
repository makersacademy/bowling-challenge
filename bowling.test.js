const Bowling = require('./bowling.js');

describe("Bowling", () => {
  it("is an instance of Bowling class", () => {
    const bowling = new Bowling;
    expect(bowling).toBeInstanceOf(Bowling);
  });

});

