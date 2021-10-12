$(document).ready(function () {
    $('a[href="#1"]').click(function(){
        $('#2,#3,#4,#5').removeClass('active');
        $('#1').addClass('active');
        $('a[href="#2"],a[href="#3"],a[href="#4"],a[href="#5"]').removeClass('active_page');
        $(this).toggleClass('active_page');
    });

    $('a[href="#2"]').click(function(){
        $('#1,#3,#4,#5').removeClass('active');
        $('#2').addClass('active');
        $('a[href="#1"],a[href="#3"],a[href="#4"],a[href="#5"]').removeClass('active_page');
        $(this).toggleClass('active_page');
    });

    $('a[href="#3"]').click(function(){
        $('#1,#2,#4,#5').removeClass('active');
        $('#3').addClass('active');
        $('a[href="#1"],a[href="#2"],a[href="#4"],a[href="#5"]').removeClass('active_page');
        $(this).toggleClass('active_page');
    });

    $('a[href="#4"]').click(function(){
        $('#1,#2,#3,#5').removeClass('active');
        $('#4').addClass('active');
        $('a[href="#1"],a[href="#2"],a[href="#3"],a[href="#5"]').removeClass('active_page');
        $(this).toggleClass('active_page');
    });

    $('a[href="#5"]').click(function(){
        $('#1,#2,#3,#4').removeClass('active');
        $('#5').addClass('active');
        $('a[href="#1"],a[href="#2"],a[href="#3"],a[href="#4"]').removeClass('active_page');
        $(this).toggleClass('active_page');
    });

    $(".page-link.last-page").click(function () {
        $('#1,#2,#3,#4').removeClass('active');
        $('#5').addClass('active');
        $('a[href="#1"],a[href="#2"],a[href="#3"],a[href="#4"]').removeClass('active_page');
        $('a[href="#5"]').addClass('active_page');
    });
});

