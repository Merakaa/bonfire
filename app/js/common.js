$(function() {

	// burger
	 
	document.querySelector('.burger-menu').onclick = function() {
		this.classList.toggle('active'); 
	}
	 
	$(".burger-menu").click(function(){
		$(".mobile-menu").fadeToggle();
	})
	 
});
