require_relative './frame'

class Scorecard
  attr_reader :frames, :current_frame

  def initialize(frame_1 = Frame.new(1))
    @frames = [ frame_1 ]
    @current_frame = @frames.last
  end

  def add_roll(roll)
    @current_frame.add_roll(roll)
    update_frames
  end

  def running_score
    return false if @current_frame.score == false
    @frames.reduce(0) { |sum, frame| sum += frame.score }
  end

  private

  def update_frames
    if @current_frame.complete?
      next_frame_num = @current_frame.number + 1
      @frames << Frame.new(next_frame_num)
    end

  end
end