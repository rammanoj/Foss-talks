$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  // Remove links that don't actually link to anything
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name='  this.hash.slice(1)  ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();

        var scrollTop = target.offset().top - $('.sticky-top').height();

        $('html, body').animate({
          scrollTop: scrollTop
        }, 1000)
      }
    }
});
