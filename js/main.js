$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('.menu-list, .header-inner, .logo').addClass('was-scrolled');
        } else if ($(this).scrollTop() === 0) {
            $('.menu-list, .header-inner, .logo').removeClass('was-scrolled');
        };
    });
});


$('.skill-btn').on('click', function() {
    if ($('.skill-btn').hasClass('skill-list-active') &&
        $('.skill-list').hasClass('skill-list-active')) {
        $('.skill-btn, .skill-list').removeClass('skill-list-active');
    }
    $(this).toggleClass('skill-list-active');
    $(this).parent('.skill-title').next('.skill-list').addClass('skill-list-active');
})


$(function() {
    $('.burger').on('click', function() {
        $(this).toggleClass('burger-active');
        $('.menu').toggleClass('visible');
        $('.menu-link').on('click', function() {
            $('.menu').removeClass('visible');
            $('.burger').removeClass('burger-active');
        })
    })
})


$('.portfolio-pic').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom',

    zoom: {
        enabled: true,
        duration: 600,
        easing: 'ease-in-out',
        opener: function(openerElement) {
            return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
    }

});