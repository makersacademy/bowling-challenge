import Frame from "./Frame";

export default class BowlingGame {
  // Types
  score_board: Frame[];
  frame_index: number;

  constructor(frame: typeof Frame) {
    this.score_board = this.#new_board_handler(frame);
    this.frame_index = 0;
  }

  // Adds scores into the score board
  play(hits: number): void {
    if (this.#is_ended()) {
      return;
    }
    const current_frame = this.score_board[this.frame_index];
    current_frame.add_score(hits);
    if (current_frame.is_ended()) {
      this.frame_index += 1;
    }
  }

  // Returns a message with the total score
  result(): string {
    if (this.#is_ended()) {
      return `Game ended! Your total score: ${this.#calculate_total_score()}.`;
    } else {
      return `Your current score: ${this.#calculate_total_score()}.`;
    }
  }

  // Private

  #calculate_total_score(): number {
    let total_score = 0;
    this.score_board.forEach((frame, index) => {
      const next_frame = this.score_board[index + 1];

      if (index < 9) {
        switch (frame.status()) {
          case "strike":
            total_score +=
              frame.total_score() +
              next_frame.getScores[0] +
              next_frame.getScores[1];
            break;
          case "spare":
            total_score += frame.total_score() + next_frame.getScores[0];
            break;
          default:
            total_score += frame.total_score();
            break;
        }
      } else {
        total_score += frame.total_score();
      }
    });
    return total_score;
  }

  #is_ended(): boolean {
    return this.frame_index == 10;
  }

  // Creates an array of nine [0, 0] and one [0, 0, 0] for the 10th frame
  #new_board_handler(frame: typeof Frame): Frame[] {
    const new_board: Frame[] = [];
    for (let i of [...Array(9).keys()]) {
      new_board.push(new frame(false));
    }
    new_board.push(new frame(true));
    return new_board;
  }
}
