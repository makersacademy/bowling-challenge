class Frame

  attr_reader :number, :rolls
  

  def initialize(frame_number)
    raise 'Frame number does not exist' unless frame_number.between?(1, 10)
    @number = frame_number
    @rolls = []
  end 

  def add_roll(roll)
    @rolls << roll
  end

end