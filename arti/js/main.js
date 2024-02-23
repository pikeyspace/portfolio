$('.slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true
  });



// Tabs
(function($) {
    $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);




$(function() {
    $('.burger').on('click', function() {
        $(this).toggleClass('active');
        $('body').toggleClass('stop-scroll');
        $('.menu').toggleClass('visible');
    })
    $('.menu-link, .menu-list').on('click', function() {
        $('.burger').removeClass('active');
        $('.menu').removeClass('visible');
    })
})