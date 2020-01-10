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
        <p class=\"card-text\">{shortBodyPlain}... <a href=\"{url}\" rel=\"me\">seguir leyendo <i class=\"fas fa-external-link-alt\"></i></a></p>\
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
          $('#entries').find('.loader').remove();
        }
      },

      // callback function
      // called after feeds are successfully loaded and after animations are done
      function callback() {
        var $elements = $('.custom-card').find('img');
        $elements.each(function(index) {
          var $this = $(this);
          if ($this.attr('src') === '') {
            $this.attr('src', '/static/img/bebe.png');
          }
        });
      }
    );
  }

  var template = "<div class=\"row pt-3 pb-2 border-bottom\">\
  <div class=\"col-12 col-lg-3 col-xl-2\"><p class=\"h5 text-muted\">MONTH DAY</p></div>\
  <div class=\"col-12 col-lg-3 col-xl-2\"><p class=\"h5 text-muted\">START &ndash; END</p></div>\
  <div class=\"col-12 col-lg-6 col-xl-8\"><p class=\"h5 text-right\">LOCATION &ndash; PLACE</p></div>\
  </div>";
  var meetings = $.ajax('/sources/meetings/2020.json');
  $.when(meetings).then(function(data, textStatus, jqXHR) {
    if (jqXHR.status === 200) {
      var all  = [],
          next = [],
          html = [];

      $.each(data, function(i, meeting) {
        $.each(meeting.dates, function(i, date) {
          all.push(date);
        });
      });

      all = $.grep(all, function(date) {
        var today = new Date().setHours(0, 0, 0);
        return today <= new Date(date);
      });

      all.sort();
      next = all.slice(0, 5);

      $.each(next, function(i, date) {
        $.each(data, function(i, meeting) {
          if ($.inArray(date, meeting.dates) !== -1) {
            var item;
            item = template.replace('MONTH', moment(date).format('MMMM'));
            item = item.replace('DAY', moment(date).format('DD'));
            item = item.replace('START', meeting.start);
            item = item.replace('END', meeting.end);
            item = item.replace('LOCATION', meeting.location);
            item = item.replace('PLACE', meeting.place);
            html.push(item);
            return;
          }
        });
      });

      $('#meetings').find('.loader').remove();
      $("#meetings").append(html.join("\n"));
    }
  });
});
