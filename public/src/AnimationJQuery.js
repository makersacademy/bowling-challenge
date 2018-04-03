$(document).ready(function() {

  $("button#start_game").click(function() {
    $("div#roll_div").show("slow");
    $("div#display_div").show("slow");
    $(this).fadeOut("slow");
  });

  $("h1#title").slideDown("slow");

  $("div#image").delay("slow").slideDown("slow");

})
