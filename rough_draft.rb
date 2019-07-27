game = [ [],[],[],[],[],[],[],[],[],[] ]

example_game = [ [10],[5,5],[],[],[],[],[],[],[],[] ]

perfect_game = [ [10],[10],[10],[10],[10],[10],[10],[10],[10],[10, 10, 10] ]

perfect_game.each do |frame|
  frame.each do |roll|
    if roll.strike?
      bonus_score(roll, roll)
      frame_score += roll
    end
    frame_score += roll
  end
end

private

def previous_strike?(previous_frame)
  return true if previous_roll == 10
end

def previous_spare?(previous_frame)
