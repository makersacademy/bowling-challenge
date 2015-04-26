# interface
# input initialize takes an array of rolls
# out put is score for frame and returns an int
class Game
  def initialize(input)
    @input = input
    @frames = []
    @rolls = []
    assign_input_to_frames
  end

  def assign_input_to_frames
    while @input.length > 0
      frame = Frame.new
      put_roll_in frame
      put_roll_in frame unless frame.is_over
      @frames << frame
    end
  end

  def put_roll_in(frame)
    curr_roll = @input.shift
    frame.roll curr_roll
    @rolls << curr_roll
  end

  def score_for_frame(n)
    cumulative_score = 0
    (0..n - 1).each do |i|
      name_frames_in_english i
      cumulative_score += @next_frame.first_roll if @current_frame.spare
      cumulative_score += strike_bonus if @current_frame.strike
      cumulative_score += @current_frame.score
    end
    cumulative_score
  end

  def name_frames_in_english(i)
    @current_frame = @frames[i]
    @next_frame = @frames[i + 1]
    @frame_after_next = @frames[i + 2]
  end

  def strike_bonus
    if @next_frame.strike
      @next_frame.score + @frame_after_next.first_roll
    else
      @next_frame.score
    end
  end
end
