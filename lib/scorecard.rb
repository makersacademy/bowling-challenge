class Scorecard

  attr_reader :frame_score, :frames, :total

  def initialize
    @frame_score = 0
    @frames = []
    @total = 0
  end

  def score(pins)
    @frame_score += pins
  end

  def score_frame(round)
    @frames.push(round)
    sum_total
  end

private

  def sum_total
    @total = 0
    @frames.each do |frame|
      @total += Calculator.new.add_frame(frame.frame[:first_throw], frame.frame[:second_throw])
    end
  end

end