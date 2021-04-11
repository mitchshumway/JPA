

var forButton = document.getElementById(fourth);

//eventually needs to trigger contact form
function getForm(){
    console.log("hello")
}

//makes sections fade in/fade out
//http://jsfiddle.net/eLwex993/5/
$(window).on("load", function() {
    function fade(pageLoad) {
      var windowTop = $(window).scrollTop(),
        windowBottom = windowTop + $(window).innerHeight();
      var min = 0.1,
        max = 1,
        threshold = 0.01;
  
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectHeight = $(this).outerHeight(),
          objectTop = $(this).offset().top,
          objectBottom = $(this).offset().top + objectHeight;
  
        /* Fade element in/out based on its visible percentage */
        if (objectTop < windowTop) {
          if (objectBottom > windowTop) {
            $(this).fadeTo(0, min + ((max - min) * ((objectBottom - windowTop) / objectHeight)));
          } else if ($(this).css("opacity") >= min + threshold || pageLoad) {
            $(this).fadeTo(0, min);
          }
        } else if (objectBottom > windowBottom) {
          if (objectTop < windowBottom) {
            $(this).fadeTo(0, min + ((max - min) * ((windowBottom - objectTop) / objectHeight)));
          } else if ($(this).css("opacity") >= min + threshold || pageLoad) {
            $(this).fadeTo(0, min);
          }
        } else if ($(this).css("opacity") <= max - threshold || pageLoad) {
          $(this).fadeTo(0, max);
        }
      });
    }
    fade(true); //fade elements on page-load
    $(window).scroll(function() {
      fade(false);
    }); //fade elements on scroll
  });

  //makes buttons fade in/fade out
$(window).on("load", function() {
  function fade(pageLoad) {
    var windowTop = $(window).scrollTop(),
      windowBottom = windowTop + $(window).innerHeight();
    var min = 0.2,
      max = .6,
      threshold = 0.1;

    $(".button-fade").each(function() {
      /* Check the location of each desired element */
      var objectHeight = $(this).outerHeight(),
        objectTop = $(this).offset().top,
        objectBottom = $(this).offset().top + objectHeight;

      /* Fade element in/out based on its visible percentage */
      if (objectTop < windowTop) {
        if (objectBottom > windowTop) {
          $(this).fadeTo(0, min + ((max - min) * ((objectBottom - windowTop) / objectHeight)));
        } else if ($(this).css("opacity") >= min + threshold || pageLoad) {
          $(this).fadeTo(0, min);
        }
      } else if (objectBottom > windowBottom) {
        if (objectTop < windowBottom) {
          $(this).fadeTo(0, min + ((max - min) * ((windowBottom - objectTop) / objectHeight)));
        } else if ($(this).css("opacity") >= min + threshold || pageLoad) {
          $(this).fadeTo(0, min);
        }
      } else if ($(this).css("opacity") <= max - threshold || pageLoad) {
        $(this).fadeTo(0, max);
      }
    });
  }
  fade(true); //fade elements on page-load
  $(window).scroll(function() {
    fade(false);
  }); //fade elements on scroll
});



//makes buttons start under video
//needs to be adapted for other devices/aspect ratios
$(window).scroll(function(){
  $("#buttons").css("top",Math.max(0,830-$(this).scrollTop()));
});