
//set height of divs to viewport
$(document).ready(function() {
  $('.block').css('min-height', $(window).innerHeight());
});

//scroll using links
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 600, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});


//navigate up and down using arrow keys
function nav(block){	

	var target = block,
	    $target = $(target);
	    
 	$('html, body').stop().animate({
	    'scrollTop': $target.offset().top
	    }, 600, 'swing', function () {
	        window.location.hash = target;
	    });	
	}

//get current div id from URL
function getHash(){
	var hashArr = location.hash;
	
	return(hashArr);
	}

//return next div to move to
function nextMove(current, move){
	var elements = new Array( "#home", "#about", "#roles", "#perks");
	currentIndex = jQuery.inArray( current, elements );
	return(elements[currentIndex + move]);
	}

//identify arrow key action
$(document).keydown(function(e) {
    switch(e.which) {

        case 38: // up
        	currentBlock = getHash();
        	block = nextMove(currentBlock,-1);
        	nav(block);
        break;

        case 40: // down
        	currentBlock = getHash();
        	block = nextMove(currentBlock,+1);
        	nav(block);
        break;   
    }    
});