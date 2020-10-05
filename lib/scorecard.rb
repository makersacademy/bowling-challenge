require_relative './frame_score.rb'

class Scorecard 

  attr_reader :scores, :current_frame

  FRAMES = 10 

  def initialize 
    @scores = {}
    @current_frame = 1
  end 

  def game 
    while @current_frame <= FRAMES do 
      frame = FrameScore.new
      frame.first_roll
      @scores[frame] = frame.score 
      @current_frame += 1
    end 
  end 

  def results
    @scores.values
  end 

end 