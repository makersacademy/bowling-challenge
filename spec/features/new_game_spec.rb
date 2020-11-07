feature 'User can start a new game' do
  before do
    visit('/')
  end

  scenario 'After one regular frame' do
    roll_double_2
    expect(page.find('#score')).to have_content '4'
    click_button("new")
    expect(page.find('#score')).to have_content '0'
  end
end