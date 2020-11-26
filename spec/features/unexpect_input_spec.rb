feature 'User told to enter numbers' do
  before do
    visit('/')
  end

  scenario 'User tries to input non-number score' do
    fill_in :'bowl-input', with: "e"
    click_button("bowl")
    
    expect(page.find('#error')).to have_content "That's not a number!"
  end
end