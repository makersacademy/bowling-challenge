require 'frame'

describe Frame do

  subject(:frame) { Frame.new(1) }

  let(:roll_2) { double('roll', pins: 2) }
  let(:roll_3) { double('roll', pins: 3) }
  let(:roll_8) { double('roll', pins: 8) }
  let(:roll_10) { double('roll', pins: 10) }


  it 'has a frame number between 1-10' do
    frame_1 = Frame.new(1)
    expect(frame_1.number).to eq 1

    frame_10 = Frame.new(10)
    expect(frame_10.number).to eq 10
  end

  it 'throws error if frame_num < 1' do
    expect{ Frame.new(0) }.to raise_error(RuntimeError)
  end

  it 'throws error if frame_num > 10' do
    expect{ Frame.new(11) }.to raise_error(RuntimeError)
  end

  describe '#add_roll(roll)' do
    it 'adds the roll to rolls if roll count < 2 AND new frame score would be <= 10' do
      frame.add_roll(roll_2)
      frame.add_roll(roll_8)
      expect(frame.rolls).to include(roll_2)
      expect(frame.rolls).to include(roll_8)
    end

    context 'frame number is 1-9' do
      it 'throws error if current roll count == 2' do
        frame.add_roll(roll_2)
        frame.add_roll(roll_2)
        expect{ frame.add_roll(roll_2) }.to raise_error(RuntimeError)
      end

      it 'throws error if the current frame score == 10' do
        frame.add_roll(roll_10)
        expect{ frame.add_roll(roll_2) }.to raise_error(RuntimeError)
      end

      it 'throws error if the current frame score + rolled pins > 10' do
        frame.add_roll(roll_8)
        expect{ frame.add_roll(roll_8) }.to raise_error(RuntimeError)
      end
    end
    context 'frame number is 10' do
      it 'throws error if current roll count == 2 AND total pins < 10' do
        frame = Frame.new(10)
        frame.add_roll(roll_2)
        frame.add_roll(roll_2)
        expect{ frame.add_roll(roll_2) }.to raise_error(RuntimeError)
      end

      it 'adds the roll if roll count = 2 AND frame score = 10 (i.e. spare)' do
        frame = Frame.new(10)
        frame.add_roll(roll_2)
        frame.add_roll(roll_8)

        frame.add_roll(roll_3)

        expect(frame.rolls).to include(roll_3)
      end

      it 'adds the roll if roll count = 1 AND frame score = 10 (i.e. strike)' do
        frame = Frame.new(10)
        frame.add_roll(roll_10)

        frame.add_roll(roll_3)

        expect(frame.rolls).to include(roll_3)
      end

      it 'adds the roll if roll count = 2 AND frame score = 20 (i.e. double strike)' do
        frame = Frame.new(10)
        frame.add_roll(roll_10)
        frame.add_roll(roll_10)

        frame.add_roll(roll_3)

        expect(frame.rolls).to include(roll_3)
      end
    end
  end

  describe '#complete?' do
    it 'returns false if the frame has 1 roll and < 10 total pins' do
      frame.add_roll(roll_8)
      expect(frame.complete?).to eq false
    end

    it 'returns false if the frame has 0 rolls' do
      expect(frame.complete?).to eq false
    end

    context 'frame number is 1-9' do
      it 'returns true if the frame has 2 rolls' do
        frame.add_roll(roll_2)
        frame.add_roll(roll_8)
        expect(frame.complete?).to eq true
      end

      it 'returns true if the frame has a strike' do
        frame.add_roll(roll_10)
        expect(frame.complete?).to eq true
      end
    end

    context 'frame number is 10' do
      it 'returns false if the frame has 2 rolls with total pins = 10 (i.e. spare)' do
        frame = Frame.new(10)
        frame.add_roll(roll_2)
        frame.add_roll(roll_8)

        expect(frame.complete?).to eq false
      end

      it 'returns false if number of rolls < 3 AND first roll was a strike' do
        frame = Frame.new(10)
        frame.add_roll(roll_10)
        frame.add_roll(roll_2)

        expect(frame.complete?).to eq false
      end

      it 'returns true if the frame has 2 rolls with total pins < 10' do
        frame = Frame.new(10)
        frame.add_roll(roll_2)
        frame.add_roll(roll_3)

        expect(frame.complete?).to eq true
      end

      it 'returns true if the frame has 3 rolls' do
        frame = Frame.new(10)
        frame.add_roll(roll_10)
        frame.add_roll(roll_2)
        frame.add_roll(roll_3)

        expect(frame.complete?).to eq true
      end
    end
  end

  describe '#score(frame_n1, frame_n2)' do
    context 'frame is complete' do
      context 'STANDARD: total pins < 10' do
        it 'returns the score as the sum of roll 1 and roll 2 pins' do
          frame.add_roll(roll_2)
          frame.add_roll(roll_2)
          expect(frame.score).to eq 4
        end
      end

      context 'SPARE: total pins = 10 AND number of rolls = 2' do
        before :each do
          frame.add_roll(roll_8)
          frame.add_roll(roll_2)
        end

        it 'returns false if next roll (for bonus) is not provided' do
          expect(frame.score).to eq false
        end

        it 'returns the sum of total pins + pins of next roll, if given' do
          frame_n1 = Frame.new(2)
          frame_n1.add_roll(roll_2)
          expect(frame.score(frame_n1)).to eq 12
        end
      end

      context 'STRIKE: total pins = 10 AND number of rolls = 1' do
        before :each do
          frame.add_roll(roll_10)
        end

        it 'returns false if the next two rolls (for bonus) are not provided' do
          frame_n1 = Frame.new(2)
          frame_n1.add_roll(roll_10)
          frame_n2 = Frame.new(3)
          expect(frame.score(frame_n1, frame_n2)).to eq false
        end

        it 'returns the sum of total pins + pins of next 2 rolls, if given' do
          frame_n1 = Frame.new(2)
          frame_n1.add_roll(roll_2)
          frame_n1.add_roll(roll_2)
          frame_n2 = Frame.new(3)
          frame_n2.add_roll(roll_2)
          expect(frame.score(frame_n1, frame_n2)).to eq 14
        end

        it 'returns the sum of total pins + pins of next 2 rolls, if given' do
          frame_n1 = Frame.new(2)
          frame_n1.add_roll(roll_10)
          frame_n2 = Frame.new(3)
          frame_n2.add_roll(roll_2)
          expect(frame.score(frame_n1, frame_n2)).to eq 22
        end
      end
    end

    context 'frame is incomplete' do
      it 'returns false if no rolls' do
        expect(frame.score).to eq false
      end

      it 'returns false if 1 roll and total pins < 10' do
        frame.add_roll(roll_8)
        expect(frame.score).to eq false
      end
    end
  end
end
