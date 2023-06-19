class ScoreCalculator
  def self.calculate_score(frames)
    score = 0
    frame_index = 0
    consecutive_strikes = 0

    10.times do |frame_number|
      roll1, roll2, roll3 = frames[frame_index] || [0, 0, 0]

      if frame_number == 9
        score += roll1 + roll2

        if roll1 == 10 || roll1 + roll2 == 10
          roll3 = frames[frame_index][2] || 0
          score += roll3
        end
      elsif roll1 == 10
        score += 10 + strike_bonus(frame_index, frames)
        consecutive_strikes += 1
        frame_index += 1
      elsif roll1 + roll2 == 10
        score += 10 + spare_bonus(frame_index, frames)
        consecutive_strikes = 0
        frame_index += 1
      else
        score += roll1 + roll2
        consecutive_strikes = 0
        frame_index += 1
      end

      if consecutive_strikes >= 2
        score += roll1
      end
    end

    score
  end

  def self.strike_bonus(frame_index, frames)
    next_frame = frames[frame_index + 1] || [0, 0, 0]
    next_next_frame = frames[frame_index + 2] || [0, 0, 0]
    next_roll1, next_roll2 = next_frame

    if next_roll1 == 10
      if next_next_frame[0] == 10
        20 + next_next_frame[0]
      else
        10 + next_next_frame[0] + next_next_frame[1]
      end
    else
      next_roll1 + next_roll2
    end
  end

  def self.spare_bonus(frame_index, frames)
    next_frame = frames[frame_index + 1] || [0, 0, 0]
    next_roll1, _ = next_frame

    if next_roll1 == 10
      10
    else
      next_roll1
    end
  end

  
end
