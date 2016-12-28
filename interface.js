var bowl =$('#bowl')
var frame1_1 =$('#frame1_1')

  $(document).ready(function(){
    var frame = new Frame();

  bowl.click(function() {
    frame1_1.text(frame.firstBowl(8));
    console.log (frame._firstBowl)
  });
});
