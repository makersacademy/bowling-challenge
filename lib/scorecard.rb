require "frame"

class ScoreCard
  def initialize
    @frames = []
  end

  def total_score
    frame_scores = @frames.map { |frame|
      frame.frame_score
    }

    return frame_scores.sum
  end

  def add_roll(pins_felled)
    if @frames.length == 0 || @frames.last.frame_completed?
      @frames << Frame.new
    end

    @frames.last.add_roll(pins_felled)

    if @frames.length > 1
      @frames[@frames.length - 2].add_following_frame_roll(pins_felled)
      if @frames.length > 2
        @frames[@frames.length - 3].add_following_frame_roll(pins_felled)
      end
    end
  end
end
