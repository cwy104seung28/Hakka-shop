var shop_buy_swiper = new Swiper('.shop-buy-swiper', {
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
})
var shop_more_swiper = new Swiper('.more-commodity-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
var shop_swiper = new Swiper('.shop-swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 6,
    centeredSlides: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
$(document).ready(function () {
    $(".shop-add-cart").click(function () {
        $('.shop-commodity-added').addClass('block');
    });
    $(function() {
        // This button will increment the value
        $('.qtyplus').click(function(e) {
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          fieldName = $(this).attr('field');
          // Get its current value
          var currentVal = parseInt($('input[name=' + fieldName + ']').val());
          // If is not undefined
          if (!isNaN(currentVal)) {
            // Increment
            $('input[name=' + fieldName + ']').val(currentVal + 1);
          } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(currentVal);
          }
        });
        // This button will decrement the value till 0
        $(".qtyminus").click(function(e) {
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          fieldName = $(this).attr('field');
          // Get its current value
          var currentVal = parseInt($('input[name=' + fieldName + ']').val());
          // If it isn't undefined or its greater than 0
          if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name=' + fieldName + ']').val(currentVal - 1);
          } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(currentVal);
          }
        });
    });
    
});
