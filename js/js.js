$(function () {
    jQuery('.bxslider').bxSlider();
    $('.sandvich').click(function () {
        $('.modal').addClass('active');
    });
    $('.modal-close-btn').click(function () {
        $('.modal').removeClass('active');
    });
    $(window).on("load",function(){
        $(".content").mCustomScrollbar({
            axis:"y"
        });
    });
});