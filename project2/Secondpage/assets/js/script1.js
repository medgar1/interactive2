function addSource(elem, path) {
  $('<error.mp3>').attr('src', path).appendTo(elem);
}


$('#letterAserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5000, function () {
  $(this).hide();
});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#lettera1").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#lettera2").animate({
        left: -300
      }, 10000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

});

$('#lettera1').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5000, function () {
  $(this).hide();
});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#lettera1").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 1000);
      });
    }


    function goLeft() {
        $("#lettera1").animate({
        left: -300
      }, 10000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

});
$('#letterb1').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5000, function () {
  $(this).hide();
});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterb1").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterb1").animate({
        left: -300
      }, 10000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

});

$('#letterbserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5000, function () {
  $(this).hide();
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
        $("#letterbarchcurve").animate({
        left: -300
      }, 10000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

});

$("#letterbserif").mouseenter(function(){
     var audio = $('<audio />', {
       autoPlay : 'autoplay'
     });
     addSource(audio, 'error.mp3/'+Math.ceil(Math.random() * 5)+'error.mp3');
     addSource(audio, 'audio/'+Math.ceil(Math.random() * 5)+'.ogg');
     audio.appendTo('body');     
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

$('#letterJserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5000, function () {
  $(this).hide();
});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterJserif").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterJserif").animate({
        left: -300
      }, 10000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

});

$('#letterJ1').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5000, function () {
  $(this).hide();
});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterJ1").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterJ1").animate({
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
        $("#letterNserif").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterNserif").animate({
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
        $("#letterN1").animate({
        left: width
      }, 30000, function() {
         setTimeout(goLeft, 1000);
      });
    }

    function goRight() {
        $("#LetterN2").animate({
        left: -300
      }, 30000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 200);

});

$(document).ready(function(){
    $("#letterNarch").click(function(){

    $("#letteretopserif").toggle();

    });

    });

$('#letterb1').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5000, function () {
  $(this).hide();
});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterb1").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterb1").animate({
        left: -300
      }, 10000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

});

$('#letterbserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5000, function () {
  $(this).hide();
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
        $("#letterbarchcurve").animate({
        left: -300
      }, 10000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

});

$("#letterbserif").mouseenter(function(){
     var audio = $('<audioNarchNarchNarchNarchNarchNarchNarchNarch />', {
       autoPlay : 'autoplay'
     });
     addSource(audio, 'error.mp3/'+Math.ceil(Math.random() * 5)+'error.mp3');
     addSource(audio, 'audio/'+Math.ceil(Math.random() * 5)+'.ogg');
     audio.appendTo('body');     
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
        $("#letterktopserif").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 3000);
      });
    }
    function goLeft() {
        $("#letterktopserif").animate({
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
        $("#letterkarchcurve").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 3000);
      });
    }
    function goLeft() {
        $("#letterkarchcurve").animate({
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
        $("#letterkarch").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterkarch").animate({
        left: -300
      }, 10000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

});

var mouseX = 0,
    mouseY = 0;

$(document).mousemove(function(e){
   mouseX = e.pageX;
   mouseY = e.pageY; 
});

var follower = $("#letterb1");
var xp = 40, yp = 40;
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 12 -1;
    yp += (mouseY - yp) / 12 -1;
    follower.css({left:xp, top:yp});

}, 30); 



$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterkarchcurvetop").animate({
        left: width
      }, 60000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterkarchcurvetop").animate({
        left: -300
      }, 60000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterk2").animate({
        left: width
      }, 60000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterkserif2").animate({
        left: -300
      }, 60000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);


  });

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterkserif2").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterK1").animate({
        left: -300
      }, 10000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

});


$('#letterk1').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5000, function () {
  $(this).hide();
});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterK1").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterK1").animate({
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
        $("#letterK").animate({
        left: width
      }, 60000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterkarchcurvetop").animate({
        left: -300
      }, 60000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterKserif2").animate({
        left: width
      }, 60000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterKserif2").animate({
        left: -300
      }, 60000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

    });


$('#letterLserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5000, function () {
  $(this).hide();
});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterLserif").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterLserif").animate({
        left: -300
      }, 10000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

});

