class Roll
  attr_reader :pins

  def initialize(pins)
    raise "Cannot roll less than 0 pins" if pins < 0
    raise "Cannot roll more than 10 pins" if pins > 10
    @pins = pins
  end
end