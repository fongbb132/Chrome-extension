// document.body.style.backgroundColor="grey";


function findLinks(){	
	var isSet = false;

	var doc = document.documentElement;
	var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
	var top = (window.pageYOffset || doc.scrollLeft) - (doc.clientTop || 0);
	
	$("a").each(function(){
		var link = $(this);

		if(!isSet && link.offset().top > top && link.offset().left > left){
			link.css('border',  'thin dashed grey');	
			isSet = true;
		}

	});
	
}



//z: 90		f: 70	b:66	enter:13
var map = {90: false, 70: false, 66: false, 13:false};
$(document).keydown(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = true;
        if (map[90] && map[13]) {
            findLinks();
        }
    }
}).keyup(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = false;
    }
});



