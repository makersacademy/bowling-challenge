require 'frame'

describe Frame do
  describe '.increase' do
    it 'increases the frame count' do
      expect { Frame.increase }.to change { Frame.count }.by(1)
    end
  end

  describe '.final?' do
    it 'returns false when not the final round' do
      expect(Frame.final?).to be_falsey
    end
    
    it 'returns true on frame 10' do
      allow(Frame).to receive(:count) { 9 }
      Frame.count
      expect(Frame.final?).to be_truthy
    end
    
  end

end