$(document).ready(function () {
    var p = $('li.page-item a:nth-child(n)');
    console.log(p);

    $('a[href="#1"]').click(function(){
        $('#2,#3').removeClass('active');
        $('#1').addClass('active');
        $('a[href="#2"],a[href="#3"]').removeClass('active_page');

        $('li:first-child').addClass('disabled');
        $('li:nth-child(2)').addClass('disabled');
        $('li:nth-child(6)').removeClass('disabled');
        $('li:last-child').removeClass('disabled');

        $(this).toggleClass('active_page');
    });

    $('a[href="#2"]').click(function(){
        $('#1,#3').removeClass('active');
        $('#2').addClass('active');
        $('a[href="#1"],a[href="#3"]').removeClass('active_page');

        $('li:first-child').removeClass('disabled');
        $('li:nth-child(2)').removeClass('disabled');
        $('li:nth-child(6)').removeClass('disabled');
        $('li:last-child').removeClass('disabled');

        $(this).toggleClass('active_page');
    });

    $('a[href="#3"]').click(function(){
        $('#1,#2').removeClass('active');
        $('#3').addClass('active');
        $('a[href="#1"],a[href="#2"]').removeClass('active_page');

        $('li:first-child').removeClass('disabled');
        $('li:nth-child(2)').removeClass('disabled');
        $('li:nth-child(6)').addClass('disabled');
        $('li:last-child').addClass('disabled');

        $(this).toggleClass('active_page');
    });

    $(".page-link.last-page").click(function () {
        $('#1,#2').removeClass('active');
        $('#3').addClass('active');
        $('a[href="#1"],a[href="#2"]').removeClass('active_page');
        $('a[href="#3"]').addClass('active_page');

        $('li:first-child').removeClass('disabled');
        $('li:nth-child(2)').removeClass('disabled');
        $('li:nth-child(6)').addClass('disabled');
        $('li:last-child').addClass('disabled');
    });
    $(".page-link.first-page").click(function () {
        $('#1').addClass('active');
        $('#2,#3').removeClass('active');
        $('a[href="#1"]').addClass('active_page');
        $('a[href="#2"],a[href="#3"]').removeClass('active_page');

        $('li:first-child').addClass('disabled');
        $('li:nth-child(2)').addClass('disabled');
        $('li:nth-child(6)').removeClass('disabled');
        $('li:last-child').removeClass('disabled');
    });
/*
    $(".page-link.next").click(function () {
        $('li.page-item a:nth-child(n+1)').addClass('active_page');
        $('li.page-item a:nth-child(n)').removeClass('active_page');
    });
    */
});