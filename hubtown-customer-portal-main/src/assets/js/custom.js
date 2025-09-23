/**** 
 * slack slider  
 * features slider 
 */

$('.work-slider').slick({
    dots: false,
    arrows: true,
    prevArrow:"<span type='button' class='slider-arrow left-arrow'><i class='bi bi-chevron-left'></i></span>",
    nextArrow:"<span type='button' class='slider-arrow right-arrow'><i class='bi bi-chevron-right'></i></span>",

    slidesToShow:1,
    slidesToScroll: 1,
   
});
$('.digitalize-slider').slick({
    dots: false,
    arrows: true,
    prevArrow:"<button type='button' class='btn btn-outline-secondary left-arrow'><i class='bi bi-arrow-left-short'></i></button>",
    nextArrow:"<button type='button' class='btn btn-outline-secondary right-arrow'><i class='bi-arrow-right-short'></i></button>",

    centerMode: true,
    centerPadding: '75px',
    slidesToShow:4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                centerPadding: '10%',
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                centerPadding: '5%',
                slidesToScroll: 1
            }
        }
    ]
});
$(document).ready(function() {
    $(".dark-mode").click(function(){
        $("body").addClass("page-dark-mode")
    });
    $(".light-mode").click(function(){
        $("body").removeClass("page-dark-mode")
    });
});
