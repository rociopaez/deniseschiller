$(document).ready(function() {
  var $body   = $("body");
  var $footer = $("footer");
  var prefix  = 'step-';

  var transitionBackground = function() {
    var current = BackgroundCounter.current;
    var next    = current + 1;
    var total   = BackgroundCounter.total;

    $body.removeClass(prefix + current);
    next = (next >= total) ? 0 : next;
    $body.addClass(prefix + next);
 
    BackgroundCounter.current = next;
    $footer.html(next + 1);
  };

  $('a[href="' + document.location.pathname + '"]').parent().addClass('active');

  if (BackgroundCounter.total > 0) {
    var seconds  =10000;
    var interval = window.setInterval(transitionBackground, seconds);

    $body.addClass(prefix + '0');

    $body.on("keyup", function(e) {
      if (e.keyCode == 37) {
        window.clearInterval(interval);

        current = BackgroundCounter.current; 
        $body.removeClass(prefix + current);

        if (current == 0) {
          BackgroundCounter.current = BackgroundCounter.total - 2;
        } else if (current == 1) {
          BackgroundCounter.current = BackgroundCounter.total - 1;
        } else {
          BackgroundCounter.current = current - 2;
        };
        transitionBackground();
      } else if (e.keyCode == 39) {
        clearInterval(interval);

        transitionBackground();
      };
    });
  }
});
