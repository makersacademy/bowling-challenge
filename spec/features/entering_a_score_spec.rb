feature 'Entering a bowling score' do
  scenario 'putting one score in' do
    visit '/'
    fill_in 'score', with: '5'
    click_on("It's bowling time!")
  end

end
