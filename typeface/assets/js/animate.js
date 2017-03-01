$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letteraserif").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 3000);
      });
    }
    function goLeft() {
        $("#letteraserif").animate({
        left: 30
      }, 10000, function() {
         setTimeout(goRight, 100);
      });
    }

    setTimeout(goRight, 500);

    });



$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterbserif").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterbserif").animate({
        left: -300
      }, 10000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#lettercserif").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#lettercserif").animate({
        left: -300
      }, 10000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letteratopserif").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letteratopserif").animate({
        left: -300
      }, 10000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterbtopserif").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterbtopserif").animate({
        left: -300
      }, 10000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

});

$(document).ready(function(e) {
    var width = $(document).width();

    function goLeft() {
        $("#letterbarchcurve").animate({
        left: width
      }, 30000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goRight() {
        $("#letterbarchcurve").animate({
        left: -300
      }, 30000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 200);

});

$(document).ready(function(e) {
    var width = $(document).width();

    function goLeft() {
        $("#letterc5").animate({
        left: width
      }, 50000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goRight() {
        $("#letterc6").animate({
        left: -300
      }, 50000, function() {
         setTimeout(goRight, 500);
      });
    }

    setTimeout(goRight, 500);

});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#lettercserif2").animate({
        left: width
      }, 60000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#lettercserif2").animate({
        left: -300
      }, 60000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

});
