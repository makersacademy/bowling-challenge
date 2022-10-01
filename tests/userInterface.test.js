const UserInterface = require("../lib/userInterface");
const Frame = require("../lib/frame");
const ScoringTable = require("../lib/scoringTable");
const Formatter = require("../lib/formatter");

jest.mock("../lib/rl", () => ({
  question: jest
    .fn()
    .mockImplementationOnce(() => Promise.resolve("10"))
    .mockImplementationOnce(() => Promise.resolve("10"))
    .mockImplementationOnce(() => Promise.resolve("10"))
    .mockImplementationOnce(() => Promise.resolve("10"))
    .mockImplementationOnce(() => Promise.resolve("10"))
    .mockImplementationOnce(() => Promise.resolve("10"))
    .mockImplementationOnce(() => Promise.resolve("10"))
    .mockImplementationOnce(() => Promise.resolve("10"))
    .mockImplementationOnce(() => Promise.resolve("10"))
    .mockImplementationOnce(() => Promise.resolve("10"))
    .mockImplementationOnce(() => Promise.resolve("10"))
    .mockImplementationOnce(() => Promise.resolve("10")),
  close: jest.fn(),
}));

describe("UserInterface", () => {
  it("runs the whole game", () => {
    const scoringTable = new ScoringTable();
    const formatter = new Formatter(scoringTable);
    const userInterface = new UserInterface(Frame, scoringTable, formatter);
    userInterface.run();
  });
});
