;(function($) {
  $(document).ready(function() {
    var presentations = [
        {"name":"Widgets","file":"Widgets.html", "date": "Nov 2012", "screenshot":"Widgets.png"},
        {"name":"Devoxx 2012","file":"Devoxx2012.html", "date": "Dec 2012", "screenshot":"Devoxx2012.png"},
        {"name":"Akka, Spray and a bit of scala","file":"AkkaSpray.html", "date": "", "screenshot":"AkkaSpray.png"}
      ]

      for (var i=0;i<presentations.length;i++) {
          $('<div><h3>'+ presentations[i].name + '</h3><a href="'+presentations[i].file+'"><img src="images/'+ presentations[i].screenshot+'" /></a></div>')
            .width("200px")
            .appendTo('.container');
      }

  });
})(jQuery)