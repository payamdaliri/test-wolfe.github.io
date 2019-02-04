$(document).ready(function () {

    new fullpage('#fullpage', {
        sectionsColor: ['#fff', '#fff', '#fff', '#fff'],
        navigation: true,
        navigationPosition: 'right',
        normalScrollElements: '.modal-dialog, .modal, ,.modal-backdrop.show, .images'
    });

    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        nav: true,
        bullet: false,
        dots: false,
        center: true,
        margin: 10,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        navText: ['<img src="assets/images/right.svg" >', '<img src="assets/images/left.svg" >']
    });



    // dataUrl = "https://borsam.github.io/assets/jsons/content-test.json"


    var data;
    $.ajax({
        dataType: "json",
        url: 'https://borsam.github.io/assets/jsons/content-test.json',
        data: data,
        success: function (data) {
            // begin accessing JSON data here
            console.log(data[0].name);
        }
    });


    //Responsive Functions

    if ($(document).width() < 768) {
        $('.images_thumbnails').hide();
        $('.offer').hide();
        $('.owl-carousel-mobile').owlCarousel({
            items: 1,
            loop: false,
            nav: true,
            center: true,
            margin: 10,
        });

    } else {
        $('.owl-carousel-mobile').hide();
        $('.offer').show();
    }









});