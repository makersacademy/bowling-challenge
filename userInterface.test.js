const UserInterface = require("./userInterface");
const Scorecard = require("./scorecard");

jest.mock("./scorecard");

describe("UserInterface", () => {
  it("can be constructed", () => {
    const scorecard = new Scorecard();
    const userInterface = new UserInterface(scorecard);
    expect(userInterface).toBeInstanceOf(UserInterface);
    userInterface.rl.close();
  });
});