$('#letterL1').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5000, function () {
  $(this).hide();
});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterL1").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterL1").animate({
        left: -300
      }, 10000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500)

});


$('#letterKserif2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5000, function () {
  $(this).hide();
});

$('#letterK3').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5100, function () {
  $(this).hide();
});

$('#letterK4').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5200, function () {
  $(this).hide();
});

$('#letterK5').delay(100).animate({
    width: 1,
    height: 1,
    opacity: 14
}, 4000, function () {
  $(this).hide();
});

$('#letterkarchcurvetop').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5300, function () {
  $(this).hide();
});
$('#letterk1').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5400, function () {
  $(this).hide();
});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterK1").animate({
        left: width
      }, 1000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterK1").animate({
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
        $("#letterK").animate({
        left: width
      }, 6000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterkarchcurvetop").animate({
        left: -300
      }, 60000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterKserif2").animate({
        left: width
      }, 60000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterKserif2").animate({
        left: -300
      }, 60000, function() {
         setTimeout(goRight, 200);
      });
    }

    setTimeout(goRight, 500);

    });


$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterktopserif").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 3000);
      });
    }
    function goLeft() {
        $("#letterktopserif").animate({
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
        $("#letterkarchcurve").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 3000);
      });
    }
    function goLeft() {
        $("#letterkarchcurve").animate({
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
        $("#letterkarch").animate({
        left: width
      }, 10000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterkarch").animate({
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
        $("#letterk").animate({
        left: width
      }, 60000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goLeft() {
        $("#letterkarchcurvetop").animate({
        left: -300
      }, 60000, function() {
         setTimeout(goRight, 300);
      });
    }

    setTimeout(goRight, 600);

});

$('#letterIserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 4000, function () {
  $(this).hide();
});

$('#letterItopserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 4470, function () {
  $(this).hide();
});

$('#letterI1').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 4480, function () {
  $(this).hide();
});

$('#letterI2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 4490, function () {
  $(this).hide();
});

$('#letterI3').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5000, function () {
  $(this).hide();
});


$('#letterLserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5000, function () {
  $(this).hide();
});

$('#letterKserif2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5000, function () {
  $(this).hide();
});

$('#letterK3').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5000, function () {
  $(this).hide();
});

$('#letterK4').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 110, function () {
  $(this).hide();
});

$('#letterMendseriftop').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 100, function (goLeft) {
  $(this).hide();
});

$('#letterMendserifbottom').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 300, function (goLeft) {
  $(this).hide();
});

$('#letterMendserifbottomright').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 310, function (goLeft) {
  $(this).hide();
});

$('#letterMendserifcurve').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 330, function (goLeft) {
  $(this).hide();
});

$('#letterMendserifcurvetop').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 330, function (goleft) {
  $(this).hide();
});

$('#letterMarchcurve').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 340, function (goleft) {
  $(this).hide();
});

$('#letterMarch').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 370, function (goleft) {
  $(this).hide();
});

$('#letterMarch2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 380, function (goleft) {
  $(this).hide();
});

$('#letterMarch3').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 400, function (goleft) {
  $(this).hide();
});

$('#letterMarch4').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 425, function (goleft) {
  $(this).hide();
});

$('#letterM8').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 425, function (goleft) {
  $(this).hide();
});

$('#letterMarchcurvetop').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 425, function (goleft) {
  $(this).hide();
});

$('#letterMarchcurvebottom').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 425, function (goleft) {
  $(this).hide();
});

$('#letterMarch5').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 450, function (goleft) {
  $(this).hide();
});

$('#letterMarch6').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 475, function (goleft) {
  $(this).hide();
});

$('#letterMarch7').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 500, function (goleft) {
  $(this).hide();
});

$('#letterM2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 200, function (goleft) {
  $(this).hide();
});

$('#letterM1').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 400, function (goleft) {
  $(this).hide();
});


$('#letterMserif').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$(document).ready(function(e) {
    var width = $(document).width();

    function goLeft() {
        $("#letterMserif").animate({
        left: width
      }, 1000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goRight() {
        $("#letterMserif").animate({
        left: -300
      }, 1000, function() {
         setTimeout(goRight,0);
      });
    }

    setTimeout(goRight, 0);

});

$('#letterN2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 330, function (goleft) {
  $(this).hide();
});

$('#letterN1').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 340, function (goleft) {
  $(this).hide();
});

