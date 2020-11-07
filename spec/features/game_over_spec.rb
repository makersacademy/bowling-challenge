feature 'Game over' do
  scenario 'User finishes game' do
    visit('/')
    roll_full_game

    expect(page.find('#score')).to have_content '40'

    roll_double_2
    
    expect(page.find('#score')).to have_content '40'
    expect(page.find('#current_score')).to have_content 'GAME OVER'
  end
end