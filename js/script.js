$(document).ready(function(){       
  var scroll_pos = 0;
  $(document).scroll(function() { 
     scroll_pos = $(this).scrollTop();
       if(scroll_pos > 210) {
         $(".navbar").css('background-color', '#4630AB');
       } else {
         $(".navbar").css('background-color', 'rgba(0, 0, 0, 0.1)');
       }
  });

            window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

  $('.navbar-nav li a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
  });

});