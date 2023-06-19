class Repository
  def initialize
    @frames = []
  end

  def add_frame(roll1, roll2, roll3)
    @frames << [roll1, roll2, roll3]
  end

  def frames
    @frames
  end
end
