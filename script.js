// document.body.style.backgroundColor="grey";


var currentLink=null;
var linkList = [];
var index = 0;
var currentPos=-1;
function findLinks(){	
	var isSet = false;

	var doc = document.documentElement;
	var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
	var top = (window.pageYOffset || doc.scrollLeft) - (doc.clientTop || 0);
	
	var isSet = 0;
	$("a").each(function(){
		var link = $(this);
		if( isSet < 1 && link.offset().top > top && link.offset().left > left){
		
			currentLink = link;

			currentLink.addClass('current');
	  		currentPos = index;
			isSet++;

		}
		index++;
		linkList.push(link);
	});
	
    // currentLink.addClass('current');
}


//z: 90		f: 70	b:66	enter:13	i:73 	j:74	k:75 	l:76
var map = {90: false, 70: false, 66: false, 13:false, 73:false, 74: false, 75:false, 76:false};
$(document).keydown(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = true;
        if (map[90] && map[76]) {
        	if(currentPos<0){
        	    findLinks();
        	}else{
        		currentLink.removeClass('current');
        		currentLink = linkList[++currentPos];
        		currentLink.addClass('current');
        	}
        }
        else if(map[90] && map[74]){
        	if(currentPos<0){
        	    findLinks();
        	}else{
        		currentLink.removeClass('current');
        		currentLink = linkList[--currentPos];
        		currentLink.addClass('current');
        	}
        }
        else if(map[90] && map[13]){
        	window.location = currentLink.attr("href") ;
        }
    }
}).keyup(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = false;
    }
});



