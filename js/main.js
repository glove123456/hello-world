$(function(){
	Event();
});
function Event(){
	$('#set').click(function(){
        $('#hover').fadeIn();
    });
	$('#setbtn').click(function(){
        $('#hover').fadeOut();
    });
    $('.btn').click(function(){
    	window.location.href='./'+$(this).parent().attr('id')+'.html';
    	console.log($(this).parent().attr('id'));
    });
}