$(function(){

  function findRSVPs(data) {
    var rsvps = { "rsvps": [] }
    for (var i=0; i<data['links'].length; i++) {
      var link = data['links'][i];
      if (link['activity']['type'] == 'rsvp') {
        var rsvp = {
          "rsvp": link['data']['rsvp'],
          "url": link['data']['url'],
          "author": {
            "name": link['data']['author']['name'],
            "photo": link['data']['author']['photo']
          }
        }
        switch (link['data']['rsvp']) {
          case 'yes':
            rsvp['icon'] = 'fa-calendar-check-o';
            rsvp['label'] = 'is coming.';
            break;
          case 'no':
            rsvp['icon'] = 'fa-calendar-times-o';
            rsvp['label'] = 'is not coming.';
            break;
          case 'maybe':
            rsvp['icon'] = 'fa-calendar-minus-o';
            rsvp['label'] = 'may be coming.';
            break;
          case 'interested':
            rsvp['icon'] = 'fa-calendar-o';
            rsvp['label'] = 'is interested.';
            break;
        }
        rsvps['rsvps'].push(rsvp);
      }
    }
    return rsvps;
  }

  function buildRSVPs(rsvps) {
    var template = $('#template').html();
    var rendered = Mustache.render(template, rsvps);
    $('#webmentions').html(rendered);
  }

  if ($('#webmentions').length) {
    $.getJSON("https://webmention.io/api/mentions?jsonp=?", {
      target: PAGE_URL
    }, function(data) {
      console.log(data);
      var rsvps = findRSVPs(data);
      buildRSVPs(rsvps);
    });
  }

});