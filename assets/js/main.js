$(document).ready(function () {

    new fullpage('#fullpage', {
        sectionsColor: ['#fff', '#fff', '#fff', '#fff'],
        navigation: true,
        navigationPosition: 'right',
        normalScrollElements: '.modal-dialog, .modal, ,.modal-backdrop.show, .images'
    });
    
    var owl = $('.owl-carousel').owlCarousel({
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


    dataUrl = "https://borsam.github.io/assets/jsons/content-test.json"


    $.getJSON(dataUrl, function (contents) {
        let id;
        let name;
        let thumbnail;
        for (var cat = 0; cat < contents.length; cat++) {
            $(".side_category").append('<a href="#" id="' + contents[cat].id + '" class="list-group-item list-group-item-action pl-5"> ' + contents[cat].service + '</a>');
        };

        $("#" + contents[0].id).addClass("active item-active");

        $("#branding").click(function () {
            RemoveHtml();
            $("#application, #website, #3d").removeClass("active item-active");
            $("#branding").addClass("active item-active");
            for (var post = 0; post < 6; post++) {
                $(".modal").attr('id', contents[0].properties[post].name);
                $(".images_thumbnails").append('<div class="col-4 mb-4">' + '<div class="w-100">' + '<img data-toggle="modal"  data-target="#' + contents[0].properties[post].name + '" class="service_img" src="' + contents[0].properties[post].thumbnail + '" alt="Card image cap">' + '</div>' + '</div>');
                $(".menu_slider").append('<a href="#' + contents[0].properties[0].pics[post].id + '">' + '<img src="' + contents[0].properties[0].pics[post].img + '" alt="">' + '</a>')



            }
        });

        $("#application").click(function () {
            RemoveHtml();
            $("#branding, #website, #3d").removeClass("active item-active");
            $("#application").addClass("active item-active");
            for (var post = 0; post < 6; post++) {
                $(".images_thumbnails").append('<div class="col-4 mb-4">' + '<div class="w-100">' + '<img data-toggle="modal"  data-target="#exampleModal" class="service_img" src="' + contents[1].properties[post].thumbnail + '" alt="Card image cap">' + '</div>' + '</div>');
            }

        });

        $("#website").click(function () {
            RemoveHtml();
            $("#application, #branding, #3d").removeClass("active item-active");
            $("#website").addClass("active item-active");
            for (var post = 0; post < 6; post++) {
                $(".images_thumbnails").append('<div class="col-4 mb-4">' + '<div class="w-100">' + '<img data-toggle="modal"  data-target="#exampleModal" class="service_img" src="' + contents[2].properties[post].thumbnail + '" alt="Card image cap">' + '</div>' + '</div>');
            }

        });

        $("#3d").click(function () {
            RemoveHtml();
            $("#application, #website, #branding").removeClass("active item-active");
            $("#3d").addClass("active item-active");

            for (var post = 0; post < 6; post++) {
                $(".modal").attr('id', contents[3].properties[post].name);
                $(".images_thumbnails").append('<div class="col-4 mb-4">' + '<div class="w-100">' + '<img data-toggle="modal"  data-target="#' + contents[3].properties[post].name + '"class="service_img" src="' + contents[3].properties[post].thumbnail + '" alt="Card image cap">' + '</div>' + '</div>');
                owl.trigger('add.owl.carousel', [jQuery('<div class="item" data-hash="' + contents[3].properties[0].pics[post].id + '">' + '<img src="' + contents[3].properties[0].pics[post].img + '" alt="">' + '</div>')]);
                owl.trigger('refresh.owl.carousel');
                $(".menu_slider").append('<a href="#' + contents[3].properties[0].pics[post].id + '">' + '<img src="' + contents[3].properties[0].pics[post].img + '" alt="">' + '</a>')
            }

        });
        if ($("#branding").hasClass("active")) {
            for (var post = 0; post < 6; post++) {
                $(".modal").attr('id', contents[0].properties[post].name);
                $(".images_thumbnails").append('<div class="col-4 mb-4">' + '<div class="w-100">' + '<img data-toggle="modal"  data-target="#' + contents[0].properties[post].name + '" class="service_img" src="' + contents[0].properties[post].thumbnail + '" alt="Card image cap">' + '</div>' + '</div>');
                owl.trigger('add.owl.carousel', [jQuery('<div class="item" data-hash="' + contents[0].properties[0].pics[post].id + '">' + '<img src="' + contents[0].properties[0].pics[post].img + '" alt="">' + '</div>')]);
                owl.trigger('refresh.owl.carousel');
                $(".menu_slider").append('<a href="#' + contents[0].properties[0].pics[post].id + '">' + '<img src="' + contents[0].properties[0].pics[post].img + '" alt="">' + '</a>')
            }

        }

        // <a href="#zero"> <img src="assets/images/Logo Design/2.png" alt=""></a>
        // <a href="#one"> <img src="assets/images/Logo Design/2.png" alt=""></a>
        // <a href="#two"> <img src="assets/images/Logo Design/2.png" alt=""></a>
        // <a href="#one"> <img src="assets/images/Logo Design/2.png" alt=""></a>
        // <a href="#two"> <img src="assets/images/Logo Design/2.png" alt=""></a>









        function RemoveHtml() {

            $(".menu_slider").empty();
            // $(".owl-carousel").empty();
            $(".images_thumbnails").empty();

        }

    });


    






    // <a href="#" id="branding" class="list-group-item list-group-item-action active item-active pl-5 mt-5">Branding</a>
    // <a href="#" id="applications" class="list-group-item list-group-item-action pl-5">Applications</a>
    // <a href="#" id="websites" class="list-group-item list-group-item-action pl-5">Websites</a>
    // <a href="#" id="3D" class="list-group-item list-group-item-action pl-5">3D</a>





});