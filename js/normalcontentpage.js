var more_picture_swiper = new Swiper('.more-picture-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 5,
    centeredSlides: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
var more_picture_swiper = new Swiper('.more-picture-swiper-lightbox', {
    slidesPerView: 'auto',
    spaceBetween: 5,
    centeredSlides: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
var shop_swiper = new Swiper('.shop-swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 6,
    centeredSlides: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'disableScrolling': true,
})

$(document).ready(function () {
    //var first_swiper = $(".swiper-wrapper div:first-child");
    //console.log(first_swiper);
    $(".more-picture-swiper-lightbox.swiper-container .shop-content-img").click(function () {
        if($(".more-picture-swiper-lightbox.swiper-container .shop-content-img").hasClass("outline_active")){
            $(".more-picture-swiper-lightbox.swiper-container .shop-content-img").removeClass("outline_active");
        }
        $(this).toggleClass("outline_active");

        
    });
});
$(document).ready(function () {
    //var first_swiper = $(".swiper-wrapper div:first-child");
    //console.log(first_swiper);

    document.onreadystatechange = function () {
        var first_preview = $(".more-picture-swiper.swiper-container .swiper-slide-active .shop-content-img img").attr("src");
        console.log(first_preview);
        $(".more-picture-preview img").attr("src", first_preview);
            $(".more-picture-swiper.swiper-container .shop-content-img").click(function () {
            var preview_picture = $(this.getElementsByTagName("img")).attr("src");//要點選的圖片
    
            //利用getElementsByTagName取得this(被點選物件)內的子元素"img"
    
            if($(".more-picture-swiper.swiper-container .shop-content-img").hasClass("outline_active")){
                $(".more-picture-swiper.swiper-container .shop-content-img").removeClass("outline_active");
            }
            $(this).toggleClass("outline_active");
            if($(this).hasClass("outline_active")){
                $(".more-picture-preview img").attr("src",preview_picture);
            }
            
        });
    };
    window.onresize = function () {
        var first_preview = $(".more-picture-swiper.swiper-container .swiper-slide-active .shop-content-img img").attr("src");
        console.log(first_preview);
        $(".more-picture-preview img").attr("src", first_preview);
            $(".more-picture-swiper.swiper-container .shop-content-img").click(function () {
            var preview_picture = $(this.getElementsByTagName("img")).attr("src");//要點選的圖片
    
            //利用getElementsByTagName取得this(被點選物件)內的子元素"img"
    
            if($(".more-picture-swiper.swiper-container .shop-content-img").hasClass("outline_active")){
                $(".more-picture-swiper.swiper-container .shop-content-img").removeClass("outline_active");
            }
            $(this).toggleClass("outline_active");
            if($(this).hasClass("outline_active")){
                $(".more-picture-preview img").attr("src",preview_picture);
            }
            
        });
    };

    
});