$('#letterNarch').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 370, function (goleft) {
  $(this).hide();
});

$('#letterNarch2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 380, function (goleft) {
  $(this).hide();
});

$('#letterNarch3').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 400, function (goleft) {
  $(this).hide();
});

$('#letterNarch4').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 425, function (goleft) {
  $(this).hide();
});

$('#letterNarch5').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 450, function (goleft) {
  $(this).hide();
});

$('#letterNarch6').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 475, function (goleft) {
  $(this).hide();
});

$('#letterNserif').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$(document).ready(function(e) {
    var width = $(document).width();

    function goLeft() {
        $("#letterNserif").animate({
        left: width
      }, 1000, function() {
         setTimeout(goLeft, 1000);
      });
    }
    function goRight() {
        $("#letterNserif").animate({
        left: -300
      }, 1000, function() {
         setTimeout(goRight,0);
      });
    }

    setTimeout(goRight, 0);

});


$('#letterOserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 330, function (goleft) {
  $(this).hide();
});

$('#letterO1').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 340, function (goleft) {
  $(this).hide();
});

$('#letterO2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 370, function (goleft) {
  $(this).hide();
});

$('#letterOarch').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 380, function (goleft) {
  $(this).hide();
});

$('#letterOarch2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 400, function (goleft) {
  $(this).hide();
});

$('#letterOarch3').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 425, function (goleft) {
  $(this).hide();
});

$('#letterOarch5').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 450, function (goleft) {
  $(this).hide();
});

$('#letterOarch6').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 475, function (goleft) {
  $(this).hide();
});

$('#letterOserif').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterOarch6").animate({
        left: -300
      }, 1000, function() {
         setTimeout(goRight,0);
      });
    }

    setTimeout(goRight, 550);

});

$('#letterb1').mouseenter(function (e) {
    var data = $(this).data('value');
    if(data){
        $('<div />', {
                    'class' : 'tip',
                    text : $(this).data('value'),
                    css : {
                        position: 'fixed',
                        top: e.pageY-230,
                        left: e.pageX+15
                    }
                }).appendTo(this);
}
})
.mouseleave(function () {                                              
   $('.tip', this).remove();                  
})
.mousemove(function (e) {      
    $('.tip', this).css({
        top: e.pageY-230,
        left: e.pageX+15
    });                 
})



$('#letterPserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 330, function (goleft) {
  $(this).hide();
});

$('#letterP1').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 340, function (goleft) {
  $(this).hide();
});

$('#letterP2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 370, function (goleft) {
  $(this).hide();
});

$('#letterPtopserof').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 380, function (goleft) {
  $(this).hide();
});

$('#letterP3').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 400, function (goleft) {
  $(this).hide();
});

$('#letterP4').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 425, function (goleft) {
  $(this).hide();
});

$('#letterPbottomserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 450, function (goleft) {
  $(this).hide();
});


$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterQarch6").animate({
        left: -300
      }, 1000, function() {
         setTimeout(goRight,0);
      });
    }

    setTimeout(goRight, 550);

});



$('#letterQserif').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$('#letterQ1').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$('#letterQ2').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$('#letterQarch').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$('#letterQarch2').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$('#letterQarch3').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$('#letterQarch4').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$('#letterQarch5').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$('#letterQarch6').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$('#letterQarch7').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$('#letterQarch8').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$('#letterQarch9').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});





$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterQarch").animate({
        left: -300
      }, 1000, function() {
         setTimeout(goRight,0);
      });
    }

    setTimeout(goRight, 550);

});



$('#letterrserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 330, function (goleft) {
  $(this).hide();
});

$('#letterr1').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 825, function (goleft) {
  $(this).hide();
});

$('#letterr2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 850, function (goleft) {
  $(this).hide();
});

$('#letterr3').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 875, function (goleft) {
  $(this).hide();
});

$('#letterrserif2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 900, function (goleft) {
  $(this).hide();
});

