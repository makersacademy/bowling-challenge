class Scorecard

  attr_reader :round_score

  def initialize
    @round_score = 0
  end

  def score(pins)
    @round_score += pins
  end

end