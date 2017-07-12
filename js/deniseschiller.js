function transitionBackground() {
  var $body   = $("body");
  var current = BackgroundCounter.current;
  var next    = current + 1;
  var total   = BackgroundCounter.total;
  var prefix  = 'step-';
  // var $footer = $("footer");

  $body.removeClass(prefix + current);
  next = (next >= total) ? 0 : next;
  $body.addClass(prefix + next);
 
  BackgroundCounter.current = next;
  // $footer.html(next + 1);
};

function transitionBackgroundBack() {
  var $body   = $("body");
  var current = BackgroundCounter.current; 
  var prefix  = 'step-';

  $body.removeClass(prefix + current);

  if (current == 0) {
    BackgroundCounter.current = BackgroundCounter.total - 2;
  } else if (current == 1) {
    BackgroundCounter.current = BackgroundCounter.total - 1;
  } else {
    BackgroundCounter.current = current - 2;
  };
  transitionBackground();
};

$(document).ready(function() {
  var $body     = $("body");
  var $left     = $("#left");
  var $right    = $("#right")
  var $menuLink = $('a[href="' + document.location.pathname + '"]:not(.projects-title)');
  var $projects = $menuLink.parents(".projects");

  $menuLink.parent().addClass('active');

  if ($projects.length) {
    $projects.find('ul').removeClass('hidden');
  };

  if (BackgroundCounter.total > 0) {
    var seconds  = 5000;
    var interval = window.setInterval(transitionBackground, seconds);

    $body.addClass('step-0');

    $body.on("keyup", function(e) {
      if (e.keyCode == 37) {
        window.clearInterval(interval);
        transitionBackgroundBack();
      } else if (e.keyCode == 39) {
        window.clearInterval(interval);
        transitionBackground();
      };
    });

    $left.on("click", transitionBackgroundBack);
    $right.on("click", transitionBackground);
  } else {
    // $footer.addClass("hidden");
    $left.addClass("hidden");
    $right.addClass("hidden");
  };
});
