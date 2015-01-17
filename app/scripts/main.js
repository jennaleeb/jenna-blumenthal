'use strict';

(function($) {
  $(document).ready(function() {
    // Add your jQuery code here
    $(".timeline-item").hover(function () {
    $(".timeline-item").removeClass("active");
    $(this).toggleClass("active");
    $(this).prev(".timeline-item").toggleClass("close");
    $(this).next(".timeline-item").toggleClass("close");
});
  });
})(jQuery);
