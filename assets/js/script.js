$(document).ready(function(){
	
	$('#download').click(function(e){

		$.generateFile({
			filename	: /*'export.txt'*/ 'getme.js',
			content		: $('textarea').val(),
			script		: 'download.php'
		});
		
		e.preventDefault();
	});
	/* no need this portion
	$('#downloadPage').click(function(e){

		$.generateFile({
			filename	: 'page.html',
			content		: $('html').html(),
			script		: 'download.php'
		});
		
		e.preventDefault();
	});*/
	
});