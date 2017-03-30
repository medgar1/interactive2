$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#introductionbody").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 3000);
      });
    }
    function goLeft() {
        $("#introductionbody").animate({
        left: 30
      }, 10000, function() {
         setTimeout(goRight, 100);
      });
    }

    setTimeout(goRight, 500);

    });

$('#introductionbody').click(function() {
    $('#move').removeClass('two-a');
    $('#move').addClass('two-b');
});

