var swiper = new Swiper('.nav-slider-container.swiper-container', {
    loop: true,
    autoplay: {
        delay: 2000,
    },
    slidesPerView: 'auto',
    breakpoints: {
        320: {
            spaceBetween: 5,
        },
        768: {
            spaceBetween: 10,
        },
        945: {
            spaceBetween: 20,
        }
    },
    centeredSlides: true,
    navigation: {
        nextEl: '.nav-slider-container .swiper-button-next',
        prevEl: '.nav-slider-container .swiper-button-prev',
    },

})
var shop_swiper = new Swiper('.swiper-container.shop-swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

// let slide = document.querySelectorAll(".nav-slider-container .swiper-wrapper .swiper-slide");
$(document).ready(function () {
    var information_H_1 = $('#information-1').height();
    var information_H_2 = $('#information-2').height();

    document.onreadystatechange = function () {
        if (document.readyState == "complete") {
            if ( window.innerWidth > 767){
                if(information_H_1 < 258){
                    $('#about-shop-1 .about-shop-menu').addClass('no_visible');
                }
                else{
                    $('#about-shop-1 .about-shop-menu').removeClass('no_visible');
        
                };

                if(information_H_2 < 258){
                    $('#about-shop-2 .about-shop-menu').addClass('no_visible');
                }
                else{
                    $('#about-shop-2 .about-shop-menu').removeClass('no_visible');
        
                };
            }
            else if( window.innerWidth > 767){
                if(information_H_1 < 74){
                    $('#about-shop-1 .about-shop-menu').addClass('no_visible');
                }
                else{
                    $('#about-shop-1 .about-shop-menu').removeClass('no_visible');
        
                };

                if(information_H_2 < 74){
                    $('#about-shop-2 .about-shop-menu').addClass('no_visible');
                }
                else{
                    $('#about-shop-2 .about-shop-menu').removeClass('no_visible');
                };
            }
            if (window.innerWidth < 1753 && window.innerWidth > 767) {
                $(".nav-slider-container .swiper-wrapper .swiper-slide").width(window.innerWidth * 0.674);
                $(".nav-slider-container .swiper-wrapper .swiper-slide").height(window.innerWidth * 0.284);
                swiper.update();
            }
            else {
                $(".nav-slider-container .swiper-wrapper .swiper-slide").width("");
                $(".nav-slider-container .swiper-wrapper .swiper-slide").height("");
            }
            setTimeout(function () { swiper.update(); }, 300); 
        }
    };
    window.onresize = function () {
        if ( window.innerWidth > 767){
            if(information_H_1 < 258){
                $('#about-shop-1 .about-shop-menu').addClass('no_visible');
            }
            else{
                $('#about-shop-1 .about-shop-menu').removeClass('no_visible');
    
            }
            if(information_H_2 < 258){
                $('#about-shop-2 .about-shop-menu').addClass('no_visible');
            }
            else{
                $('#about-shop-2 .about-shop-menu').removeClass('no_visible');
    
            }
        }
        else {
            if(information_H_1 < 74){
                $('#about-shop-1 .about-shop-menu').addClass('no_visible');
            }
            else{
                $('#about-shop-1 .about-shop-menu').removeClass('no_visible');
    
            }
            if(information_H_2 < 74){
                $('#about-shop-2 .about-shop-menu').addClass('no_visible');
            }
            else{
                $('#about-shop-2 .about-shop-menu').removeClass('no_visible');
            }
        }
        if (window.innerWidth < 1753 && window.innerWidth > 767) {
            $(".nav-slider-container .swiper-wrapper .swiper-slide").width(window.innerWidth * 0.674);
            $(".nav-slider-container .swiper-wrapper .swiper-slide").height(window.innerWidth * 0.284);
            swiper.update();
        }
        else {
            $(".nav-slider-container .swiper-wrapper .swiper-slide").width("");
            $(".nav-slider-container .swiper-wrapper .swiper-slide").height("");
        }
        setTimeout(function () { swiper.update(); }, 300);  
    };
});