class Frame
  attr_reader :number, :rolls

  def initialize(frame_num)
    raise "Frame number must be between 1 and 10" unless frame_num.between?(1, 10)
    @number = frame_num
    @rolls = []
  end

  def add_roll(roll)
    raise "No more rolls, frame is complete" if complete?
    raise "Invalid roll" if num_rolls == 1 && ( total_pins + roll.pins > 10 ) unless strike?
    @rolls << roll
  end

  def complete?
    return false if num_rolls < 2 && total_pins < 10
    return false if has_third_roll?
    true
  end

  def num_rolls
    @rolls.count
  end

  def total_pins
    @rolls.reduce(0) { |sum, num| sum + num.pins }
  end

  # score doesn't currently cater for frame 10
  def score(frame_n1 = nil, frame_n2 = nil)
    return false unless complete?
    bonus = 0
    bonus = spare_bonus(frame_n1) if spare?
    bonus = strike_bonus(frame_n1, frame_n2) if strike?
    return false if bonus == false
    total_pins + bonus
  end

  private

  def spare?
    num_rolls == 2 && total_pins == 10
  end

  def strike?
    num_rolls == 1 && total_pins == 10
  end

  def has_third_roll?
    return false unless tenth_frame?
    return true if spare? || (@rolls[0].pins == 10 && num_rolls < 3)
    false
  end

  def spare_bonus(frame_n1)
    return false if frame_n1.nil? || frame_n1.num_rolls < 1
    frame_n1.rolls[0].pins
  end

  def strike_bonus(frame_n1, frame_n2)
    next_rolls = []
    [frame_n1, frame_n2].each do |frame|
      return false if frame.nil?
      next_rolls += frame.rolls
      break if next_rolls.count >= 2
    end
    next_rolls.count >= 2 ?
      next_rolls[0].pins + next_rolls[1].pins : false
  end

  def tenth_frame?
    @number == 10
  end
end

