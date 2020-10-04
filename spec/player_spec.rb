# frozen_string_literal: true

require 'player'
describe Player do
  subject(:player) { described_class.new('Victoria')}
  it 'is initialized by a name' do
    expect(player.name).to eq 'Victoria'
  end
end
