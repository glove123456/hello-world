$(function(){
    intn();
	bindEvent();
});
function bindEvent(){
    $(window).resize(function() {
        var webH = $(window).height();
        var divH = $('#bg').height();
        var mul = webH/divH;
        $('body').css("zoom",''+mul+'');
    });
    var t=false, x, y ,lastX;
    $('#bgpart').mouseup(function(){
        t=false;
    }).mousedown (function(e){
        x=e.offsetX;
        y=e.offsetY;
        t=true;
        lastX = 0;
    }).mousemove(function(e){
        if(t)
        {   
            if (lastX > e.pageX) {
                $("#bg").scrollLeft($("#bg").scrollLeft() + 8);
            } else if (lastX < e.pageX) {
                $("#bg").scrollLeft($("#bg").scrollLeft() - 8);
            }
            lastX = e.pageX;
        }
    })
    $('.icon').data('flat',1);
    $('.icon').click(function(){
        if ( $(this).data('flat') ) {
            $(this).css('-webkit-animation-play-state','running');
            $('.icon').data('flat',0);
        }else{
            $(this).css('-webkit-animation-play-state','paused');
            $('.icon').data('flat',1);
        }
    });
    $('#btn div').click(function(){
        $('#tab').css('background-image','url(../img/animal/tab'+$(this).attr('id').substring(1,2)+'.png)');
        
    });
    $('#back').click(function(){
        window.location.href = './../html/animal.html'
    });
}
function intn(){
    var webH = $(window).height();
    var divH = $('#bg').height();
    var mul = webH/divH;
    $('body').css("zoom",''+mul+'');
}