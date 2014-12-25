var ryu_throw = 0;

$(document).ready(function(){
	$(".ryu").on('mouseenter', function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	});

	$(this).on('mouseleave', function() {
      	$(".ryu-ready").hide();
      	$(".ryu-still").show();
		
  	});

  	$(this).on('mousedown', function(){
      ryu_throw = 1;
  		playHadouken ();
  		$(".ryu-ready").hide();
  		$(".ryu-throwing").show();
  		$('.hadouken').show();
  		$('.hadouken').finish().show().animate({'left': '1006px'},500,
  		  function() {
    		$(this).hide();
   		    $(this).css('left', '503px');
 		 }
	);
  	});

  	$(this).on('mouseup', function(){
      ryu_throw = 0;
  		$(".ryu-throwing").hide();
  		$('.hadouken').hide();
  		$(".ryu-ready").show();
  	});

  	$(document).on('keydown', function(event){
  		if(event.keyCode === 88 && ryu_throw = 0){
  			$(".ryu-ready").hide();
  			$(".ryu-cool").show();
  		}


  	});		

  	$(document).on('keyup', function(event){
      if(ryu_throw = 1){
  			$(".ryu-cool").hide();
  			$(".ryu-ready").show();
       }
  	});		



});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

