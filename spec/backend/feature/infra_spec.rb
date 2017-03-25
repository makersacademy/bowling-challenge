feature 'Check Infrastructure setup' do

  scenario 'find a welcome message' do
    visit '/'
    expect(page).to have_content('Welcome to Bowling Challenge')
  end

end
