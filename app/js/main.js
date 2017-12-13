$( document ).ready(function() {

    $login_form = $(".login_form");
    $prelogin = $(".prelogin_form");

    $('.login_form__close-btn').on('click', function() {
        $(this).parent().toggleClass('closed');
        $prelogin.removeClass('closed');
    })

    $("input[type='submit']").on('click', function(e) {
        e.preventDefault();
        console.log(123);
        $login_form.addClass('closed');
        $prelogin.removeClass('closed');
        $(".prelogin_form-title").html("TANKS FOR VISITING <br/> RECLICK TO SIGN IN")
    })

    $(".prelogin_form").on('click', function () {
        $(this).addClass('closed');
        $login_form.removeClass('closed');

    })
});
