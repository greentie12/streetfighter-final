

$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.master').hide();
		$('.ryu-ready').show();
	})



	.mouseleave(function() {
		$('.master').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.master').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1062px'},
			500,
			function(){
				$('.hadouken').hide();
				$('.hadouken').css('left', '572px');
			})
	})
	.mouseup(function(){
		$('.master').hide();
		$('.ryu-ready').show();
	})



});



$(document).keydown(function(e) {
    if (e.keyCode == 88) {
    	playTheme();
      $('.master').hide();
      $('.ryu-cool').show();
    }
  }).keyup(function(e) {
    if (e.keyCode == 88) {	
      $('.master').hide();
      $('.ryu-ready').show();
      $('#theme-sound')[0].pause();
    }
  });
	

function playTheme() {
	$('#theme-sound')[0].volume =0.5;
	$('#theme-sound')[0].play();
}

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
} 


