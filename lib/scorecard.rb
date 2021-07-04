class Scorecard
  attr_reader :score

  def initialize
    @score = 0
  end

  def self.instance
    @score ||= self.new
  end

  def update(score)
    @score = score
  end
end
