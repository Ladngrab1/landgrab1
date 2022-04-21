$(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true
    });
});
/*headerANIMATION*/
var header = $(".header");
var navbar = $(".navbar");
var logo_icon = $(".logo_icon");
var menu_list_link = $(".menu_list-link");
var scrollChange = 100;
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        header.addClass('active') & navbar.addClass('active') & logo_icon.addClass('active') & menu_list_link.addClass('active');
    } else {
        header.removeClass("active") & navbar.removeClass('active') & logo_icon.removeClass('active') & menu_list_link.removeClass('active');
    }
});
/*headerANIMATION*/