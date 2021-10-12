
$(document).ready(function () {
    $('tr[data-href]').on("click", function() {
        document.location = $(this).data('href');
    });
    $(".clear").click(function () {
        $('.input input').val("");
    });
});