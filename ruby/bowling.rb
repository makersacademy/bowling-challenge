class Bowling
  def initialize
    @rolls = []
  end

  def roll(pins)
    @rolls << pins
  end

  def score
    # @rolls.reduce(:+)
    result = 0
    rollIndex = 0
    10.times do
      if strike?(rollIndex)
        result += strikeScore(rollIndex)
        rollIndex += 1
      elsif spare?(rollIndex)
        result += spareScore(rollIndex)
        rollIndex += 2
      else
        result += frameScore(rollIndex)
        rollIndex += 2
      end
    end
    result
  end

  def spare?(rollIndex)
    @rolls[rollIndex] + @rolls[rollIndex + 1] == 10
  end

  def spareScore(rollIndex)
    @rolls[rollIndex] + @rolls[rollIndex + 1] + @rolls[rollIndex + 2]
  end

  def strike?(rollIndex)
    @rolls[rollIndex] == 10
  end

  def strikeScore(rollIndex)
    @rolls[rollIndex] + @rolls[rollIndex + 1] + @rolls[rollIndex + 2]
  end

  def frameScore(rollIndex)
    @rolls[rollIndex] + @rolls[rollIndex + 1]
  end
end
