import BowlingGame from "../src/BowlingGame";
import Frame from "../src/Frame";

jest.mock("../src/Frame");

describe("BowlingGame", () => {
  let game: BowlingGame;
  let frameMock: jest.MockedClass<typeof Frame>;

  beforeEach(() => {
    frameMock = Frame as jest.MockedClass<typeof Frame>;
    game = new BowlingGame(frameMock);
  });

  describe("#play", () => {
    it("should display a total score after each play", () => {
      game.play(3);
      expect(frameMock.prototype.is_ended).toHaveBeenCalledTimes(1);
      expect(frameMock.prototype.add_score).toHaveBeenCalledTimes(1);
    });

    it("should display a total score if the game ended.", () => {
      for (let i of [...Array(10).keys()]) {
        frameMock.prototype.is_ended.mockReturnValueOnce(false);
        frameMock.prototype.is_ended.mockReturnValueOnce(true);
        frameMock.prototype.total_score.mockReturnValueOnce(10);
      }
      frameMock.prototype.status.mockReturnValue("normal");
      for (let score of [...Array(20).fill(5)]) {
        game.play(score);
      }
      expect(frameMock.prototype.add_score).toBeCalledWith(5);
      expect(frameMock.prototype.add_score).toHaveBeenCalledTimes(20);
    });
  });
});
