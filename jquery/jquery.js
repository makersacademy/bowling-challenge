
$(document).ready(function() {

  //       document.getElementsByName('frame1roll1')[0].onchange = function() {
  //      if (this.value=="blank") alert('Select something !');
  // }


  $("#bonus-1-title").hide();
  $("#bonus-roll-1").hide();
  $("#bonus-roll-2").hide();
  $("#bonus-add").hide();
  $(".bonustwo").hide();


  $("#frame-10-add").click(function() {
    val1 = $("#frame-10-roll-1").val();
    val1number = val1*1
    val2 = $("#frame-10-roll-2").val();
    val2number = val2*1

    if(val1number == 10) {
      $("#bonus-1-title").show();
      $("#bonus-roll-1").show();
      $("#bonus-roll-2").show();
      $("#bonus-add").show();
    } else if ((val1number + val2number == 10) && val1number != 10) {
      $("#bonus-1-title").show();
      $("#bonus-roll-1").show();
      $("#bonus-add").show();
    } else {
      $(".final-score").css("display", "inline");
      $(".score").css("display", "none");
    }
  })

  $("#bonus-add").click(function() {
    val = $("#bonus-roll-1").val();
    if(val == 10) {
      $(".bonustwo").show();
    }
    else {
      $(".final-score").css("display", "inline");
      $(".score").css("display", "none");
    }
  });



  $("#reset").on("click", function () {
    $("#frame-1-roll-1").val("");
    $("#frame-1-roll-2").val("");
    $("#frame-1-add").css("display", "inline");
    $("#frame-2-roll-1").val("");
    $("#frame-2-roll-2").val("");
    $("#frame-2-add").css("display", "inline");
    $("#frame-3-roll-1").val("");
    $("#frame-3-roll-2").val("");
    $("#frame-3-add").css("display", "inline");
    $("#frame-4-roll-1").val("");
    $("#frame-4-roll-2").val("");
    $("#frame-4-add").css("display", "inline");
    $("#frame-4-roll-1").val("");
    $("#frame-4-roll-2").val("");
    $("#frame-4-add").css("display", "inline");
    $("#frame-5-roll-1").val("");
    $("#frame-5-roll-2").val("");
    $("#frame-5-add").css("display", "inline");
    $("#frame-6-roll-1").val("");
    $("#frame-6-roll-2").val("");
    $("#frame-6-add").css("display", "inline");
    $("#frame-7-roll-1").val("");
    $("#frame-7-roll-2").val("");
    $("#frame-7-add").css("display", "inline");
    $("#frame-8-roll-1").val("");
    $("#frame-8-roll-2").val("");
    $("#frame-8-add").css("display", "inline");
    $("#frame-9-roll-1").val("");
    $("#frame-9-roll-2").val("");
    $("#frame-9-add").css("display", "inline");
    $("#frame-10-roll-1").val("");
    $("#frame-10-roll-2").val("");
    $("#frame-10-add").css("display", "inline");
    $("#bonus-1-title").hide();
    $("#bonus-roll-1").hide();
    $("#bonus-roll-2").hide();
    $("#bonus-add").hide();
    $(".bonustwo").hide();
    $(".final-score").css("display", "none");
    $(".score").css("display", "inline");


  })
});




