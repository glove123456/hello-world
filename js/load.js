$(function(){
	Event();
});
function Event(){
	$("#ld").animate({width:'342px'},3000,function(){
		window.location.href="./html/main.html"; 
	});
}