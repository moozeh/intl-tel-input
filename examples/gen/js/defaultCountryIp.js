var input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function(callback) {
    $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
      var countryCode = (resp && resp.country) ? resp.country : "us";
      callback(countryCode);
    });
  },
  utilsScript: "../../build/js/utils.js?1680898893466" // just for formatting/placeholders etc
});
