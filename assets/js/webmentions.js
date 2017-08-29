if ( document.getElementById("webmentions") ) {

new Vue({

    el: '#webmentions',

    data: {
      rsvps: []
    },

    mounted() {
      const pageUrl = document.querySelectorAll("link[rel~=canonical]")[0].href
      const apiUrl = "https://webmention.io/api/mentions?jsonp&target="
      axios.get(apiUrl + encodeURIComponent(pageUrl))
        .then(response => this.rsvps = response.data.links)
    }

  })

}
