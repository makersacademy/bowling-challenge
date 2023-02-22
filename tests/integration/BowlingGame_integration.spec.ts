import Frame from "../../src/Frame";
import BowlingGame from "../../src/BowlingGame";

describe("BowlingGame Integration Test", () => {
  it("should calaulate the correct scores", () => {
    const game = new BowlingGame(Frame);
    const player_hits = [4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6];
    game.play(1);
    game.play(4);
    expect(game.result()).toEqual("Your current score: 5.");
    player_hits.forEach((hit) => {
      game.play(hit);
    });
    game.play(1);
    expect(game.result()).toEqual("Game ended! Your total score: 133.");
  });
});
