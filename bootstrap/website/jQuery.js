$(document).ready(function () {
    $(".close-btn").click(function () {
        $(".mobile-menu").css("display", "none");
    })
    $(".menu-icon").click(function () {
        $(".mobile-menu").css("display", "block");
    })

    $(".carousel").slick({
        slidesToShow: 1,
        dots: true,
        autoplay: true
    });
    $(".plus-btnn").click(function () {
  $(this).parent().siblings('.footer-sec').toggle(300);
  $(this).find('i').toggleClass('d-none');
    })

});
