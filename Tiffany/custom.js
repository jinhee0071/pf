$(document).ready(function () {

    //비주얼 영역 슬릭

    $(".slider-box-1 > .slider").slick({
        dots: true,
        arrows: false,
        autoplay: true,
    });

    //con1 영역 슬릭

    $('.slider-box-2 > .slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: "<button type='button' class='slick-prev'>Previous</button>", 
        nextArrow: "<button type='button' class='slick-next'>Next</button>",


    });



});
 