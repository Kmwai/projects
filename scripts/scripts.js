var colours = [
		'#548AEA',
		'#FF8F7B',
		'#CAE3FC',
		'#315E47',
		'#F8B494',
		'#B5D536',
		'#EDDA46',
		'#94877E',
		'#FBDBEB',
		'#912F65'
	];

	$(".title").hover(function(){
		$(this).css("background-color", colours[(Math.random() * colours.length) | 0])
	}, function(){
		$(this).css("background-color", "")
	});
