$(function() {
    var lastScrollTop = 0;
    $(window).scroll(function(){
        var st = $(this).scrollTop();
        if (st > lastScrollTop || st < 150){
            $("#header").removeClass("scrolled");
        } else {
            $("#header").addClass("scrolled");
    }
    lastScrollTop = st;
    });
    $("a[href*='#']:not([href='#']):not([href='#logowanie']):not([href='#rejestracja'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1200);
            }
        }
    });
    $(document).ready(function(){
        $('#btn_menu').click(function(){
            $(this).toggleClass('open');
            $('.nav').toggleClass('open');
        });
    });
    $('a[href="#logowanie"]').click(function(){
        $("#logowanie" ).toggle();
    });
    $('a[href="#rejestracja"]').click(function(){
        $("#rejestracja" ).toggle();
    });
    $('.close-popup').click(function(){
        $("#logowanie" ).hide();
        $("#rejestracja" ).hide();
    });    
    $('#registration').validate({
        rules:{
            firstname: "required",
            lastname: "required",
            email: {
              required: true,
              email: true
            },
            password: {
              required: true,
              minlength: 5
            }
        },
        messages: {
            firstname: "Wpisz swoje imię",
            lastname: "Wpisz swoje nazwisko",
            email: "Wpisz prawodłowy adres e-mail",
            password: {
              required: "Wpisz hasło",
              minlength: "Twoje hasło mu mieć minimalnie 5 znaków"
            }
          },
    });
    $('#login').validate({
        rules:{
            email_login: {
              required: true,
              email: true
            },
            password_login: {
              required: true,
              minlength: 5
            }
        },
        messages: {
            email_login: "Wpisz prawodłowy adres e-mail",
            password_login: {
              required: "Wpisz hasło",
              minlength: "Twoje hasło mu mieć minimalnie 5 znaków"
            }
          },
    });
});