$(function(){
	Event();
});
function Event(){
	$('#bgpart div').click(function(){
		console.log($(this).attr('id'));
		window.location.href = './animal-3.html'
	});
	
}