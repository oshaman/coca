var _url=null;
$(document).ready(function () {
    $('input').change(function () {
        $('input').each(function () {
            if ($(this).val().length > 0) {
                $(this).addClass('label-stay');
                // console.log($('input').length);
            } else {
                $(this).removeClass('label-stay');
            }
        });
    });

    if ($('.prev-month').length > 0) {
        var _this = $('.prev-month');
        for (var i = 0; i < _this.length; i++) {
            _this.eq(i).find('.day').clone().addClass('clone').appendTo(_this.eq(i))
        }
    }

    if ($('.scrollbar').length) {
        $('.scrollbar').mCustomScrollbar();
    }

    $(".form-seo input[type=file]").change(function () {
        console.log(123);
        var filename = $(this).val().replace(/.*\\/, "");
        $("#og-image-load").val(filename);
    });
    //------------------------------------------------------calendar accordion
    $('.info-note').slideUp()
    $('.header-note').on('click', function () {
        _next = $(this).next('.info-note');
        _this = $(this);
        accord();
    });

    $('.info-after').on('click', function () {
        _this = $(this).siblings('.header-note');
        _next = $(this).siblings('.info-note');
        accord();
    });

    function accord() {
        if (_this.hasClass('opened')) {
            _next.slideUp('fast');
            _this.parent('.info-block').removeClass('opened');
            _this.siblings('.info-after').removeClass('opened');
            _this.find('.info-open').removeClass('del').html("Відкрити");
            _this.removeClass('opened');
        } else {
            $('.header-note').removeClass('opened');
            $('.info-block').removeClass('opened');
            $('.info-after').removeClass('opened');
            $('.info-open').removeClass('del').html("Відкрити");
            $('.info-note').slideUp();

            _this.addClass('opened');
            _this.parent('.info-block').addClass('opened');
            _this.siblings('.info-after').addClass('opened');
            _next.slideDown('fast');

            _this.find('.info-open').addClass('del');
            if (_this.find('.info-open').hasClass("del")) {
                _this.find('.info-open').html("Видалити")
            } else _this.find('.info-open').html("Відкрити");

            $('.del').on('click', function () {
                pop_delete();
            });
        }
    }

    //-------------------------------------------------calendar accordion END

    $(".rubric").on("click", function () {
        var numberIndex = $(this).index();

        if (!$(this).is("active")) {
            $(".rubrics .rubric").removeClass("active");
            $(".tiny-content .nacc .nacc-content").removeClass("active");

            $(this).addClass("active");
            $(".tiny-content .nacc").find(".nacc-content:eq(" + numberIndex + ")").addClass("active");
        }
    });

    $(".pres-month").on("click", function () {
        $('.empty-info').css('display', 'none')

        if (!$(this).is("active")) {
            $(".timetable .pres-month").removeClass("active");
            $(".info-windows .info-window").removeClass("active");
            $(this).addClass("active");
            $(".info-windows").find(".info-window").addClass("active");

        }
    });
    if ($('.pres-month').hasClass('active')) {
        $('.empty-info').css('display', 'none')
    }

    //------------------pop-trip------------

    $('.add-trip, .info-after-add, .info-block-add').on('click', function () {
        $('.pop-trip').addClass('active');
        $('main').css('pointer-events', 'none')
    });
    $('.info-note div:nth-child(3)').on('click', function () {
        $('.pop-trip').addClass('active edit');
        $('main').css('pointer-events', 'none')
    });
    // if ($('.pop-trip').hasClass('edit')) {
    //     $(this).find('.pop-header p').html('Редагування екскурсії');
    //     $(this).find('.form-trip-block p').html('Дата та час');
    // } else {
    //     $(this).find('.pop-header p').html('Добавити екскурсію');
    //     $(this).find('.form-trip-block p').html('Виберіть дату та час');
    // }

    $('.close').on('click', function () {
        $('.pop-trip').removeClass('active');
        $('main').css('pointer-events', 'auto')
    })

    $(".form-trip-file input[type=file]").change(function () {
        var filename = $(this).val().replace(/.*\\/, "");
        $("#filename").val(filename);

        if ($("#filename").length > 0) {
            $('.upload-doc').removeClass('btn-grey').addClass('btn-white').html('Завантажено')
        }
    });


    $('.form-trip').change(function () {
        console.log(($("#filename").length));
        if ($('.circle2').hasClass('active') && ($("#filename").length > 0 || $('.nodoc').val().length > 3)) {
            $('.circle3').addClass('active');
            $('.p-3').addClass('active');
        }
    })

    record();

    function record() {
        var coef = 0,
            coef1 = 0,
            coef2 = 0,
            coef3 = 0,
            coef4 = 0,
            coef5 = 0,
            coef6 = 0;

        $('#trip-name').each(function () {
            if ($(this).val().length > 1) {
                coef1 += 10;
            } else coef1 = 0
        });
        $('#trip-phone').each(function () {
            if ($(this).val().length == 10) {
                coef2 += 10;
            } else coef2 = 0
        });

        if ($(".form-trip-info .custom-select-wrapper").hasClass('label-stay')) {
            coef3 += 10;
        } else coef3 = 0;

        $('#trip-emai').each(function () {
            if ($(this).val().length > 2) {
                coef4 += 10;
            } else coef4 = 0
        });
        $('#trip-pos').each(function () {
            if ($(this).val().length > 2) {
                coef5 += 10;
            } else coef5 = 0
        });
        $('#trip-school').each(function () {
            if ($(this).val().length > 2) {
                coef6 += 10;
            } else coef6 = 0
        });

        coef = coef1 + coef2 + coef3 + coef4 + coef5 + coef6;

        if (coef == '50' && (!$('.form-trip-info').hasClass('inval'))) {
            $('.circle2').addClass('active');
            $('.p-2').addClass('active');
        } else {
            $('.circle2').removeClass('active');
            $('.p-2').removeClass('active');
        }
    }

    $(".form-trip-info input").change(function () {
        record()
    });
    $(".form-trip-info .custom-select-trigger").change(function () {
        record()
    });


    //------------------------see pass--------------

    $('[data-action="see-password"]').on('click', function () {
        el = '#' + $(this).attr('data-toggle');
        console.log(el)

        if ($(el).attr('type') == 'password') {
            $(this).find('i').addClass('icon-eye-close');
            $(el).attr('type', 'text');
        }
        else {
            $(this).find('i').removeClass('icon-eye-close');
            $(el).attr('type', 'password');
        }

        $(el).focus();
    })

    //----------------------select-------------------

    $(".custom-select").each(function () {
        var classes = $(this).attr("class"),
            id = $(this).attr("id"),
            name = $(this).attr("name");
        var template = '<div class="' + classes + '">';
        if ($(this).parents('div').hasClass('.form-register')) {
            template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        } else {
            template += '<span class="custom-select-trigger">' + $(this).find('option[selected]').text() + '</span>'
        }
        ;
        template += '<div class="custom-options scrollbar">';
        if ($('body').hasClass('user-page')) {
            $('.custom-options').removeClass('scrollbar')
        }
        $(this).find("option").each(function () {
            template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
        template += '</div></div>';

        $('.scrollbar').mCustomScrollbar();
        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function () {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function () {
        $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function () {
        $('html').one('click', function () {
            $(".custom-select").removeClass("opened");
            $(".td-position").removeClass("opened");
        });

        $(this).parents(".custom-select").toggleClass("opened");
        $(this).parents(".td-position").toggleClass("opened");
        event.stopPropagation();
    });

    function custClick() {
        _this.parents(".custom-select-wrapper").find("select").val(_this.data("value"));
        _this.parents(".custom-options").find(".custom-option").removeClass("selection");
        _this.addClass("selection");
        _this.parents(".custom-select").removeClass("opened");
        _this.parents(".custom-select").find(".custom-select-trigger").text(_this.text());
    }

    $(".custom-option").on("click", function () {
        _this = $(this);
        custClick();
    });
    $(".form-register .custom-option").on("click", function () {
        _this = $(this);
        custClick();

        $('.form-register  .custom-select-trigger').each(function () {
            _th = $(this);
            if (_th.length > 0) {
                _th.parents('.custom-select-wrapper').addClass('label-stay');
            } else {
                _th.parents('.custom-select-wrapper').removeClass('label-stay');
            }
        });
    });
    $(".form-trip-info .custom-option").on("click", function () {
        _this = $(this);
        custClick();

        $('.form-trip-info .custom-select-trigger').each(function () {
            if ($(this).length > 0) {
                $(this).parents('.custom-select-wrapper').addClass('label-stay');
            } else {
                $(this).parents('.custom-select-wrapper').removeClass('label-stay');
            }
        });
    });
//------------------------validation-------------------
//Validate Functions
    function validateEmail(em) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test(em);
    };

    function validateName(n) {
        var nr = /.[a-zA-Z]+$/;
        return nr.test(n);
    };

//Actions
    $('#trip-pos').on("change blur", function () {
        var n = $('#trip-pos').val();
        var parentn = $('#trip-pos').parent();
        if (!validateName(n) || n.length == 0) {
            parentn.addClass('inval')
        }
        else {
            parentn.removeClass('inval')
        }
    });
    $('#trip-phone').on("change blur", function () {
        var ph = $('#trip-phone').val();
        var parentph = $('#trip-phone').parent();
        if ((ph.length < 10) && (ph.length > 0)) {
            parentph.addClass('inval')
        } else {
            parentph.removeClass('inval')
        }
    });
    $('#name').on("change blur", function () {
        var n = $('#name').val();
        var parentn = $('#name').parent();
        if (!validateName(n) || n.length == 0) {
            parentn.addClass('inval')
        }
        else {
            parentn.removeClass('inval')
        }
    });

    $('#email').on("change blur", function () {
        var em = $('#email').val();
        var parentm = $('#email').parent();
        if (!validateEmail(em) || em.length == 0) {
            parentm.addClass('inval')
        }
        else {
            parentm.removeClass('inval')
        }
    });
    $('#trip-email').on("change blur", function () {
        var em = $('#trip-email').val();
        var parentm = $('#trip-email').parent();
        if (!validateEmail(em) || em.length == 0) {
            parentm.addClass('inval')
        }
        else {
            parentm.removeClass('inval')
        }
    });

    $('#form1').on("change blur", function () {
        var em = $('#form1').val();
        var parentm = $('#form1').parent();
        if (!validateEmail(em) || em.length == 0) {
            parentm.addClass('inval')
        }
        else {
            parentm.removeClass('inval')
        }
    });

    $('#inputMail').on("change blur", function () {
        var em = $('#inputMail').val();
        var parentm = $('#inputMail').parent();
        if (!validateEmail(em) || em.length == 0) {
            parentm.addClass('inval')
        }
        else {
            parentm.removeClass('inval')
        }
    });

    $('#inputPassword').on("change blur", function () {
        var pa = $('#inputPassword').val();
        var parentpa = $('#inputPassword').parent();
        if (pa.length <= 5 || pa.length > 20) {
            parentpa.addClass('inval')
        }
        else {
            parentpa.removeClass('inval')
        }
    });

    $('#pass').on("change blur", function () {
        var pa = $('#pass').val();
        var parentpa = $('#pass').parent();
        if (pa.length <= 5 || pa.length > 20) {
            parentpa.addClass('inval')
        }
        else {
            parentpa.removeClass('inval')
        }
    });
    $('#passtrue').on("change blur", function () {
        var pt = $('#passtrue').val();
        var parentpt = $('#passtrue').parent();
        if (pt !== $('#pass').val()) {
            parentpt.addClass('inval')
        }
        else {
            parentpt.removeClass('inval')
        }
    });

//    ---------------------pop-alert---------------



    if($('.alert-danger').html()) {
        alert_pop($('.alert-danger').html());
    }

    if($('.alert-success').html()) {
        alert_pop($('.alert-success').html());
    }

    function alert_pop(text) {
        var alertBlock = $('<div class="pop-alert"><div class="alert-text">' + text + '</div>\n' +
            '<div class="alert-close"><img src="/admn/imgs/close.svg" alt="1"></div></div>');
        $('.pops-alert').prepend(alertBlock);
        setTimeout(function () {
            alertBlock.remove()
        }, 5000);
        $('.pop-alert .alert-close').click(function () {
            $(this).parents('.pop-alert').remove();
        });
    }

    function pop_delete() {
        $('.pop-delete').addClass('active');
        $('header, main, footer').addClass('blur');
    }

//    ---------------------ajax------------------


    $('.td-delete .btn').on('click', function () {
        $(this).parents('tr').addClass('tr-delete');
        _url = $(this).attr('data-url');
        pop_delete();
    });
    // $('.del').on('click', function () {
    //     pop_delete();
    // });
    $('.pop-back, .button-cancel').on('click', function () {
        $('.pop-delete').removeClass('active');
        $('tr').removeClass('tr-delete');
        $('header, main, footer').removeClass('blur');
    });


    $('.button-success').on('click', function () {

        $.ajax({
            url: _url,
            type: "DELETE",
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: {'id':1},
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {

                $('tr.tr-delete').remove();
                $('.pop-delete').removeClass('active');
                $('header, main, footer').removeClass('blur');
                alert_pop('Успішно видалено');
                _url = null;
            },
            error: function (data) {


            }
        });

    });

    $('#create-user').submit(function (e) {
        e.preventDefault();

        var _form = $('#create-user');
        var formData = new FormData(_form[0]);

        $.ajax({
            url: _form.attr('action'),
            type: "POST",
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {

                location.reload();

            },
            error: function (data) {

            }
        });

    });


});

//-------------------------------tinymce-------------
var editor_config = {
    selector: 'textarea.my-editor',
    height: '300',
    theme: 'modern',
    toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    image_advtab: true,
    templates: [
        {title: 'Test template 1', content: 'Test 1'},
        {title: 'Test template 2', content: 'Test 2'}
    ],
    content_css: [
        '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
        '//www.tinymce.com/css/codepen.min.css'
    ],
    language: "ru",
    // content_css: "/assets/css/style.css",
    plugins: [
        "advlist autoresize autolink lists link image charmap print preview hr anchor pagebreak",
        "searchreplace wordcount visualblocks visualchars code fullscreen",
        "insertdatetime media nonbreaking save table contextmenu directionality",
        "emoticons template paste textcolor colorpicker textpattern"
    ],
    rel_list: [
        {title: 'follow', value: 'follow'},
        {title: 'nofollow', value: 'nofollow'}
    ],
    autoresize_on_init: false
};

if ($('.my-editor').length > 0) {
    tinymce.init(editor_config);
}