$('#letterLserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 5000, function () {
  $(this).hide();
});


$('#letterr4').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 925, function (goleft) {
  $(this).hide();
});

$('#letterr5').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 950, function (goleft) {
  $(this).hide();
});

$('#letterrendseriftop').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 975, function (goleft) {
  $(this).hide();
});

$('#letterrendserifbottom').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 1000, function (goleft) {
  $(this).hide();
});


$('#letterrStopserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 925, function (goleft) {
  $(this).hide();
});

$('#letterSserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 950, function (goleft) {
  $(this).hide();
});

$('#letterSserif2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 950, function (goleft) {
  $(this).hide();
});

$('#letterSendseriftop').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 1020, function (goleft) {
  $(this).hide();
});

$('#letterSendserifbottom').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 1020, function (goleft) {
  $(this).hide();
});

$('#letterS').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 1020, function (goleft) {
  $(this).hide();
});

$('#letterS1').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 975, function (goleft) {
  $(this).hide();
});

$('#letterS2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 1000, function (goleft) {
  $(this).hide();
});

$('#letterS3').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 975, function (goleft) {
  $(this).hide();
});

$('#letterS4').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 975, function (goleft) {
  $(this).hide();
});

$('#letterS5').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 1000, function (goleft) {
  $(this).hide();
});

$('#letterS6').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 975, function (goleft) {
  $(this).hide();
});

$('#letterS7').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 1000, function (goleft) {
  $(this).hide();
});


$('#letterTserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 790, function (goleft) {
  $(this).hide();
});

$('#letterT1').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 780, function (goleft) {
  $(this).hide();
});

$('#letterT2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 775, function (goleft) {
  $(this).hide();
});

$('#letterT3').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 750, function (goleft) {
  $(this).hide();
});

$('#letterTserif2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 740, function (goleft) {
  $(this).hide();
});

$('#letterT4').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 730, function (goleft) {
  $(this).hide();
});

$('#letterT5').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 720, function (goleft) {
  $(this).hide();
});

$('#letterT6').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 710, function (goleft) {
  $(this).hide();
});

$('#letterT75').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 710, function (goleft) {
  $(this).hide();
});

$('#letterTbottomserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 710, function (goleft) {
  $(this).hide();
});

$('#letterUserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 330, function (goleft) {
  $(this).hide();
});

$('#letterU2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 340, function (goleft) {
  $(this).hide();
});

$('#letterU1').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 340, function (goleft) {
  $(this).hide();
});

$('#letterUarch').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 370, function (goleft) {
  $(this).hide();
});

$('#letterUarch2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 380, function (goleft) {
  $(this).hide();
});

$('#letterUarch3').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 400, function (goleft) {
  $(this).hide();
});

$('#letterUarch4').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 425, function (goleft) {
  $(this).hide();
});

$('#letterUarch5').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 450, function (goleft) {
  $(this).hide();
});

$('#letterUarch6').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 475, function (goleft) {
  $(this).hide();
});

$('#letterUserif').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterUarch7").animate({
        left: -300
      }, 1000, function() {
         setTimeout(goRight,0);
      });
    }

    setTimeout(goRight, 550);

});

$('#letterUVerif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 330, function (goleft) {
  $(this).hide();
});

$('#letterV2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 340, function (goleft) {
  $(this).hide();
});

$('#letterVarch').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 370, function (goleft) {
  $(this).hide();
});

$('#letterVarch2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 380, function (goleft) {
  $(this).hide();
});

$('#letterVarch3').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 400, function (goleft) {
  $(this).hide();
});

$('#letterVarch4').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 425, function (goleft) {
  $(this).hide();
});

$('#letterVarch5').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 450, function (goleft) {
  $(this).hide();
});

$('#letterVarch6').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 475, function (goleft) {
  $(this).hide();
});

$('#letterVserif').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$(document).ready(function(e) {
    var width = $(document).width();

    function goRight() {
        $("#letterV7").animate({
        left: -300
      }, 1000, function() {
         setTimeout(goRight,0);
      });
    }

    setTimeout(goRight, 550);

});

$('#letterWserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 330, function (goleft) {
  $(this).hide();
});

