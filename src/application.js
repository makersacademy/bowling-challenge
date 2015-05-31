player = new Player;

$(document).ready( function () {
  $('#button-group input').click(function () {
    var pins = $("form input[type=radio]:checked").val()
    $("input:radio").removeAttr("checked");
    // player.firstBowl(pins);



    // player.secondBowl($('#bowl2').val());
    $('#score1').html(pins);
    // $('#score1').after().html('<input type="text" id="bowl1of2" placeholder="Did it!">');
    // $('#score1').after().html('<input type="text" placeholder="And again!">');
  });

});

