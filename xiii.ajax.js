(function(window) {

  "use strict";

  var isFunction = function(obj) { return Object.prototype.toString.call(obj) === "[object Function]"; },

    ajax = function(url, option) {

      option || ( option = {} );

      var xmlHttpRequest = new window.XMLHttpRequest,

        loadListener,

        errorListener;



      ( isFunction(option) || isFunction(option.load) ) && xmlHttpRequest.addEventListener("load", loadListener = function(e) {

        xmlHttpRequest.removeEventListener("load", loadListener, false);

        var response = {

          text: (function() {

            try { return xmlHttpRequest.responseText; }
            catch ( e ) {}

          })(),

          xml: (function() {

            try { return xmlHttpRequest.responseXML; }
            catch ( e ) {}

          })(),

          option: xmlHttpRequest.response

        };

        var header = {

          date: xmlHttpRequest.getResponseHeader("date"),

          server: xmlHttpRequest.getResponseHeader("server"),

          mime: xmlHttpRequest.getResponseHeader("content-type"),

          size: xmlHttpRequest.getResponseHeader("content-length")

        };

        isFunction(option) && option.call(this, response, header, e);
        isFunction(option.load) && option.load.call(this, response, header, e);

      }, false);



      isFunction(option.error) && xmlHttpRequest.addEventListener("error", errorListener = function(e) {

        xmlHttpRequest.removeEventListener("error", errorListener, false);

        option.error.call(this, e);

      }, false);



      if ( typeof option.data === "object" ) {

        url += "?";

        for ( var name in option.data ) {

          url += name + "=" + option.data[name] + "&";

        }

        url = url.slice(0, -1);

      }



      xmlHttpRequest.open("GET", url, true);

      option.mime && xmlHttpRequest.overrideMimeType && xmlHttpRequest.overrideMimeType(option.mime);

      option.type && ( xmlHttpRequest.responseType = option.type );

      xmlHttpRequest.send(null);

      return xmlHttpRequest;

    };

  window.XIII || ( window.XIII = {} );

  window.XIII.ajax = ajax;

})(window);