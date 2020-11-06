feature 'User can view score' do
  before do
    visit('/')
  end

  scenario 'After one regular frame' do
    roll_double_2
    click_button("calculate-score")
    expect(page.find('#score')).to have_content '4'
  end

  scenario 'strike bonuses are calculated after following roll' do
    score_strike
    click_button("calculate-score")
    expect(page.find('#score')).to have_content '10'
    roll_double_2
    click_button("calculate-score")
    expect(page.find('#score')).to have_content '18'
  end

  scenario 'spare bonuses are calculated after following roll' do
    score_spare
    click_button("calculate-score")
    expect(page.find('#score')).to have_content '10'
    roll_double_2
    click_button("calculate-score")
    expect(page.find('#score')).to have_content '16'
  end
end