$('#letterW1').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 340, function (goleft) {
  $(this).hide();
});

$('#letterW2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 340, function (goleft) {
  $(this).hide();
});

$('#letterW3').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 340, function (goleft) {
  $(this).hide();
});

$('#letterW4').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 340, function (goleft) {
  $(this).hide();
});

$('#letterW5').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 340, function (goleft) {
  $(this).hide();
});

$('#letterW6').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 340, function (goleft) {
  $(this).hide();
});

$('#letterW7').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 340, function (goleft) {
  $(this).hide();
});

$('#letterW8').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 340, function (goleft) {
  $(this).hide();
});

$('#letterWendseriftop').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 340, function (goleft) {
  $(this).hide();
});


$('#letterWendserifbottom').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 340, function (goleft) {
  $(this).hide();
});


$('#letterWendserifbottomright').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 340, function (goleft) {
  $(this).hide();
});

$('#letterWendseriftopright').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 340, function (goleft) {
  $(this).hide();
});

$('#letterWarchcurve').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 370, function (goleft) {
  $(this).hide();
});

$('#letterWarchcurvetop').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 380, function (goleft) {
  $(this).hide();
});

$('#letterWtopserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 400, function (goleft) {
  $(this).hide();
});

$('#letterXserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 330, function (goleft) {
  $(this).hide();
});


$('#letterX2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 370, function (goleft) {
  $(this).hide();
});

$('#letterXarch').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 380, function (goleft) {
  $(this).hide();
});

$('#letterXarch2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 400, function (goleft) {
  $(this).hide();
});

$('#letterXarch3').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 425, function (goleft) {
  $(this).hide();
});

$('#letterXarch4').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 450, function (goleft) {
  $(this).hide();
});

$('#letterXarch5').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 475, function (goleft) {
  $(this).hide();
});

$('#letterXarch6').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$('#letterXarch7').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 380, function (goleft) {
  $(this).hide();
});

$('#letterXarch8').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 400, function (goleft) {
  $(this).hide();
});

$('#letterXarch9').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 425, function (goleft) {
  $(this).hide();
});

$('#letterXrch10').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 450, function (goleft) {
  $(this).hide();
});

$('#letterXarch11').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 475, function (goleft) {
  $(this).hide();
});

$('#letterXarch12').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$('#letterXarch13').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 400, function (goleft) {
  $(this).hide();
});

$('#letterXarch14').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 425, function (goleft) {
  $(this).hide();
});

$('#letterXrch15').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 450, function (goleft) {
  $(this).hide();
});

$('#letterXarch16').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 475, function (goleft) {
  $(this).hide();
});

$('#letterXarch17').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$('#letterXarch18').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$('#letterYserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 330, function (goleft) {
  $(this).hide();
});


$('#letterY2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 370, function (goleft) {
  $(this).hide();
});

$('#letterYarch').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 380, function (goleft) {
  $(this).hide();
});

$('#letterYarch2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 400, function (goleft) {
  $(this).hide();
});

$('#letterYarch3').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 425, function (goleft) {
  $(this).hide();
});

$('#letterYarch4').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 450, function (goleft) {
  $(this).hide();
});

$('#letterYarch5').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 475, function (goleft) {
  $(this).hide();
});

$('#letterYarch6').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$('#letterYarch7').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 380, function (goleft) {
  $(this).hide();
});

$('#letterYarch8').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 400, function (goleft) {
  $(this).hide();
});

$('#letterYarch2').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 400, function (goleft) {
  $(this).hide();
});

$('#letterYendseriftop').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 425, function (goleft) {
  $(this).hide();
});

$('#letterYendseriftopright').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 450, function (goleft) {
  $(this).hide();
});

$('#letterYendserifbottomright').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 475, function (goleft) {
  $(this).hide();
});

$('#letterYarchcurve').delay(950).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 90, function () {
  $(this).hide();
});

$('#letterYarchcurvetop').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 380, function (goleft) {
  $(this).hide();
});

$('#letterYtopserif').delay(1000).animate({
    width: 1,
    height: 1,
    opacity: 0
}, 400, function (goleft) {
  $(this).hide();
});
