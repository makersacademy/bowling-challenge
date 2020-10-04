require "frame"

describe Frame do
  it "expects to know about roll it is on" do
    frame = Frame.new
    expect(frame.rolls).to eq 0
  end

  it "knows if frame was a spare" do
    frame = Frame.new
    expect(frame.is_spare?).to eq false
    frame.add_roll(5)
    frame.add_roll(5)
    expect(frame.is_spare?).to eq true
    expect(frame.is_strike?).to eq false
  end

  it "doesn't allow the player to input more pins felled than available" do
    frame = Frame.new
    frame.add_roll(5)
    expect { frame.add_roll(6) }.to raise_error "You cannot down more pins than available"
  end

  it "doesn't let you enter more than two rolls" do
    frame = Frame.new
    frame.add_roll(5)
    frame.add_roll(4)
    expect { frame.add_roll(1) }.to raise_error "You have already finished this frame"
  end

  it "doesn't allow you to enter any more rolls after a strike" do
    frame = Frame.new
    frame.add_roll(10)
    expect { frame.add_roll(1) }.to raise_error "You have already finished this frame"
  end

  it "doesn't allow you to enter any more rolls after a spare" do
    frame = Frame.new
    frame.add_roll(5)
    frame.add_roll(5)
    expect { frame.add_roll(1) }.to raise_error "You have already finished this frame"
  end
end
