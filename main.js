$(document).ready(function() {
      $("nav").find("li").on("click", "a", function() {
        $('.navbar-collapse.in').collapse('hide');
      });
      // Add smooth scrolling to all nav links
      $(".navbar a, footer a[href='#home']").on('click', function(event) {
        if (this.hash !== "" && $(window).width() > 480) {
          // Prevent default anchor click behavior
          event.preventDefault();
          // Store hash
          var hash = this.hash;
          // Scroll to hash tag in 700 ms
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 700, function() {
            // Add hash (#) to URL when done scrolling
            window.location.hash = hash;
          });
        }
      });
    });
