$(document).ready(function () {
    
    $(".password-change-btn").click(function() {
        $('.change-section').addClass('active');
    })

    $("#address-check-1").click(function() {
        if($(this).prop("checked")) {
            $("#address-check-2").each(function() {
              $(this).prop("checked", false);
          });
          $("#address-check-3").each(function() {
            $(this).prop("checked", false);
        });
        }           
     });
     $("#address-check-2").click(function() {
        if($(this).prop("checked")) {
            $("#address-check-1").each(function() {
              $(this).prop("checked", false);
          });
          $("#address-check-3").each(function() {
            $(this).prop("checked", false);
        });
        }           
     });
     $("#address-check-3").click(function() {
        if($(this).prop("checked")) {
            $("#address-check-1").each(function() {
              $(this).prop("checked", false);
          });
          $("#address-check-2").each(function() {
            $(this).prop("checked", false);
        });
        }           
     });
});

