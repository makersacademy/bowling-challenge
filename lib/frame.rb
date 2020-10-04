class Frame
  attr_reader :number, :rolls

  def initialize(frame_num)
    raise "Frame number must be between 1 and 10" unless frame_num.between?(1, 10)
    @number = frame_num
    @rolls = []
  end

  def add_roll(roll)
    raise "No more rolls, already had 2." if num_rolls >= 2
    raise "No more rolls, already bowled 10 pins." if running_score >= 10
    raise "Invalid roll, cannot bowl more than 10 pins in this frame." if running_score + roll.pins > 10
    @rolls << roll
  end

  def num_rolls
    @rolls.count
  end

  def running_score
    @rolls.reduce(0) { |sum, num| sum + num.pins }
  end

end
