// document.body.style.backgroundColor="grey";


function findLinks(){	
	var isSet = false;

	var doc = document.documentElement;
	var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
	var top = (window.pageYOffset || doc.scrollLeft) - (doc.clientTop||0);
	
	$("a").each(function(){
		var link = $(this);

		if(!isSet && link.offset().top > top && link.offset().left > left){
			link.css('border',  'thin dashed grey');	
			isSet = true;
		}

	})

}

findLinks();