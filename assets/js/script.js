//hero section jquery scroll action

      $('#scrollToFeatures').click(function () {
      $('html, body').animate({
      scrollTop: $('#features').offset().top
      }, 800);
      });

//contact section javascript submit action

    $('#contactForm').submit(function (e) {
    e.preventDefault();
    alert("Message sent successfully! (Thank You for Reaching us)");
    });

// Owl Carousel initialization (if present)
    if ($('.owl-carousel').length) {
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{ items:1 },
                600:{ items:2 },
                1000:{ items:3 }
            }
        });
    }
