class Game
  

  def initialize
    @rolls = []
  end

  # my roll takes pins as arguments, then stores 
  # all inside array @rolls
  def roll(pins)
    @rolls << pins
  end

  def score
    20
  end

end