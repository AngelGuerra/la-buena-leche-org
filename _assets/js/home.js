$(function() {
  var $body = $('body');

  if ($('#home').length) {

    $body.on('click', '.custom-card', function() {
      $(this).find('a')[0].click();
    }).on('click', '.custom-card a', function(event) {
      event.stopPropagation();
    });

    // https://github.com/sdepold/jquery-rss
    $("#entries").rss(
      "http://compartiendocrianza.blogspot.com/atom.xml",
      {
        limit: 4, // default: 4
        // offsetStart: false,
        // offsetEnd: false,
        ssl: true,
        // host: 'feedrapp.info',
        layoutTemplate: "<div class=\"row\">{entries}</div>",
        entryTemplate: "<div class=\"col-12 col-sm-6 col-lg-3 mb-3\">\
        <div class=\"card custom-card\">\
        <img class=\"card-img-top\" src=\"{teaserImageUrl}\" alt=\"{title}\">\
        <div class=\"card-header\"><p>{title}</p><small>{date}</small></div>\
        <div class=\"card-body\">\
        <p class=\"card-text\">{shortBodyPlain}... <a href=\"{url}\" target=\"_blank\" rel=\"me\">seguir leyendo <i class=\"fas fa-external-link-alt\"></i></a></p>\
        </div>\
        </div>\
        </div>",
        // tokens: {},
        dateFormat: 'DD/MM/YYYY',
        dateLocale: 'es',
        // dateFormatFunction: function(date){},
        // effect: 'slideFastSynced', // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        // error: function() { throw new Error("jQuery RSS: url don't link to RSS-Feed") },

        // a callback, which gets triggered when everything was loaded successfully
        // this is an alternative to the next parameter (callback function)
        // default: function(){}
        // success: function() {},
        // a callback, which gets triggered once data was received but before the rendering.
        // this can be useful when you need to remove a spinner or something similar
        onData: function () {
          $('#loader').remove();
        }
      },

      // callback function
      // called after feeds are successfully loaded and after animations are done
      function callback() {
        var $elements = $('.custom-card').find('img');
        $elements.each(function(index) {
          var $this = $(this);
          if ($this.attr('src') === '') {
            // TODO: Poner imagen por defecto
            $this.remove();
          }
        });
      }
    );
  }
});
