require_relative '../../app.rb'

describe("Chocobowling") do
  before do
    visit '/'
  end

  feature ("Populates scorecard") do
    scenario ("with the input values when valid") do
      within("//div[@id='roll_div']") {
        fill_in("roll1", with: "5")
        fill_in("roll2", with: "3")

      #find_button('submit_rolls').click
      click_button('submit_rolls')
    }
    #expect(page).to have_css("//input[@id='submit_rolls']")
      expect(page).to have_content("Base - Roll 1 5")
      #expect(page).to have_text("3")
      #expect(page).to have_css("//td[@id='row_roll1_1']", :text => "5")
      #expect(page).to have_css("input[@id='roll1']", text: "5")
    
    end
  end
end
