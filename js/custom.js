(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);

"use strict";
'use strict';

"use strict";
'use strict';

"use strict";
'use strict';

"use strict";
'use strict';

"use strict";
'use strict';

// Adds the chat button
(function () {
  var lc = document.createElement('script');lc.type = 'text/javascript';lc.async = 'true';
  lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'lbcc.libanswers.com/load_chat.php?hash=4a8b06af7555683f6db42e4fdb34243a';
  var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(lc, s);
})();

// Ends the chat button


// Adds the chat button
(function () {
  var lc = document.createElement('script');lc.type = 'text/javascript';lc.async = 'true';
  lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'lbcc.libanswers.com/load_chat.php?hash=4a8b06af7555683f6db42e4fdb34243a';
  var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(lc, s);
})();

// Ends the chat button

//Auto generated code by primo app store DO NOT DELETE!!! -START-
angular.module('hathiTrustAvailability', []).value('hathiTrustIconPath', 'custom/CENTRAL_PACKAGE/img/hathitrust.svg').constant('hathiTrustBaseUrl', "https://catalog.hathitrust.org/api/volumes/brief/json/").config(['$sceDelegateProvider', 'hathiTrustBaseUrl', function ($sceDelegateProvider, hathiTrustBaseUrl) {
  var urlWhitelist = $sceDelegateProvider.resourceUrlWhitelist();
  urlWhitelist.push(hathiTrustBaseUrl + '**');
  $sceDelegateProvider.resourceUrlWhitelist(urlWhitelist);
}]).factory('hathiTrust', ['$http', '$q', function ($http, $q) {
  var svc = {};
  var hathiTrustBaseUrl = "https://catalog.hathitrust.org/api/volumes/brief/json/";

  svc.findFullViewRecord = function (ids) {
    var deferred = $q.defer();

    var handleResponse = function handleResponse(resp) {
      var data = resp.data;
      var fullTextUrl = null;
      for (var i = 0; !fullTextUrl && i < ids.length; i++) {
        var result = data[ids[i]];
        for (var j = 0; j < result.items.length; j++) {
          var item = result.items[j];
          if (item.usRightsString.toLowerCase() === "full view") {
            fullTextUrl = result.records[item.fromRecord].recordURL;
            break;
          }
        }
      }
      deferred.resolve(fullTextUrl);
    };

    if (ids.length) {
      var hathiTrustLookupUrl = hathiTrustBaseUrl + ids.join('|');
      $http.jsonp(hathiTrustLookupUrl, { cache: true, jsonpCallbackParam: 'callback' }).then(handleResponse).catch(function (e) {
        console.log(e);
      });
    } else {
      deferred.resolve(null);
    }

    return deferred.promise;
  };

  return svc;
}]).controller('hathiTrustAvailabilityStudioController', ['hathiTrust', 'hathiTrustIconPath', function (hathiTrust, hathiTrustIconPath) {
  var self = this;
  self.hathiTrustIconPath = hathiTrustIconPath;

  self.$onInit = function () {
    setDefaults();
    if (!(isOnline() && self.hideOnline)) {
      updateHathiTrustAvailability();
    }
  };

  var setDefaults = function setDefaults() {
    if (!self.msg) self.msg = 'Full Text Available at HathiTrust';
  };

  var isOnline = function isOnline() {
    return self.prmSearchResultAvailabilityLine.result.delivery.GetIt1.some(function (g) {
      return g.links.some(function (l) {
        return l.isLinktoOnline;
      });
    });
  };

  var updateHathiTrustAvailability = function updateHathiTrustAvailability() {
    var hathiTrustIds = (self.prmSearchResultAvailabilityLine.result.pnx.addata.oclcid || []).map(function (id) {
      return "oclc:" + id;
    });
    hathiTrust.findFullViewRecord(hathiTrustIds).then(function (res) {
      self.fullTextLink = res;
    });
  };
}]).component('hathiTrustAvailabilityStudio', {
  require: {
    prmSearchResultAvailabilityLine: '^prmSearchResultAvailabilityLine'
  },
  bindings: {
    hideOnline: '<',
    msg: '@?'
  },
  controller: 'hathiTrustAvailabilityStudioController',
  template: '<span ng-if="$ctrl.fullTextLink" class="umnHathiTrustLink">\
                <md-icon md-svg-src="{{$ctrl.hathiTrustIconPath}}" alt="HathiTrust Logo"></md-icon>\
                <a target="_blank" ng-href="{{$ctrl.fullTextLink}}">\
                {{ ::$ctrl.msg }}\
                  <prm-icon external-link="" icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"></prm-icon>\
                </a>\
              </span>'
});

app.requires.push('hathiTrustAvailability');

//Auto generated code by primo app store DO NOT DELETE!!! -END-
//Auto generated code by primo app store DO NOT DELETE!!! -START-
app.constant('primoExploreUnpaywallStudioConfig', [{ "showOnResultsPage": true, "showVersionLabel": true, "logToConsole": true, "showDebugTable": false, "publishEvents": false }]);
//Auto generated code by primo app store DO NOT DELETE!!! -END-

// Begin BrowZine - Primo Integration...
  window.browzine = {
  
    api: "https://public-api.thirdiron.com/public/v1/libraries/3199",
    apiKey: "0a5bcee0-6114-4741-82fa-be8f0ede5b2e",
    
    journalCoverImagesEnabled: true,
    
    journalBrowZineWebLinkTextEnabled: true,
    journalBrowZineWebLinkText: "View Journal Contents",
    
    articleBrowZineWebLinkTextEnabled: true,
    articleBrowZineWebLinkText: "View Issue Contents",
    
    articlePDFDownloadLinkEnabled: true,
    articlePDFDownloadLinkText: "Download PDF",
    
    articleLinkEnabled: true,
    articleLinkText: "Read Article",
    
    printRecordsIntegrationEnabled: true,
    showFormatChoice: false,
    showLinkResolverLink: true,
    enableLinkOptimizer: true,
  
    articleRetractionWatchEnabled: true,
    articleRetractionWatchText: "Retracted Article",
    
    unpaywallEmailAddressKey: "cbaldonado@lbcc.edu",
    articlePDFDownloadViaUnpaywallEnabled: true,
    articlePDFDownloadViaUnpaywallText: "Download PDF (via Unpaywall)",
    articleLinkViaUnpaywallEnabled: true,
    articleLinkViaUnpaywallText: "Read Article (via Unpaywall)",
    articleAcceptedManuscriptPDFViaUnpaywallEnabled: true,
    articleAcceptedManuscriptPDFViaUnpaywallText: "Download PDF (Accepted Manuscript via Unpaywall)",
    articleAcceptedManuscriptArticleLinkViaUnpaywallEnabled: true,
    articleAcceptedManuscriptArticleLinkViaUnpaywallText: "Read Article (Accepted Manuscript via Unpaywall)",
  };

  browzine.script = document.createElement("script");
  browzine.script.src = "https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js";
  document.head.appendChild(browzine.script);

  app.controller('prmSearchResultAvailabilityLineAfterController', function($scope) {
    window.browzine.primo.searchResult($scope);
  });

  app.component('prmSearchResultAvailabilityLineAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmSearchResultAvailabilityLineAfterController'
  });
// ... End BrowZine - Primo Integration

})();