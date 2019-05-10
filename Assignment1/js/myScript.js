
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
    });

    $(".menu-icon , .dark-background").click(function () {
        $("body").toggleClass("open-nevigation");
    });

    $(function () {

        var selectedClass = "";

        $(".filter-button").click(function () {

            selectedClass = $(this).data("group");

            $("#gallery").fadeTo(100, 0.1);

            $(".all").not("." + selectedClass).fadeOut();

            setTimeout(function () {
                $("." + selectedClass).fadeIn();
                $("#gallery").fadeTo(300, 1);
            }, 300);
        });
    });

    if ($('div').hasClass('formBody')) {
        formValidation.init();
    }

    if($('div').hasClass('stats')) {
        numberCounter.init();
    }

});

var numberCounter = {
    init: function () {
        numberCounter.counter();
    },

    counter: function () {
        $(".stats").waypoint(function () {
            $('.count').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });

            });
            this.destroy();

        }, { offset: '70%' });
    }

}

var formValidation = {
    init: function () {
        formValidation.formSubmition();
        formValidation.inputKeyUp();
    },

    formSubmition: function () {
        $(".contactForm").submit(function (e) {

            var count = 0;
            $(".form-field").each(function () {

                var value = $(this).find('input').val();
                var regex = $(this).find('input').data('regex');

                if (value == "") {
                    $(this).find('.empty').addClass('show-error');
                    count++;
                }
                else if (!value.match(regex)) {
                    $(this).find('.invalid').addClass('show-error');
                    count++;
                }
                else {
                    $(this).find('.empty').removeClass('show-error');
                    $(this).find('.invalid').removeClass('show-error');
                }
            });
            if (count > 0) {
                e.preventDefault();
            } else {
                alert("SUCCESS");
            }

        });
    },

    inputKeyUp: function () {
        $(".form-field").keyup(function () {

            var value = $(this).find('input').val();
            var regex = $(this).find('input').data('regex');

            $(this).find('.empty').removeClass('show-error');

            if (!value.match(regex)) {
                $(this).find('.empty').removeClass('show-error');
                $(this).find('.invalid').addClass('show-error');

            }
            else {
                $(this).find('.invalid').removeClass('show-error');
            }
        });

    },

}


