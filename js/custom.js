$(function () {



    //    mobile menu

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });



    /*=================================
           .......STICKY MENU JS........
    ===================================*/

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $(".menu_bar").removeClass("sticky");
        } else {
            $(".menu_bar").addClass("sticky");
        }
    });


    //    BACK TO TOP BUTTON


    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back_to_top').fadeIn(200)
        } else {
            $('.back_to_top').fadeOut(200)
        }
    });






    //    sidenav
    $(".navbar-toggler").click(function () {
        $(".navbar-collapse").toggleClass("nav_active");
    });
    //   banner slider js

    $('.slider_imgs').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
    });

    //    symbol slider
    $('.symbol_slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
    });

    //    mixitup js

    var mixer = mixitup('.mixitup_gallery');


    /*=================================
        .......PRELOADER JS.......
    ===================================*/

    $(window).on('load', function (event) {
        $('.preloader').delay(700).fadeOut(700);
    });

    /*=================================
           .......SMOOTH SCROLL........
    ===================================*/


    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 2000,
        speedAsDuration: true,
    });


    //    VENOBOX

    $('.venobox').venobox({
        spinner: 'cube-grid',
    });


});
