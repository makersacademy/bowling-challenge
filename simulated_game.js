function GutterFrames() {
  gutter_frame1 = new Frame()
  gutter_frame1.bowl(0)
  gutter_frame1.bowl(0)

  gutter_frame2 = new Frame()
  gutter_frame2.bowl(0)
  gutter_frame2.bowl(0)

  gutter_frame3 = new Frame()
  gutter_frame3.bowl(0)
  gutter_frame3.bowl(0)


}  
function SpareFrames() {
  spare_frame1 = new Frame()
  spare_frame1.bowl(7)
  spare_frame1.bowl(3)

  spare_frame2 = new Frame()
  spare_frame2.bowl(7)
  spare_frame2.bowl(3)

  spare_frame3 = new Frame()
  spare_frame3.bowl(7)
  spare_frame3.bowl(3)
}

function StrikeFrames() {
  strike_frame1 = new Frame()
  strike_frame1.bowl(10)
  
  strike_frame2 = new Frame()
  strike_frame2.bowl(10)
  
  strike_frame3 = new Frame()
  strike_frame3.bowl(10)
}

function SingleGutterFrames() {
  first_gutter_frame1 = new Frame()
  first_gutter_frame1.bowl(0)
  first_gutter_frame1.bowl(9)
  
  first_gutter_frame2 = new Frame()
  first_gutter_frame2.bowl(0)
  first_gutter_frame2.bowl(9)
  
  second_gutter_frame1 = new Frame()
  second_gutter_frame1.bowl(4)
  second_gutter_frame1.bowl(0)

  second_gutter_frame2 = new Frame()
  second_gutter_frame2.bowl(4)
  second_gutter_frame2.bowl(0)

}

function Game() {
  game_card = new Card()
  GutterFrames()
  SpareFrames()
  StrikeFrames()
  SingleGutterFrames()

  game_card.store(strike_frame1)
  game_card.store(strike_frame2)
  game_card.store(spare_frame1)
  game_card.store(spare_frame2)
  game_card.store(gutter_frame1)
  game_card.store(second_gutter_frame1)
  game_card.store(strike_frame3)
  game_card.store(first_gutter_frame1)
  game_card.store(second_gutter_frame2)
  game_card.store(spare_frame3)

}



