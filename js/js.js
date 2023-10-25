function scrollToAnchor() {
  var url = window.location.href;
  var anchorIndex = url.indexOf("#");
  if (anchorIndex !== -1) {
    var anchorName = url.slice(anchorIndex + 1);
    var anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }
}

window.onload = function() {
  setTimeout(scrollToAnchor, 0);
};


let lang = localStorage.getItem('lang');

if( lang == null){
	lang = 'ua';
}

showLang();

function showLang(){
	if( lang == 'ua' ){
		$(".ua").addClass('active');
		$(".ru").removeClass('active');
		$(".ua-js").show();
		$(".ru-js").hide();
		$(".en-js").hide(); // Hide English elements
	}
	if( lang == 'ru' ){
		$(".ru").addClass('active');
		$(".ua").removeClass('active');
		$(".ru-js").show();
		$(".ua-js").hide();
		$(".en-js").hide(); // Hide English elements
	}
	if( lang == 'en' ){ // Add condition for English language
		$(".en").addClass('active');
		$(".ua").removeClass('active');
		$(".ru-js").hide();
		$(".ua-js").hide();
		$(".en-js").show(); // Show English elements
	}
}

$(document).ready(function(){
	$(".ua").on("click", function (e) {
		$(".ua").addClass('active');
		$(".ru").removeClass('active');
		$(".en").removeClass('active'); // Remove active class from English button
		
		localStorage.setItem('lang', 'ua');
		lang = 'ua';
		
		showLang();
	});
	
	$(".ru").on("click", function (e) {
		$(".ru").addClass('active');
		$(".ua").removeClass('active');
		$(".en").removeClass('active'); // Remove active class from English button
		
		localStorage.setItem('lang', 'ru');
		lang = 'ru';
		
		showLang();
	});

	$(".en").on("click", function (e) { // Add event listener for English button
		$(".en").addClass('active');
		$(".ua").removeClass('active');
		$(".ru").removeClass('active');
		
		localStorage.setItem('lang', 'en');
		lang = 'en';
		
		showLang();
	});

	$(".goods .item .btn").on("click", function (e) {
		$(this).parents('.item').find('.ingridient').toggle();
		
	});
});


