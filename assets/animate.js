$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letteraserif").animate({
        left: width
      }, 50, function() {
         setTimeout(goLeft, 50);
      });
    }
    function goLeft() {
        $("#letteraserif").animate({
        left: 10
      }, 5000, function() {
         setTimeout(goRight, 10);
      });
    }

    setTimeout(goRight, 50);


    function goRight() {
        $("#letterbserif").animate({
        left: width
      }, 50, function() {
         setTimeout(goLeft, 50);
      });
    }
    function goLeft() {
        $("#letterbserif").animate({
        left: 10
      }, 5000, function() {
         setTimeout(goRight, 10);
      });
    }

    setTimeout(goRight, 50);

});