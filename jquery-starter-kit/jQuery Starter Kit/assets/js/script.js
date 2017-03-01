$('button').click(function() {
    $('.announcement').toggle();
});

$('.red-circle').mouseenter(function() {
     $('.blue-square').fadeOut();
});

$('.red-circle').mouseleave(function() {
     $('.blue-square').fadeIn();
});

  $('.red-circle').hover(function() {
     $('.blue-square').fadeOut();
  }, function() {
     $('.blue-square').fadeIn();
  });

  $('.red-circle').mouseenter(function() {
     $('.blue-square').fadeOut();
});

$('.red-circle').mouseleave(function() {
     $('.blue-square').fadeIn();
});

$(window).scroll(function() {
   alert('You just scrolled!');
});

$('.go').click(function() {
  $('p').toggle();
});

$('#input').keypress(function(e) {
    $('#output').append(String.fromCharCode(e.which));
		// the keycode for 'a' is 97
		if ( e.which == 97 ) {
			$('#output').addClass('special');
		}
});

$('#on').click(function(e) {
    $('#square').addClass('rounded');
});

$('#off').click(function(e) {
    $('#square').removeClass('rounded');
});