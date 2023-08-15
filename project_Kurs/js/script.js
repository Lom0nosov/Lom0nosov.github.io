$(document).ready(function(){
     $('.carousel__inner').slick(
        {
            swipeToSlide: true,
            infinite: false,
            speed: 1200,
            slidesToShow: 1,
            adaptiveHeight: true,
            swipeToSlide: true,
            infinite: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron-left-solid.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron-right-solid.png"></button>', 
        }
     );
});

