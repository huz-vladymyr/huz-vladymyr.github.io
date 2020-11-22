var btn = document.getElementById('btn');
btn.onclick = function (e) {
	e.preventDefault();
	var text = document.querySelector('p.intro');
	text.classList.add('yellow');

	}
	
	$ (function () {
	$ (window).scroll(function() {
	    $('#expectation .section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
	$ (window).scroll(function() {
	    $('#forms .section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});
})

