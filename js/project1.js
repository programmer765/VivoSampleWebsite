$(document).ready(function (){
    $('[data-trigger="dropdown"]').on('mouseenter', function() {

        var submenu = $(this).parent().find('.submenu');
        submenu.addClass('active');

        $('.profile').on('mouseleave', function() {
            submenu.removeClass('active');
        });
    });
    /*$('.products-item').on('click', function() {
        $(this).removeClass('active');
    });
    $('.products-item').on('click', function() {
        $(this).addClass('active');
    });*/
    $('.products-item').on('click', function(e) {
        $('.products-item').removeClass('active');
        $(e.currentTarget).addClass('active');
    });
});