$(document).ready(function() {

  // $('#frame_1').validate({
  //   rules: {
  //       frame1roll1: { required: true }
  //   }// initialize plugin
  // your rules & options,
  // }),
  //         submitHandler: function(form) {
  //           $('#frame-1-add').on('click', function() {
  //
  //             var bcl = new BowlingCl();
  //             var rollone = $('#frame-1-roll-1').val();
  //             var rolltwo = $('#frame-1-roll-2').val();
  //
  //             bcl.inputFrame(rollone, rolltwo);
  //             updateCurrentTotal(bcl.getRunningTotal());
  //           });
  //
  //
  //             // your ajax would go here
  //             return false;  // blocks regular submit since you have ajax
  //         })
  // });

  var bcl = new BowlingCl();




  $('#frame-1-add').on('click', function() {


    var rollone = $('#frame-1-roll-1').val();
    var rolltwo = $('#frame-1-roll-2').val();

    if(rollone == "" || rolltwo == "") {
      alert('Please select a score!');
    } else {
      bcl.inputFrame(rollone, rolltwo);
      updateCurrentTotal(bcl.getRunningTotal());
      $(this).css("display", "none")
    };
  });


  $('#frame-2-add').on('click', function() {

    var rollone = $('#frame-2-roll-1').val();
    var rolltwo = $('#frame-2-roll-2').val();

    if(rollone == "" || rolltwo == "") {
      alert('Please select a score!');
    } else {
      bcl.inputFrame(rollone, rolltwo);
      updateCurrentTotal(bcl.getRunningTotal());
      $(this).css("display", "none")
    };
  });


  $('#frame-3-add').on('click', function() {

    var rollone = $('#frame-3-roll-1').val();
    var rolltwo = $('#frame-3-roll-2').val();

    if(rollone == "" || rolltwo == "") {
      alert('Please select a score!');
    } else {
      bcl.inputFrame(rollone, rolltwo);
      updateCurrentTotal(bcl.getRunningTotal());
      $(this).css("display", "none")
    };
  });

  $('#frame-4-add').on('click', function() {

    var rollone = $('#frame-4-roll-1').val();
    var rolltwo = $('#frame-4-roll-2').val();

    if(rollone == "" || rolltwo == "") {
      alert('Please select a score!');
    } else {
      bcl.inputFrame(rollone, rolltwo);
      updateCurrentTotal(bcl.getRunningTotal());
      $(this).css("display", "none")
    };
  });

  $('#frame-5-add').on('click', function() {

    var rollone = $('#frame-5-roll-1').val();
    var rolltwo = $('#frame-5-roll-2').val();

    if(rollone == "" || rolltwo == "") {
      alert('Please select a score!');
    } else {
      bcl.inputFrame(rollone, rolltwo);
      updateCurrentTotal(bcl.getRunningTotal());
      $(this).css("display", "none")
    };
  });

  $('#frame-6-add').on('click', function() {

    var rollone = $('#frame-6-roll-1').val();
    var rolltwo = $('#frame-6-roll-2').val();

    if(rollone == "" || rolltwo == "") {
      alert('Please select a score!');
    } else {
      bcl.inputFrame(rollone, rolltwo);
      updateCurrentTotal(bcl.getRunningTotal());
      $(this).css("display", "none")
    };
  });

  $('#frame-7-add').on('click', function() {

    var rollone = $('#frame-7-roll-1').val();
    var rolltwo = $('#frame-7-roll-2').val();

    if(rollone == "" || rolltwo == "") {
      alert('Please select a score!');
    } else {
      bcl.inputFrame(rollone, rolltwo);
      updateCurrentTotal(bcl.getRunningTotal());
      $(this).css("display", "none")
    };
  });

  $('#frame-8-add').on('click', function() {

    var rollone = $('#frame-8-roll-1').val();
    var rolltwo = $('#frame-8-roll-2').val();

    if(rollone == "" || rolltwo == "") {
      alert('Please select a score!');
    } else {
      bcl.inputFrame(rollone, rolltwo);
      updateCurrentTotal(bcl.getRunningTotal());
      $(this).css("display", "none")
    };
  });

  $('#frame-9-add').on('click', function() {

    var rollone = $('#frame-9-roll-1').val();
    var rolltwo = $('#frame-9-roll-2').val();

    if(rollone == "" || rolltwo == "") {
      alert('Please select a score!');
    } else {
      bcl.inputFrame(rollone, rolltwo);
      updateCurrentTotal(bcl.getRunningTotal());
      $(this).css("display", "none")
    };
  });

  $('#frame-10-add').on('click', function() {

    var rollone = $('#frame-10-roll-1').val();
    var rolltwo = $('#frame-10-roll-2').val();

    if(rollone == "" || rolltwo == "") {
      alert('Please select a score!');
    } else {
      bcl.inputFrame(rollone, rolltwo);
      updateCurrentTotal(bcl.getRunningTotal());
      $(this).css("display", "none")
    };
  });


  $('#bonus-add').on('click', function() {

    var rollone = $('#bonus-roll-1').val();
    var rolltwo = $('#bonus-roll-2').val();

    if(rollone == "" || rolltwo == "") {
      alert('Please select a score!');
    } else {
      bcl.inputFrame(rollone, rolltwo);
      updateCurrentTotal(bcl.getRunningTotal());
      $(this).css("display", "none")
    };
  });

  $('#bonus-2-add').on('click', function() {

    var rollone = $('#bonus-2').val();
    var rolltwo = 0

    if(rollone == "") {
      alert('Please select a score!');
    } else {
      bcl.inputFrame(rollone, rolltwo);
      updateCurrentTotal(bcl.getRunningTotal());
      $(this).css("display", "none");
      $(".final-score").css("display", "inline");
      $(".score").css("display", "none");
    };
  });

  $("#reset").on("click", function () {

    bcl.reset();
    updateCurrentTotal(bcl.getRunningTotal());
  });


  function updateCurrentTotal(number) {
    $('.current-score').text(number);
  }

});
















  // function Validate() {
  //               var var1 = document.getElementById("#frame-1-roll-1").val();
  //               if (var1 == "") {
  //                 document.getElementById("#error_message").textContent="Error Message";
  //                 return false;
  //               }
  // //           return true;
  // //       }
  //
  //   $("#frame-1-add").click(function() {
  //     Validate()
  //   });
