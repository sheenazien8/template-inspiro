/*for animation js*/
$(document).ready(function () {
    //border animation
    $('.navbar-nav > li > a').addClass('border-animation')
    $('.btn-sub1').hover(
        function () {
            $('.fa-angle-right').css({
                transform: "rotate(180deg)"
            });
        },
        function () {
            $('.fa-angle-right').css("transform", "rotate(0deg)");
        }
    )

    $('.btn-sub2').hover(
        function () {
            $('.fa-angle-double-right').css({
                transform: "rotate(180deg)",
                marginRight: "5px"
            });
        },
        function () {
            $('.fa-angle-double-right').css({
                transform: "rotate(0deg)",
                marginRight: "0px"
            });
        }
    )
    /*content 1 animation*/
    $('.content1 .col-md-4 .curcle').hover(
        function () {
            $(this).css({
                width: "105px",
                height: "105px",
                color: "#3f494c"
            });
        },
        function () {
            $(this).css({
                width: "100px",
                height: "100px",
                color: "#ef233c"
            });
        }
    )

    /*progres bar animation*/
    const x = 854;
    const y = 672;
    $(window).on('scroll', function () {
        // var scrollHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        
        if (x < scrollTop){
            $('.pro-1').css("width", "70%");
            $('.pro-2').css("width", "84%");
            $('.pro-3').css("width", "90%");
        }else if (y < scrollTop){
            $('.pro-1').css("width", "0%");
            $('.pro-2').css("width", "0%");
            $('.pro-3').css("width", "0%");
        }
    });

    /*price animation*/
    // var basic_span = ".content-3 .basic .basic-border:nth-child";
    $(".basic a").hover(
        function () {
            $('.content-3 .basic .basic-border:nth-child(1)').css("width", "100%");
            $('.content-3 .basic .basic-border:nth-child(2)').css("height", "100%");
            $('.content-3 .basic .basic-border:nth-child(3)').css("height", "100%");
            $('.content-3 .basic .basic-border:nth-child(4)').css("width", "100%");
            $('.content-3 .basic hr').css("background-color", "#e30022");
        },
        function () {
            $('.content-3 .basic .basic-border:nth-child(1)').css("width", "30px");
            $('.content-3 .basic .basic-border:nth-child(2)').css("height", "30px");
            $('.content-3 .basic .basic-border:nth-child(3)').css("height", "30px");
            $('.content-3 .basic .basic-border:nth-child(4)').css("width", "30px");
            $('.content-3 .basic hr').css("background-color", "inherit");
        }
    )

    $(".enterprise a").hover(
        function () {
            $('.content-3 .enterprise .basic-border:nth-child(1)').css("width", "100%");
            $('.content-3 .enterprise .basic-border:nth-child(2)').css("height", "100%");
            $('.content-3 .enterprise .basic-border:nth-child(3)').css("height", "100%");
            $('.content-3 .enterprise .basic-border:nth-child(4)').css("width", "100%");
            $('.content-3 .enterprise hr').css("background-color", "#e30022");
        },
        function () {
            $('.content-3 .enterprise .basic-border:nth-child(1)').css("width", "30px");
            $('.content-3 .enterprise .basic-border:nth-child(2)').css("height", "30px");
            $('.content-3 .enterprise .basic-border:nth-child(3)').css("height", "30px");
            $('.content-3 .enterprise .basic-border:nth-child(4)').css("width", "30px");
            $('.content-3 .enterprise hr').css("background-color", "inherit");
        }
    )

    $(".pro a#pro-button").hover(
        function () {
            $('.content-3 .pro .pro-border:nth-child(2)').css({
                height: "100%",
                bottom: "0%"
            });
            $('.content-3 .pro .pro-border:nth-child(1)').css({
                height: "100%",
                bottom: "0%"
            });
        },
        function () {
            $('.content-3 .pro .pro-border:nth-child(2)').css({
                height: "100px",
                bottom: '40%'
            });
            $('.content-3 .pro .pro-border:nth-child(1)').css({
                height: "100px",
                bottom: '40%'
            });
        }
    );

    /*our service*/
    $('.content-4 .nav-tabs:nth-child(1)').css({
        backgroundColor: "#ffffff",
        borderTop: '3px solid #e30022'
    });

    $('.content-4 .nav-tabs:nth-child(1)').on('focusin', function () {
        $(this).css({
            backgroundColor: "#ffffff",
            borderTop: '3px solid #e30022'
        });
    });
    $('.content-4 .nav-tabs:nth-child(1)').on('focusout', function () {
        $(this).css({
            backgroundColor: "#EDF2F4",
            borderTop: '0px'
        });
    });

    /*second tab*/

    $('.content-4 .nav-tabs:nth-child(2)').on('focusin', function () {
        $('.content-4 .nav-tabs:nth-child(1)').css({
            backgroundColor: "#EDF2F4",
            borderTop: '0px'
        });
        $(this).css({
            backgroundColor: "#ffffff",
            borderTop: '3px solid #e30022'
        });
    });
    $('.content-4 .nav-tabs:nth-child(2)').on('focusout', function () {
        $(this).css({
            backgroundColor: "#EDF2F4",
            borderTop: '0px'
        });
    });

    $('.content-4 .nav-tabs:nth-child(3)').on('focusin', function () {
        $('.content-4 .nav-tabs:nth-child(1)').css({
            backgroundColor: "#EDF2F4",
            borderTop: '0px'
        });
        $(this).css({
            backgroundColor: "#ffffff",
            borderTop: '3px solid #e30022'
        });
    });
    $('.content-4 .nav-tabs:nth-child(3)').on('focusout', function () {
        $(this).css({
            backgroundColor: "#EDF2F4",
            borderTop: '0px'
        });
    });

    $('.content-4 .nav-tabs:nth-child(4)').on('focusin', function () {
        $('.content-4 .nav-tabs:nth-child(1)').css({
            backgroundColor: "#EDF2F4",
            borderTop: '0px'
        });
        $(this).css({
            backgroundColor: "#ffffff",
            borderTop: '3px solid #e30022'
        });
    });
    $('.content-4 .nav-tabs:nth-child(4)').on('focusout', function () {
        $(this).css({
            backgroundColor: "#EDF2F4",
            borderTop: '0px'
        });
    });

    function validateEmail(email){
        var string = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return string.test(email);
    }

    $("#email").on('focusout',function () {
        if ($(this).val() != ""){
            if (validateEmail($(this).val())){
                console.log('true');
                $(this).css('border', '1px solid green');
                $('span#error-report').text('');
            }else {
                console.log('false');
                $(this).css('border', '1px solid red');
                $('span#error-report').text('Invalid Email Address');
            }
        }else {
            $(this).css('border', '1px solid red');
            $('span#error-report').text('Email is Required');
        }
    })

    $("#comment").on('focusout', function () {
        if ($(this).val() != ""){
            $(this).css('border', '1px solid green');
        }else {
            $(this).css('border', '1px solid red');
            $('span#comment').text('Comment is Required');
        }
    })

    $('#subject, #name').on('focusot', function () {
        if ($(this).val() != ""){
            $(this).css('border', '1px solid green');
        }else{
            $(this).css('border', '1px solid yellow');
        }
    })

    $('.top').on('click', function () {
        $('html, body').animate({
            scrollTop : 0
        }, 1500);
    });

    /*nav animation*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 450){
            $('nav').addClass('fixed-top').addClass('sticky');
        }else {
            $('nav').removeClass('fixed-top').removeClass('sticky');
        }
    })
});