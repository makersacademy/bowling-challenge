class ScoreCard
  attr_reader :total_score

  def initialize
    @total_score
  end

  def self.add_roll(score)
    @total_score = score
  end
end
