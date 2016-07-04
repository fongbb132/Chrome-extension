// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// var currentLink;


// function findLinks(){	
// 	var isSet = false;

// 	var doc = document.documentElement;
// 	var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
// 	var top = (window.pageYOffset || doc.scrollLeft) - (doc.clientTop || 0);
	
// 	$("a").each(function(){
// 		var link = $(this);

// 		if(!isSet && link.offset().top > top && link.offset().left > left){
// 			link.css('border',  'thin dashed grey');	
// 			isSet = true;
// 		}

// 	});
	
// 	alert('fuck the world');
// }

// findLinks();

// chrome.commands.onCommand.addListener(function(command) {

// 	if (command == 'test') {
// 		for(var i = 0; i < 100; i++){
// 			console.log(i);
// 		}
// 		findLinks();
// 	}

// });

