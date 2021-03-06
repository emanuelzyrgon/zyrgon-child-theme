jQuery(document).ready(function($) {
    $("#chic_mail_contact_form textarea").parent().find("label").css("top", "17px");

    // Adding active class to Blog nav item when user is on single post page
    $(".single-post #primary-menu li:last-child").addClass("act");

    // contact form strart here
    $("#chic_mail_contact_form input").mouseenter(function() {
        var inputlabel = $(this).parent().find($("#chic_mail_contact_form label"));
        inputlabel.css({
            'background-color' : '#fff',
            'color' : '#000'
        });

        $(inputlabel).animate({ 
            top: "-13px",
        }, 200 );
        $(this).addClass('focused');
    });

    $("#chic_mail_contact_form input").mouseleave(function() {
        var inputlabel = $(this).parent().find($("#chic_mail_contact_form label"));
        if($(this).val() == "" && !$(this).is(":focus")) {
            inputlabel.css({
                'background-color' : 'unset',
                'color' : '#9C9C9C'
            });
            $(inputlabel).animate({ 
                top: "11px",
            }, 200 );
            $(this).removeClass('focused');
        }
        
    });

    $("#chic_mail_contact_form textarea").mouseenter(function() {
        var inputlabel = $(this).parent().find($("#chic_mail_contact_form label"));
        inputlabel.css({
            'background-color' : '#fff',
            'color' : '#000'
        });

        $(inputlabel).animate({ 
            top: "-13px",
        }, 200 );
        $(this).addClass('focused');
    });
    
    $("#chic_mail_contact_form textarea").mouseleave(function() {
        var inputlabel = $(this).parent().find($("#chic_mail_contact_form label"));
        if($(this).val() == "" && !$(this).is(":focus")) {
            inputlabel.css({
                'background-color' : 'unset',
                'color' : '#9C9C9C'
            });
            $(inputlabel).animate({ 
                top: "17px",
            }, 200 );
            $(this).removeClass('focused');
        }
    });

    $("#chic_mail_contact_form input").blur(function() {
        var inputlabel = $(this).parent().find($("#chic_mail_contact_form label"));
        if($(this).val() == "" && !$(this).is(":focus")) {
            inputlabel.css({
                'background-color' : 'unset',
                'color' : '#9C9C9C'
            });
            $(inputlabel).animate({ 
                top: "11px",
            }, 200 );
            $(this).removeClass('focused');
        }
    });

    $("#chic_mail_contact_form textarea").blur(function() {
        var inputlabel = $(this).parent().find($("#chic_mail_contact_form label"));
        if($(this).val() == "" && !$(this).is(":focus")) {
            inputlabel.css({
                'background-color' : 'unset',
                'color' : '#9C9C9C'
            });
            $(inputlabel).animate({ 
                top: "17px",
            }, 200 );
            $(this).removeClass('focused');
        }
    });
    // contact form ends here

    // home page nav card on click got to specific page
    $(document).on('click', '.chic-home-page-nav-card', function() {
        if($(window).width() < 1279) {
            $(this).find('a')[0].click();
        }
    });

});