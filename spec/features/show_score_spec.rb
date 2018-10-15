feature 'Shows bowling scores' do
  scenario 'Entering a throw, shows a throw' do
    visit '/'
    fill_in 'next-throw', with: "5"
    click_button('Enter')
    find("#frame-1", visible: :all).text.should == "5"
  end
end
