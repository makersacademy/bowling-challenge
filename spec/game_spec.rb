require 'game'

describe Game do


    describe 'roll' do
        it 'can roll pins' do
            game = Game.new
            20.times{game.roll(1)}
            expect(game.score).to eq 20
        end

        it 'Roll a gutter game' do
            game = Game.new
            20.times{game.roll(0)}
            expect(game.score).to eq 0
        end

        it 'Roll a spare' do
            game = Game.new
            game.roll(3)
            game.roll(7)
            game.roll(5)
            17.times{game.roll(0)}
            expect(game.score).to eq 20
        end

        it 'Roll a strike' do
            game = Game.new
            game.roll(10)
            game.roll(2)
            game.roll(4)
            16.times{game.roll(0)}
            expect(game.score).to eq 22
        end
          
        it 'Roll a perfect game' do
            game = Game.new
            12.times{game.roll(10)}
            expect(game.score).to eq 300
        end

    end

end
