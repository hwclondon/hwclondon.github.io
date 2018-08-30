if ( document.getElementById("webmentions") ) {

  new Vue({

    el: '#webmentions',

    data: {
      rsvps: []
    },

    mounted() {

      const pageUrl = document.querySelectorAll("link[rel~=canonical]")[0].href;
      const apiUrl = "https://webmention.io/api/mentions?jsonp&target=";

      axios.get(apiUrl + encodeURIComponent(pageUrl))
        .then(response => this.rsvps = response.data.links)
        .catch(e => {
          console.log(this.errors.push(e));
      });

    },

    computed: {

      rsvpYes: function () {
        return this.rsvps.filter(function (rsvp) {
          return rsvp.data.rsvp === 'yes'
        })
      },

      rsvpNo: function () {
        return this.rsvps.filter(function (rsvp) {
          return rsvp.data.rsvp === 'no'
        })
      },

      rsvpInterested: function () {
        return this.rsvps.filter(function (rsvp) {
          if ( rsvp.data.rsvp === 'interested' || rsvp.data.rsvp === undefined || rsvp.data.rsvp === '' ) {
            return rsvp.data.rsvp;
          }
        })
      }
    }

  });

}
