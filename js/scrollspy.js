// ------------------------------
// Navigation Scroll By https://twitter.com/mattsince87
// ------------------------------

function scrollNav() {
    $('.nav-item a').click(function () {
        //Toggle Class
        $(".active").removeClass("active");
        $(this).closest('li').addClass("active");
        var theClass = $(this).attr("class");
        $('.' + theClass).parent('li').addClass('active');
        //Animate
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 160
        }, 400);
        return false;
    });
    $('.scrollTop a').scrollTop();
}
scrollNav();



// ------------------------------
// Form Validation - Rainer
// ------------------------------

var em = $('#mauticform_input_dailyprompts_email').val().trim();
var esubmit = $('#mauticform_input_dailyprompts_submit');

function validateEmail(em) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(em);
}

$("input").keyup(function (e) {
    var a = $('#mauticform_input_dailyprompts_email').val().trim();
    if (!validateEmail(a)) {
        esubmit.attr("disabled", "true");
    } else {
        esubmit.removeAttr('disabled');
        esubmit.click( function () {
            $("#thanks").modal();
            esubmit.attr("disabled", "true");
            $( "#emailabl" ).removeClass( "active" )
            $( "#mauticform_dailyprompts" ).submit();
        });
    }

});
