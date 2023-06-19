class ScoreCalculator {
  static calculate_score(frames) {
    let score = 0;
    let frame_index = 0;
    let consecutive_strikes = 0;

    for (let frame_number = 0; frame_number < 10; frame_number++) {
      const [roll1, roll2, roll3] = frames[frame_index] || [0, 0, 0];

      if (frame_number === 9) {
        score += roll1 + roll2;

        if (roll1 === 10 || roll1 + roll2 === 10) {
          const roll3 = frames[frame_index][2] || 0;
          score += roll3;
        }
      } else if (roll1 === 10) {
        score += 10 + ScoreCalculator.strike_bonus(frame_index, frames);
        consecutive_strikes += 1;
        frame_index += 1;
      } else if (roll1 + roll2 === 10) {
        score += 10 + ScoreCalculator.spare_bonus(frame_index, frames);
        consecutive_strikes = 0;
        frame_index += 1;
      } else {
        score += roll1 + roll2;
        consecutive_strikes = 0;
        frame_index += 1;
      }

      if (consecutive_strikes >= 2) {
        score += roll1;
      }
    }

    return score;
  }

  static strike_bonus(frame_index, frames) {
    const next_frame = frames[frame_index + 1] || [0, 0, 0];
    const next_next_frame = frames[frame_index + 2] || [0, 0, 0];
    const [next_roll1, next_roll2] = next_frame;
  
    if (next_roll1 === 10) {
      if (next_next_frame[0] === 10) {
        return next_next_frame[0];
      } else {
        return 10 + next_next_frame[0] + next_next_frame[1];
      }
    } else {
      return next_roll1 + next_roll2;
    }
  }
  

  static spare_bonus(frame_index, frames) {
    const next_frame = frames[frame_index + 1] || [0, 0, 0];
    const [next_roll1] = next_frame;

    if (next_roll1 === 10) {
      return 10;
    } else {
      return next_roll1;
    }
  }
}

module.exports = ScoreCalculator;


