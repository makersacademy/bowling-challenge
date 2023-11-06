const UserInterface = require("./userInterface");
const Scorecard = require("./scorecard");
const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

jest.mock("./scorecard");
jest.mock("node:readline/promises");
jest.mock("node:process", () => ({
  input: jest.fn(),
  output: jest.fn()
}));


describe("UserInterface", () => {
  it("can be constructed", () => {
    const scorecard = new Scorecard();
    readline.createInterface.mockReturnValue({close: jest.fn()});
    const readlineInterface = readline.createInterface({ input, output });
    const userInterface = new UserInterface(
      scorecard, readlineInterface
    );
    expect(userInterface).toBeInstanceOf(UserInterface);
    userInterface.rl.close();
  });
});
