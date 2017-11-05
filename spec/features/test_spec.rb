describe "Bowling scores displayed correctly" do
  it "for perfect game" do
    roll_values = [10, 10,	10, 10,	10, 10, 10,	10, 10, 10,10,10]
    running_totals = ['30', '60', '90', '120', '150', '180', '210', '240', '270', '300']
    test_displayed_totals(roll_values, running_totals)
  end
  it "for gutter game" do
    roll_values = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    running_totals = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
    test_displayed_totals(roll_values, running_totals)
  end
  it "for generic example" do
    roll_values = [9,0, 3,5, 6,1, 3,6, 8,1, 5,3, 2,5, 8,0, 7,1,  8,1]
    running_totals = ['9', '17', '24', '33', '42', '50', '57', '65', '73', '82']
    test_displayed_totals(roll_values, running_totals)
  end
  it "for generic example" do
    roll_values = [9,0, 3,7,  6,1, 3,7,  8,1, 5,5,  0,10,  8,0, 7,3, 8,2,8]
    running_totals = ['9', '25', '32', '50', '59', '69', '87', '95', '113', '131']
    test_displayed_totals(roll_values, running_totals)
  end
  it "for generic example" do
    roll_values = [10, 3,7, 6,1, 10, 10, 10, 2,8, 9,0, 7,3, 10,10,10]
    running_totals = ['20', '36', '43', '73', '95', '115', '134', '143', '163', '193']
    test_displayed_totals(roll_values, running_totals)
  end

  def test_displayed_totals(roll_values, running_totals)
    driver = Selenium::WebDriver.for :firefox
    driver.get "file:///Users/lowthe01/projects/makers_academy/weekend_challenges/bowling-challenge/index.html"
    roll_value_input = driver.find_element(:id, "rollValue")
    roll_values.each do |roll_value|
      roll_value_input.send_keys roll_value
      driver.find_element(:id, "enterRollValue").click
    end
    running_totals.each.with_index do |running_total, index|
      total_displayed = driver.find_elements(:class, "runningTotal")[index].text
      expect(total_displayed).to eq running_total
    end
    driver.close
  end
end
