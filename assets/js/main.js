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


    // Contact Form Codes
    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // TODO: The rest of the code will go here...
    $(form).submit(function (event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        // TODO
    });

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
    }).done(function (response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
    });


    // var data;
    // $.ajax({
    //     dataType: "json",
    //     url: 'https://borsam.github.io/assets/jsons/content-test.json',
    //     data: data,
    //     success: function (data) {
    //         // begin accessing JSON data here

    //         for (var i = 0; i < data.length; i++) {
    //             $('.images_thumbnails').append('<div class="col-lg-4 col-sm-6  mb-4">' + '<div class="w-100">' + '<img class="service_img" src="' + data[i].properties[i].pics[i].img + '" alt="Card image cap">' + '</div>' + '</div>');



    //         }
    //         console.log(data[0].service);
    //     }
    // });




    // owl.trigger('add.owl.carousel', [jQuery('<div class="item" data-hash="' + contents[3].properties[0].pics[post].id + '">' + '<img src="' + contents[3].properties[0].pics[post].img + '" alt="">' + '</div>')]);

    // <div class="col-lg-4 col-sm-6  mb-4 ">
    //     <div class="w-100">
    //         <img data-toggle="modal" data-target="#exampleModal" class=" service_img" src="https://picsum.photos/600/400"
    //             alt="Card image cap">
    //     </div>
    // </div>
    // <div class="col-lg-4 col-sm-6 mb-4">
    //     <div class="w-100">
    //         <img class=" service_img" src="https://picsum.photos/600/400" alt="Card image cap">
    //     </div>
    // </div>
    // <div class="col-lg-4 col-sm-6 mb-4">
    //     <div class=" w-100">
    //         <img class=" service_img" src="https://picsum.photos/600/400" alt="Card image cap">
    //     </div>
    // </div>
    // <div class="col-lg-4 col-sm-6 mb-4">
    //     <div class=" w-100">
    //         <img class=" service_img" src="https://picsum.photos/600/400" alt="Card image cap">
    //     </div>
    // </div>
    // <div class="col-lg-4 col-sm-6 mb-4">
    //     <div class=" w-100">
    //         <img class=" service_img" src="https://picsum.photos/600/400" alt="Card image cap">
    //     </div>
    // </div>
    // <div class="col-lg-4 col-sm-6 mb-4">
    //     <div class=" w-100">
    //         <img class=" service_img" src="https://picsum.photos/600/400" alt="Card image cap">
    //     </div>
    // </div>


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