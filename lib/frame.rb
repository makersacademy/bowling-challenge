class Frame
  attr_reader :number, :rolls

  def initialize(frame_num)
    raise "Frame number must be between 1 and 10" unless frame_num.between?(1, 10)
    @number = frame_num
    @rolls = []
  end

  def add_roll(roll)
    raise "No more rolls for this frame. Already had 2 rolls." if @rolls.count >= 2
    raise "No more rolls for frame. Already bowled 10 pins." if @rolls.reduce(0) { |sum, num| sum + num.pins } >= 10
    raise "Cannot roll more than 10 pins in this frame." if @rolls.reduce(0) { |sum, num| sum + num.pins } + roll.pins > 10
    @rolls << roll
  end

end
