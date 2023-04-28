require 'frame'

class Scorecard
  def initialize()
    @frames = []
    @frame_number = 0
    @total_score = 0
  end
   
  def add_frame(frame)
    @frames << frame
  end

  def frame_scores # array of arrays
    return @frames.map(&:frame_points)
  end

  def strike_or_spare(frame, index)
    # Below deals with first ball bonus
    @total_score += frame.frame_points[index+1][0] 
    # We now want to check if the first ball is a strike
    if frame.strike?
      if frame.frame_points[index+1][0] == 10
        @total_score += frame.frame_points[index+2][0]
      else
        @total_score += frame.frame_points[index+1][1]
      end
    end
  end

  def calculate_score
    # First we want to total up the array irrespective of bonus 
    @total_score += @frames.map(&:frame_points).flatten.sum
    # now we deal each frame and assess whether more points are added with bonus
    @frames.each_with_index do |frame, index|
        if frame.strike? || frame.spare?
          strike_or_spare(frame, index)
        end
        if index == 8 && frame.strike?
          bonus_third_roll(frame, index)
        end
      end
    return @total_score
  end

  def bonus_third_roll(frame, index)
    # If the 9th frame roll one has a 10, add the 10th frame roll 1 + roll two
      @total_score += frame.frame_points[index+1][0]
      @total_score += frame.frame_points[index+1][1]
  end
end
