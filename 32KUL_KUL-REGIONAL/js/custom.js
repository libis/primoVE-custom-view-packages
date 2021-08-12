(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Declare your components here.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Rewrite this when imports can be done dynamically
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       http://2ality.com/2017/01/import-operator.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       KULeuven/LIBIS (c) 2017
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Mehmet Celik
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

/* import your component configuration*/


require('./utils');

var _regViewOtherMembers = require('./components/prmAlmaOtherMembersAfter/regViewOtherMembers');

var _regViewAvailabilityLine = require('./components/prmSearchResultAvailabilityLineAfter/regViewAvailabilityLine');

var _fullViewSectionOrdering = require('./components/prmFullViewAfter/fullViewSectionOrdering');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AfterComponents = function () {
  function AfterComponents() {
    _classCallCheck(this, AfterComponents);
  }

  _createClass(AfterComponents, null, [{
    key: 'all',
    get: function get() {
      /*
        name = the sub element in the after element
        config = the imported configuration object
        enabled = true/false should the component be created
        appendTo = The component should be created in this after component.
          ex. {name: 'home-icon', config: homeIconConfig, enabled: true, appendTo: 'prm-logo-after'}
        results in:
          <prm-logo-after parentCtrl='$ctrl'>
            <home-icon parentCtrl='$ctrl'></home-icon>
          </prm-logo-after>
      */
      return [
      /*
      {name: 'libis-experiment', config: experimentConfig, enabled: false, appendTo: 'prm-messages-and-blocks-overview-after', enableInView: '.*'},
      {name: 'libis-remove-user-area', config: removeUserAreaConfig, enabled: false, appendTo: 'prm-user-area-expandable-after', enableInView: '.*'},      
      */
      { name: 'libis-only-members', config: _regViewOtherMembers.regViewOtherMembersConfig, enabled: true, appendTo: 'prm-alma-other-members-after', enableInView: '.*' }, { name: 'libis-availability-line', config: _regViewAvailabilityLine.regViewAvailabilityLineConfig, enabled: true, appendTo: 'prm-search-result-availability-line-after', enableInView: '.*' }, { name: 'libis-full-view-section-ordering', config: _fullViewSectionOrdering.fullViewSectionOrderingConfig, enabled: true, appendTo: 'prm-full-view-after', enableInView: '.*' }].filter(function (component) {
        return component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid);
      });
    }
  }]);

  return AfterComponents;
}();

exports.default = AfterComponents;

},{"./components/prmAlmaOtherMembersAfter/regViewOtherMembers":2,"./components/prmFullViewAfter/fullViewSectionOrdering":3,"./components/prmSearchResultAvailabilityLineAfter/regViewAvailabilityLine":4,"./utils":16}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var regViewOtherMembersController = function () {
  function regViewOtherMembersController($scope, $element, $compile, $http, $rootScope) {
    _classCallCheck(this, regViewOtherMembersController);

    var self = this;
    self.$scope = $scope;
    self.$rootScope = $rootScope;
    self.$element = $element;
    /*
        console.log(  $rootScope )
        console.log( self )
        console.log(  self.parentCtrl.parentCtrl )
    */
    var itemDelivery = self.parentCtrl.parentCtrl.$scope.$parent.$parent.$parent.$ctrl.item.delivery;

    /*
    Alleen in eigen instelling
    http://localhost:8003/discovery/fulldisplay?docid=alma9925641190101488&context=L&vid=32KUL_KUL:LIBISNET2_UNION&lang=en&search_scope=DN_and_CI_UCV&adaptor=Local%20Search%20Engine&isFrbr=true&tab=DiscoveryNetwork_UCV&query=any,contains,wood&sortby=date_d&facet=frbrgroupid,include,9009075752282052547&offset=0
    http://localhost:8003/discovery/fulldisplay?docid=alma9992429289701488&context=L&vid=32KUL_KUL:LIBISNET2_UNION&lang=en&search_scope=DN_and_CI_UCV&adaptor=Local%20Search%20Engine&tab=DiscoveryNetwork_UCV&query=any,contains,wood&offset=0
    ====> Dan is er ook geen prm-alma-other-members-after element !!!
    ====> Deze controler zal dan niet worden uitgevoerd.
    
    => FRBR 
    https://libis-network.primo.exlibrisgroup.com/primaws/rest/priv/nz/pnx/P/9930070000101471?record-institution=32KUL_KUL&lang=en
    http://localhost:8003/primaws/rest/priv/nz/pnx/P/9930070000101488?record-institution=32KUL_KUL&lang=en
    
    
    
    
    Niet in eigen instelling
    http://localhost:8003/discovery/search?query=any,contains,9992170794501502&tab=DiscoveryNetwork_UCV&search_scope=DN_and_CI_UCV&vid=32KUL_KUL:LIBISNET2_UNION
    
    */

    if (itemDelivery.serviceMode.includes("ovp")) {
      self.removePrmOpac();
      self.addInstToAlmaInstitutionsList();
    }
    // console.log ( self.parentCtrl.parentCtrl.almaInstitutionsList )
    self.parentCtrl.parentCtrl.almaInstitutionsList.sort(function (a, b) {
      return a.instName > b.instName ? 1 : -1;
    });
  }

  _createClass(regViewOtherMembersController, [{
    key: "addInstToAlmaInstitutionsList",
    value: function addInstToAlmaInstitutionsList() {
      this.parentCtrl.parentCtrl.almaInstitutionsList.push({
        "getitLink": [{
          "displayText": null,
          "linkRecordId": this.parentCtrl.parentCtrl.almaInstitutionsList[0].getitLink[0].linkRecordId
        }],

        "instCode": window.appConfig["primo-view"].institution["institution-code"],
        "instName": window.appConfig["primo-view"].institution["institution-name"],
        "instId": window.appConfig["primo-view"].institution.id,
        "availabilityStatus": "available_in_institution"
      });
    }
  }, {
    key: "removePrmOpac",
    value: function removePrmOpac() {
      var _this = this;

      var unbindWatcher = this.$scope.$watch(function () {
        return _this.$element.parent().parent().parent().find('prm-opac');
      }, function (newVal, oldVal) {
        //console.log (this);
        if (newVal) {
          newVal.find('md-tabs').remove();
          unbindWatcher();
        }
      });

      /*
          Promise.resolve( this.$scope.$parent.$parent.$parent.$parent.$parent.$ctrl.fullViewService.getServices( this.parentCtrl.item, this.parentCtrl.originator) ).then(
            function(services) {
              console.log (services)
              // Add to services if not alread in the list
              //if ( services.findIndex(service => service.scrollId === "altmetrics") < 0 ){
                services.splice(services.length -2, 0, sectionData);
              //}
          })
      */
      /*
      
          var prmOpacElement = document.querySelectorAll('#getit_link1_0 > div > prm-full-view-service-container > div.section-body > div > prm-opac')
          var prmOpacMdTabsElement = document.querySelectorAll('#getit_link1_0 > div > prm-full-view-service-container > div.section-body > div > prm-opac > md-tabs')
          console.log (prmOpacElement)
          console.log (prmOpacMdTabsElement)
          if ( prmOpacElement ) {
            console.log ("remover prmOpacElement")
            prmOpacElement[0].style.backgroundColor = "red";
          }
      */
    }
  }]);

  return regViewOtherMembersController;
}();

regViewOtherMembersController.$inject = ['$scope', '$element', '$compile', '$http', '$rootScope'];

var regViewOtherMembersConfig = exports.regViewOtherMembersConfig = {
  bindings: { parentCtrl: '<' },
  controller: regViewOtherMembersController,
  template: ''
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fullViewSectionOrderingController = function () {
    function fullViewSectionOrderingController($scope) {
        _classCallCheck(this, fullViewSectionOrderingController);

        this.$scope = $scope;
        this.sectionOrderNameList = ["howovp", "ovp", "links", "details", "howovp", "ovp", "citationTrails", "virtualBrowse", "action_list"];
    }

    _createClass(fullViewSectionOrderingController, [{
        key: "$onInit",
        value: function $onInit() {
            this.sectionOrderNameList.unshift("brief");
            try {
                this.$scope.$watch('this.$ctrl.parentCtrl.parentCtrl.services', function (newValue, oldValue, scope) {
                    if (newValue) {
                        /* Only thake the available services from sectionOrderNameList */
                        /* select the services that are not listed in sectionOrderNameList from the available services */
                        /* append them to sectionOrderNameList (they will be displayes at the bottom) */
                        var sectionsServiceNameList = scope.$ctrl.parentCtrl.parentCtrl.services.map(function (s) {
                            return s.serviceName;
                        });
                        var sectionsServiceIncludedNameList = sectionsServiceNameList.filter(function (section) {
                            return scope.$ctrl.sectionOrderNameList.includes(section);
                        });
                        var sectionsServiceExcludedNameList = sectionsServiceNameList.filter(function (section) {
                            return !scope.$ctrl.sectionOrderNameList.includes(section);
                        });
                        var sectionOrderNameList = scope.$ctrl.sectionOrderNameList.filter(function (section) {
                            return sectionsServiceIncludedNameList.includes(section);
                        });
                        sectionOrderNameList = sectionOrderNameList.concat(sectionsServiceExcludedNameList);

                        if (newValue && JSON.stringify(sectionsServiceNameList) !== JSON.stringify(sectionOrderNameList)) {
                            scope.$ctrl.orderingSections(scope.$ctrl.parentCtrl.parentCtrl.services, sectionOrderNameList);
                        }
                    }
                }, true);
            } catch (e) {
                console.error("fullViewSectionOrderingController constructor");
                console.error(e.message);
            }
        }
    }, {
        key: "orderingSections",
        value: function orderingSections(sections, sectionOrderNameList) {
            try {
                // brief is always the first section
                var OrderedSections = sections;
                OrderedSections = OrderedSections.map(function (s) {
                    s.order = sectionOrderNameList.indexOf(s.serviceName);return s;
                });
                OrderedSections = OrderedSections.sort(function (a, b) {
                    return a.order - b.order;
                });
                OrderedSections.forEach(function (section, index) {
                    //    this.parentCtrl.parentCtrl.services[index] = section
                    sections[index] = section;
                });
            } catch (e) {
                console.error("fullViewSectionOrderingController orderingSections");
                console.error(e);
            }
        }
    }]);

    return fullViewSectionOrderingController;
}();

fullViewSectionOrderingController.$inject = ['$scope'];

var fullViewSectionOrderingConfig = exports.fullViewSectionOrderingConfig = {
    bindings: { parentCtrl: '<' },
    controller: fullViewSectionOrderingController,
    template: ''
};

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var regViewAvailabilityLineController = function regViewAvailabilityLineController($scope, $element, $translate) {
    _classCallCheck(this, regViewAvailabilityLineController);

    var self = this;

    self.almaInstitutionsFilterInstCodeList = ["32KUL_HUB", "32KUL_KHM", "32KUL_KHK", "32KUL_KHL", "32KUL_KATHO", "32KUL_LUCAWENK"];

    self.$scope = $scope;
    self.$element = $element;
    self.$translate = $translate;
    self.$ctrl = self.parentCtrl.parentCtrl;
    self.viewInst = window.appConfig["primo-view"].institution.description;

    /*
    console.log( self )
    console.log ( self.$ctrl.result.delivery.almaInstitutionsList )
    console.log ( self.$ctrl)
    console.log ( "displayedAvailability:"+ self.$ctrl.displayedAvailability );
    */
    self.$ctrl.displayedAvailability.forEach(function (availability) {
        /*
        console.log ( "ifShowAvailability(availability):"+ self.$ctrl.ifShowAvailability(availability) );
        console.log ( "!$ctrl.isCollectionDiscoveryCollection:"+ self.$ctrl.isCollectionDiscoveryCollection );
        console.log ( "$ctrl.showTimer:"+ self.$ctrl.showTimer);
        console.log ( "$ctrl.handleDueDate(availability):"+ self.$ctrl.handleDueDate(availability) );
        console.log ( "$ctrl.isPhysical():"+ self.$ctrl.isPhysical());
        console.log ( "$translate.instant('delivery.code.available_in_library') :"+ $translate.instant('delivery.code.'+ self.$ctrl.handleDueDate(availability) )  );
        console.log (  $translate.instant('delivery.code.'+ self.$ctrl.handleDueDate(availability) )  );
        */
        // ng-if="::($ctrl.showDisplayOtherLocations() || $ctrl.showDisplayLocation()  || $ctrl.showOtherLibraries(availability)) && $ctrl.isPhysical($index)"

        var availabilityInstitutions = self.$ctrl.result.delivery.almaInstitutionsList.filter(function (inst) {
            return inst.availabilityStatus === "available_in_institution" && self.almaInstitutionsFilterInstCodeList.includes(inst.instCode);
        });
        //console.log ( availabilityInstitutions.map( inst => inst.instName ).join() );

        var availabilityInstitutionsNames = availabilityInstitutions.map(function (inst) {
            return inst.instName;
        });

        if (availabilityInstitutionsNames.length > 0) {
            if (self.$ctrl.result.delivery.availability[0] === "available_in_library") {
                // replace instname from availabilityText with list of instnames
                availabilityInstitutionsNames.unshift(window.appConfig["primo-view"].institution.description);
                self.$ctrl.availabilityRegView = $translate.instant('delivery.code.' + self.$ctrl.handleDueDate(availability)).replace(window.appConfig["primo-view"].institution.description, availabilityInstitutionsNames.slice(0, -1).join(', ') + ' and ' + availabilityInstitutionsNames.slice(-1));
            }
            // if (self.$ctrl.result.delivery.bestlocation === null) {
            if (self.$ctrl.result.delivery.availability[0] === "no_inventory") {
                //self.$ctrl.displayedAvailability = ["available_in_library"];
                self.$ctrl.result.delivery.availability = ["available_in_library"];
                if (availabilityInstitutionsNames.length === 1) {
                    self.$ctrl.availabilityRegView = $translate.instant('delivery.code.available_in_library').replace(window.appConfig["primo-view"].institution.description, availabilityInstitutionsNames[0]);
                } else {
                    self.$ctrl.availabilityRegView = $translate.instant('delivery.code.available_in_library').replace(window.appConfig["primo-view"].institution.description, availabilityInstitutionsNames.slice(0, -1).join(', ') + ' and ' + availabilityInstitutionsNames.slice(-1));
                }
            }
        }
    });
};

regViewAvailabilityLineController.$inject = ['$scope', '$element', '$translate'];

var regViewAvailabilityLineConfig = exports.regViewAvailabilityLineConfig = {
    bindings: { parentCtrl: '<' },
    controller: regViewAvailabilityLineController,
    template: ''
};

},{}],5:[function(require,module,exports){
'use strict';

var _primo = require('./primo-explore-dom/js/primo');

var _primo2 = _interopRequireDefault(_primo);

var _helper = require('./primo-explore-dom/js/primo/explore/helper');

var _helper2 = _interopRequireDefault(_helper);

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

var _templates = require('./templates');

var _templates2 = _interopRequireDefault(_templates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//make Primo public
/*
  Central Package Loader

  Do NOT edit this file.
  All components are declared in "components.js"

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
window.Primo = _primo2.default;
//load PrimoExplorer UI if angular.reloadWithDebugInfo() is ran
window.setTimeout(function () {
  if (_primo2.default.isDebugEnabled()) {
    var uiURL = 'https://cdn.rawgit.com/mehmetc/primo-explore-dom-ui/fc0868df/js/custom.js';
    //let uiURL = 'http://127.0.0.1:8000/js/custom.js';

    _helper2.default.loadScript(uiURL).then(function () {
      console.log('Injecting UI');
      _primo2.default.explore.ui.toggle();
    });
  }
}, 2000);

var servicesHost = 'https://services.libis.be/';

// let app = angular.module('viewCustom', ['ngMaterial', 'vcRecaptcha','googleAnalytics'])
var app = angular.module('viewCustom', ['ngMaterial', 'vcRecaptcha']);
/*
  .constant('feedbackServiceURL', servicesHost + 'feedback')
  .constant('reportAProblemURL', servicesHost + 'report_a_problem')
  .constant('requestACopyURL', servicesHost + 'request_a_copy')
  .constant('requestACopyOfEsDocURL', servicesHost + 'illjwtform')
  .config(($sceDelegateProvider) => {
    $sceDelegateProvider.resourceUrlWhitelist([
      '**'
    ]);
  })
*/
/*
app.factory('regViewSearchHttpCallInterceptor', regViewSearchHttpCallInterceptor)  
//intercept api calls for database search and change to KUL (only regional views)
var reg_views = ["32KUL_HUB:LIBISNET2_UNION"];
if (reg_views.includes(window.appConfig.vid)) {
  app.config(['$httpProvider', ($httpProvider) => { $httpProvider.interceptors.push('regViewSearchHttpCallInterceptor'); }]);
}
*/

//Contains the after component selectors that will be injected
var afterComponents = {};

//Create all components and determine in which after component these need to be
//injected
console.log('Loading viewCustom components');
_components2.default.all.forEach(function (component) {
  console.log(component.name);
  if (component.enabled) {
    if (component.appendTo) {
      var elements = afterComponents[component.appendTo] || [];
      //elements.push(component.name);
      elements.push({
        'name': component.name,
        'enableInView': component.enableInView
      });
      afterComponents[component.appendTo] = elements;
    }
    app.constant('afterComponents', afterComponents);
    app.component(component.name.toCamelCase(), component.config);
  }
});

console.log('Replace Templates');
_templates2.default.all.forEach(function (template) {
  console.log(template.id);
  app.run(function ($templateCache) {
    $templateCache.put(template.id, template.template);
  });
});

//Inject place holders into the after components
Object.keys(afterComponents).forEach(function (component, i) {
  var subComponents = afterComponents[component];
  /*
    console.log ( subComponents )
    console.log ( subComponents.map(m => `<${m.name} parent-ctrl="$ctrl"></${m.name}>`) )
  */
  app.component(component.toCamelCase(), {
    bindings: {
      parentCtrl: '<'
    },
    template: subComponents.map(function (m) {
      return '<' + m.name + ' parent-ctrl="$ctrl"></' + m.name + '>';
    }).join("")
  });
});

},{"./components":1,"./primo-explore-dom/js/primo":6,"./primo-explore-dom/js/primo/explore/helper":9,"./templates":15}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _explore = require('./primo/explore');

var _explore2 = _interopRequireDefault(_explore);

var _records = require('./primo/records');

var _records2 = _interopRequireDefault(_records);

var _facets = require('./primo/facets');

var _facets2 = _interopRequireDefault(_facets);

var _view = require('./primo/view');

var _view2 = _interopRequireDefault(_view);

var _user = require('./primo/user');

var _user2 = _interopRequireDefault(_user);

var _helper = require('./primo/explore/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Primo main entry class
 */
var Primo = function () {
  function Primo() {
    _classCallCheck(this, Primo);
  }

  _createClass(Primo, null, [{
    key: 'isDebugEnabled',


    /**
     * Check if angular.reloadWithDebugInfo() has ran
     * @return {boolean}
     */
    value: function isDebugEnabled() {
      return _helper2.default.isDebugEnabled();
    }

    /**
     * Did the script ran on a Primo site
     * @return {boolean}
     */

  }, {
    key: 'isPrimoAvailable',
    value: function isPrimoAvailable() {
      return _helper2.default.isPrimoAvailable();
    }

    /**
     * This is a proxy class
     * @return {Explore}
     */

  }, {
    key: 'version',

    /**
     * Return version information
     * @return {string}
     */
    get: function get() {
      var _version = "0.0.10";
      return 'Library:' + _version + ' - Primo:' + window.appConfig['system-configuration'].Primo_Version_Number + ':' + window.appConfig['system-configuration'].Primo_HotFix_Number;
    }
  }, {
    key: 'explore',
    get: function get() {
      return _explore2.default;
    }

    /**
     * Get a pointer to available records
     * @return {Records}
     */

  }, {
    key: 'records',
    get: function get() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        resolve(new _records2.default(_this.explore.components));
      });
      //return new Records(this.explore.components);
    }

    /**
     * Get a pointer to available facets
     * @return {Facets}
     */

  }, {
    key: 'facets',
    get: function get() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        resolve(new _facets2.default(_this2.explore.components));
      });
      //return new Facets(this.explore.components);
    }

    /**
     * Get a pointer to view related metadata
     * @return {View}
     */

  }, {
    key: 'view',
    get: function get() {
      return new Promise(function (resolve, reject) {
        resolve(new _view2.default());
      });
      //return new View();
    }

    /**
     * Get a pointer to user related metadata
     * @return {User}
     */

  }, {
    key: 'user',
    get: function get() {
      return new Promise(function (resolve, reject) {
        _helper2.default.userDetailsHTTP().then(function (userDetails) {
          _helper2.default.userFinesHTTP().then(function (userFines) {
            _helper2.default.userLoansHTTP().then(function (userLoans) {
              resolve(new _user2.default({ details: userDetails, fines: userFines, loans: userLoans }));
            });
          });
        });
      });
    }
  }]);

  return Primo;
}();

exports.default = Primo;

},{"./primo/explore":7,"./primo/explore/helper":9,"./primo/facets":10,"./primo/records":11,"./primo/user":12,"./primo/view":13}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = require('./explore/components');

var _components2 = _interopRequireDefault(_components);

var _helper = require('./explore/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//this is proxy class
var Explore = function () {
  function Explore() {
    _classCallCheck(this, Explore);
  }

  _createClass(Explore, null, [{
    key: 'components',
    get: function get() {
      var c = new _components2.default();
      _helper2.default.componentNames.forEach(function (selector) {
        c.add(selector);
      });

      return c;
    }
  }, {
    key: 'ui',
    get: function get() {
      if (this._ui === undefined) {
        console.error('This is a stub function call "angular.reloadWithDebugInfo()" to activate UI');
      }
      return this._ui;
    }
  }, {
    key: 'helper',
    get: function get() {
      return _helper2.default;
    }
  }]);

  return Explore;
}();

exports.default = Explore;

},{"./explore/components":8,"./explore/helper":9}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helper = require('./helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cssSelectorGenerator = new (require('../../vendor/css-selector-generator.js').CssSelectorGenerator)();

var Component = function () {
  function Component(element) {
    _classCallCheck(this, Component);

    this.element = element;
  }

  _createClass(Component, [{
    key: 'blink',
    value: function blink() {
      _helper2.default.blink(this);
    }
  }, {
    key: 'scope',
    value: function scope() {
      if (_helper2.default.isDebugEnabled()) {
        return angular.element(this.element).scope();
      } else {
        console.error('Please run "angular.reloadWithDebugInfo()" first');
      }
    }
  }, {
    key: 'ctrl',
    value: function ctrl() {
      var c = angular.element(this.element).controller(this.name);
      if (c) {
        return c;
      } else {
        console.log('using alternative method to get controller');
        var scope = this.scope();
        if (scope) {
          var scopeChild = scope.$$childTail;
          if (Object.keys(scope).includes('$ctrl')) {
            return scope.$ctrl;
          } else if (Object.keys(scope).includes('ctrl')) {
            return scope.ctrl;
          } else if (scopeChild && Object.keys(scopeChild).includes('$ctrl')) {
            return scopeChild.$ctrl;
          } else if (scopeChild && Object.keys(scopeChild).includes('ctrl')) {
            return scopeChild.ctrl;
          } else {
            console.error('No $ctrl defined');
          }
        }
      }

      return null;
    }
  }, {
    key: 'cssPath',
    get: function get() {
      return cssSelectorGenerator.getSelector(this.element);
    }
  }, {
    key: 'name',
    get: function get() {
      return this.element.localName;
    }
  }]);

  return Component;
}();

var Components = function () {
  function Components() {
    _classCallCheck(this, Components);

    this._components = {};
  }

  _createClass(Components, [{
    key: 'add',
    value: function add(selector) {
      var elements = _helper2.default.querySelectorAll(selector);
      var elementsArray = this._components[selector] || [];

      elements.forEach(function (element) {
        elementsArray.push(new Component(element));
      });

      this._components[selector] = elementsArray;

      return elementsArray;
    }
  }, {
    key: 'get',
    value: function get(selector) {
      return this._components[selector] || null;
    }
  }, {
    key: 'keys',
    value: function keys() {
      return Object.keys(this._components);
    }
  }]);

  return Components;
}();

exports.default = Components;

},{"../../vendor/css-selector-generator.js":14,"./helper":9}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helper = function () {
    function Helper() {
        _classCallCheck(this, Helper);
    }

    _createClass(Helper, null, [{
        key: 'isDebugEnabled',
        value: function isDebugEnabled() {
            return window.name === 'NG_ENABLE_DEBUG_INFO!' || typeof angular.element(document.querySelector('prm-logo')).scope() != 'undefined' ? true : false;
        }
    }, {
        key: 'isPrimoAvailable',
        value: function isPrimoAvailable() {
            if ('undefined' !== typeof window.angular) {
                if (document.querySelector('primo-explore') !== null) {
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'querySelectorAll',
        value: function querySelectorAll(selector) {
            return Array.from(document.querySelectorAll(selector));
        }
    }, {
        key: 'injector',
        value: function injector() {
            var c = Primo.explore.components.get('primo-explore');
            if (c && c.length > 0) {
                var primoExplore = angular.element(c[0].element);
                var injector = primoExplore.injector();
                if (injector) {
                    return injector;
                }
            }

            return null;
        }
    }, {
        key: 'loadScript',
        value: function loadScript(scriptURL) {
            if (window.angular) {
                var appInjector = angular.injector(['ng', 'angularLoad']);
                if (appInjector) {
                    var angularLoad = appInjector.get('angularLoad');
                    if (angularLoad) {
                        return angularLoad.loadScript(scriptURL);
                    }
                }
            }
        }
    }, {
        key: 'rootScope',
        value: function rootScope() {
            var injector = this.injector();
            if (injector) {
                var rootScope = injector.get('$rootScope');
                if (rootScope) {
                    return rootScope;
                }
            }

            return null;
        }
    }, {
        key: 'userSessionManagerService',
        value: function userSessionManagerService() {
            var rootScope = this.rootScope();
            if (rootScope) {
                return rootScope.$$childHead.$ctrl.userSessionManagerService;
            }

            return null;
        }
    }, {
        key: 'jwtData',
        value: function jwtData() {
            var uSMS = this.userSessionManagerService();
            if (uSMS) {
                var jwtData = uSMS.jwtUtilService.getDecodedToken() || {};
                return jwtData;
            }
        }
    }, {
        key: 'userDetails',
        value: function userDetails() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.userSessionManagerService().$localForage.getItem('userDetails').then(function (userDetails) {
                    return resolve(userDetails);
                });
            });
        }
    }, {
        key: 'userDetailsHTTP',
        value: function userDetailsHTTP() {
            var _this2 = this;

            var viewCode = this.jwtData().viewId || window.appConfig['vid'];
            return new Promise(function (resolve, reject) {
                _this2.http.get('/primo_library/libweb/webservices/rest/v1/usersettings?vid=' + viewCode).then(function (userDetails) {
                    return resolve(userDetails.data);
                });
            });
        }
    }, {
        key: 'userFinesHTTP',
        value: function userFinesHTTP() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                _this3.http.get('/primo_library/libweb/webservices/rest/v1/myaccount/fines').then(function (userFines) {
                    try {
                        var data = userFines.data;
                        if (data.status == 'ok') {
                            var fines = data.data.fines;
                            resolve(fines.fine);
                        } else {
                            console.log('No fines');
                            resolve([]);
                        }
                    } catch (error) {
                        resolve([]);
                    }
                });
            });
        }
    }, {
        key: 'userLoansHTTP',
        value: function userLoansHTTP() {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
                _this4.http.get('/primo_library/libweb/webservices/rest/v1/myaccount/loans').then(function (userLoans) {
                    try {
                        var data = userLoans.data;
                        if (data.status == 'ok') {
                            var loans = data.data.loans;
                            resolve(loans.loan);
                        } else {
                            console.log('No loans');
                            resolve([]);
                        }
                    } catch (error) {
                        resolve([]);
                    }
                });
            });
        }
    }, {
        key: 'blink',
        value: function blink(component) {
            var numberOfBlinks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

            var intervalId = null;
            var borderElement = null;
            var index = Math.floor(Math.random() * (1000 - 1)) + 1;
            var borderSelector = component.element.cssPath + index + 'Rect';

            var createBorderElement = function createBorderElement() {
                if (component && component.element) {
                    var elementRect = component.element.getBoundingClientRect();
                    var _borderElement = document.createElement('div');
                    var _index = Math.floor(Math.random() * (1000 - 1)) + 1;
                    _borderElement.setAttribute('id', borderSelector);
                    _borderElement.style.border = '3px solid red';
                    _borderElement.style.position = 'absolute';
                    _borderElement.style.top = elementRect.top + 'px';
                    _borderElement.style.height = elementRect.height + 'px';
                    _borderElement.style.width = elementRect.width + 'px';
                    _borderElement.style.left = elementRect.left + 'px';
                    document.body.appendChild(_borderElement);

                    return document.querySelector('#' + borderSelector);
                }

                return null;
            };

            var removeBorderElement = function removeBorderElement() {
                if (borderElement) {
                    borderElement.remove();
                }
            };

            var blinkBorderElement = function blinkBorderElement() {
                var numberOfBlinks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;

                window.clearInterval(intervalId);

                if (numberOfBlinks < 0) {
                    removeBorderElement();
                } else {
                    borderElement.style.display = numberOfBlinks % 2 == 0 ? 'none' : 'block';
                    numberOfBlinks--;
                    intervalId = window.setInterval(blinkBorderElement, 1000, numberOfBlinks);
                }
            };

            borderElement = createBorderElement();
            blinkBorderElement(numberOfBlinks);
        }
    }, {
        key: 'componentNames',
        get: function get() {
            var tags = Array.from(document.getElementsByTagName('*'));
            var componentNames = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var tag = _step.value;

                    var tagName = tag.localName;
                    if (/^prm-/.test(tagName) || /^primo-/.test(tagName)) {
                        if (!componentNames.includes(tagName)) {
                            componentNames.push(tagName);
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            componentNames = componentNames.sort().filter(function (e, i, a) {
                return i === a.findIndex(function (e2) {
                    return e === e2;
                });
            });
            return componentNames;
        }
    }, {
        key: 'http',
        get: function get() {
            var injector = this.injector();
            if (injector) {
                var h = injector.get('$http');
                if (h) {
                    return h;
                }
            }

            return null;
        }
    }]);

    return Helper;
}();

exports.default = Helper;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = require('./explore/components');

var _components2 = _interopRequireDefault(_components);

var _helper = require('./explore/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Facets = function () {
    function Facets(components) {
        _classCallCheck(this, Facets);

        return this._facets(components);
    }

    _createClass(Facets, [{
        key: '_facets',
        value: function _facets(components) {
            try {
                if (components) {
                    var c = components.get('prm-facet-after');
                    if (c && c.length > 0) {
                        var ctrl = c[0].ctrl;
                        return ctrl.facetService.results;
                    }
                }
            } catch (e) {
                console.log('trying to get facets through the rootScope');
                try {
                    return _helper2.default.userSessionManagerService().searchStateService.resultObject.facets;
                } catch (e) {
                    console.error('unable to retrieve facets');
                }
            }

            return [];
        }
    }]);

    return Facets;
}();

exports.default = Facets;

},{"./explore/components":8,"./explore/helper":9}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = require('./explore/components');

var _components2 = _interopRequireDefault(_components);

var _helper = require('./explore/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Records = function () {
    function Records(components) {
        _classCallCheck(this, Records);

        return this._items(components);
    }

    _createClass(Records, [{
        key: '_items',
        value: function _items(components) {
            try {
                if (components) {
                    var c = components.get('prm-search-result-list-after');
                    if (c && c.length > 0) {
                        var ctrl = c[0].ctrl();
                        if (ctrl) {
                            return ctrl.itemlist;
                        }
                        throw "try again";
                    }
                }
            } catch (e) {
                console.log('trying to get records through the rootScope');
                try {
                    return _helper2.default.userSessionManagerService().searchStateService.resultObject.data;
                } catch (e) {
                    console.error('unable to retrieve items');
                }
            }

            return [];
        }
    }]);

    return Records;
}();

exports.default = Records;

},{"./explore/components":8,"./explore/helper":9}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helper = require('./explore/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
  function User() {
    var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _skelUser;

    _classCallCheck(this, User);

    var uSms = _helper2.default.userSessionManagerService();
    var jwtData = _helper2.default.jwtData();
    var self = this;

    return {
      id: jwtData.user || '',
      email: user.details.email || '',
      name: jwtData.userName || 'Guest',
      display_name: uSms.getUserNameForDisplay(),
      isLoggedIn: function isLoggedIn() {
        return uSms.getUserName().length > 0;
      },
      isOnCampus: function isOnCampus() {
        return jwtData.onCampus == "true" ? true : false;
      },
      fines: user.fines,
      loans: user.loans
    };
  }

  _createClass(User, [{
    key: '_skelUser',
    get: function get() {
      return {
        details: {},
        fines: {},
        loans: {}
      };
    }
  }]);

  return User;
}();

exports.default = User;

},{"./explore/helper":9}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helper = require('./explore/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function View() {
  _classCallCheck(this, View);

  var uSms = _helper2.default.userSessionManagerService();
  var jwtData = _helper2.default.jwtData();

  return {
    code: jwtData.viewId || window.appConfig['vid'],
    institution: {
      code: jwtData.viewInstitutionCode,
      name: window.appConfig['primo-view']['attributes-map'].institution
    },
    interfaceLanguage: uSms.getUserLanguage() || window.appConfig['primo-view']['attributes-map'].interfaceLanguage,
    ip: {
      address: jwtData.ip
    }
  };
};

exports.default = View;

},{"./explore/helper":9}],14:[function(require,module,exports){
'use strict';

(function () {
  var CssSelectorGenerator,
      root,
      indexOf = [].indexOf || function (item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (i in this && this[i] === item) return i;
    }return -1;
  };

  CssSelectorGenerator = function () {
    CssSelectorGenerator.prototype.default_options = {
      selectors: ['id', 'class', 'tag', 'nthchild']
    };

    function CssSelectorGenerator(options) {
      if (options == null) {
        options = {};
      }
      this.options = {};
      this.setOptions(this.default_options);
      this.setOptions(options);
    }

    CssSelectorGenerator.prototype.setOptions = function (options) {
      var key, results, val;
      if (options == null) {
        options = {};
      }
      results = [];
      for (key in options) {
        val = options[key];
        if (this.default_options.hasOwnProperty(key)) {
          results.push(this.options[key] = val);
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    CssSelectorGenerator.prototype.isElement = function (element) {
      return !!((element != null ? element.nodeType : void 0) === 1);
    };

    CssSelectorGenerator.prototype.getParents = function (element) {
      var current_element, result;
      result = [];
      if (this.isElement(element)) {
        current_element = element;
        while (this.isElement(current_element)) {
          result.push(current_element);
          current_element = current_element.parentNode;
        }
      }
      return result;
    };

    CssSelectorGenerator.prototype.getTagSelector = function (element) {
      return this.sanitizeItem(element.tagName.toLowerCase());
    };

    CssSelectorGenerator.prototype.sanitizeItem = function (item) {
      var characters;
      characters = item.split('').map(function (character) {
        if (character === ':') {
          return "\\" + ':'.charCodeAt(0).toString(16).toUpperCase() + " ";
        } else if (/[ !"#$%&'()*+,.\/;<=>?@\[\\\]^`{|}~]/.test(character)) {
          return "\\" + character;
        } else {
          return escape(character).replace(/\%/g, '\\');
        }
      });
      return characters.join('');
    };

    CssSelectorGenerator.prototype.getIdSelector = function (element) {
      var id, sanitized_id;
      id = element.getAttribute('id');
      if (id != null && id !== '' && !/\s/.exec(id) && !/^\d/.exec(id)) {
        sanitized_id = "#" + this.sanitizeItem(id);
        if (element.ownerDocument.querySelectorAll(sanitized_id).length === 1) {
          return sanitized_id;
        }
      }
      return null;
    };

    CssSelectorGenerator.prototype.getClassSelectors = function (element) {
      var class_string, item, result;
      result = [];
      class_string = element.getAttribute('class');
      if (class_string != null) {
        class_string = class_string.replace(/\s+/g, ' ');
        class_string = class_string.replace(/^\s|\s$/g, '');
        if (class_string !== '') {
          result = function () {
            var k, len, ref, results;
            ref = class_string.split(/\s+/);
            results = [];
            for (k = 0, len = ref.length; k < len; k++) {
              item = ref[k];
              results.push("." + this.sanitizeItem(item));
            }
            return results;
          }.call(this);
        }
      }
      return result;
    };

    CssSelectorGenerator.prototype.getAttributeSelectors = function (element) {
      var attribute, blacklist, k, len, ref, ref1, result;
      result = [];
      blacklist = ['id', 'class'];
      ref = element.attributes;
      for (k = 0, len = ref.length; k < len; k++) {
        attribute = ref[k];
        if (ref1 = attribute.nodeName, indexOf.call(blacklist, ref1) < 0) {
          result.push("[" + attribute.nodeName + "=" + attribute.nodeValue + "]");
        }
      }
      return result;
    };

    CssSelectorGenerator.prototype.getNthChildSelector = function (element) {
      var counter, k, len, parent_element, sibling, siblings;
      parent_element = element.parentNode;
      if (parent_element != null) {
        counter = 0;
        siblings = parent_element.childNodes;
        for (k = 0, len = siblings.length; k < len; k++) {
          sibling = siblings[k];
          if (this.isElement(sibling)) {
            counter++;
            if (sibling === element) {
              return ":nth-child(" + counter + ")";
            }
          }
        }
      }
      return null;
    };

    CssSelectorGenerator.prototype.testSelector = function (element, selector) {
      var is_unique, result;
      is_unique = false;
      if (selector != null && selector !== '') {
        result = element.ownerDocument.querySelectorAll(selector);
        if (result.length === 1 && result[0] === element) {
          is_unique = true;
        }
      }
      return is_unique;
    };

    CssSelectorGenerator.prototype.getAllSelectors = function (element) {
      var result;
      result = {
        t: null,
        i: null,
        c: null,
        a: null,
        n: null
      };
      if (indexOf.call(this.options.selectors, 'tag') >= 0) {
        result.t = this.getTagSelector(element);
      }
      if (indexOf.call(this.options.selectors, 'id') >= 0) {
        result.i = this.getIdSelector(element);
      }
      if (indexOf.call(this.options.selectors, 'class') >= 0) {
        result.c = this.getClassSelectors(element);
      }
      if (indexOf.call(this.options.selectors, 'attribute') >= 0) {
        result.a = this.getAttributeSelectors(element);
      }
      if (indexOf.call(this.options.selectors, 'nthchild') >= 0) {
        result.n = this.getNthChildSelector(element);
      }
      return result;
    };

    CssSelectorGenerator.prototype.testUniqueness = function (element, selector) {
      var found_elements, parent;
      parent = element.parentNode;
      found_elements = parent.querySelectorAll(selector);
      return found_elements.length === 1 && found_elements[0] === element;
    };

    CssSelectorGenerator.prototype.testCombinations = function (element, items, tag) {
      var item, k, l, len, len1, ref, ref1;
      ref = this.getCombinations(items);
      for (k = 0, len = ref.length; k < len; k++) {
        item = ref[k];
        if (this.testUniqueness(element, item)) {
          return item;
        }
      }
      if (tag != null) {
        ref1 = items.map(function (item) {
          return tag + item;
        });
        for (l = 0, len1 = ref1.length; l < len1; l++) {
          item = ref1[l];
          if (this.testUniqueness(element, item)) {
            return item;
          }
        }
      }
      return null;
    };

    CssSelectorGenerator.prototype.getUniqueSelector = function (element) {
      var found_selector, k, len, ref, selector_type, selectors;
      selectors = this.getAllSelectors(element);
      ref = this.options.selectors;
      for (k = 0, len = ref.length; k < len; k++) {
        selector_type = ref[k];
        switch (selector_type) {
          case 'id':
            if (selectors.i != null) {
              return selectors.i;
            }
            break;
          case 'tag':
            if (selectors.t != null) {
              if (this.testUniqueness(element, selectors.t)) {
                return selectors.t;
              }
            }
            break;
          case 'class':
            if (selectors.c != null && selectors.c.length !== 0) {
              found_selector = this.testCombinations(element, selectors.c, selectors.t);
              if (found_selector) {
                return found_selector;
              }
            }
            break;
          case 'attribute':
            if (selectors.a != null && selectors.a.length !== 0) {
              found_selector = this.testCombinations(element, selectors.a, selectors.t);
              if (found_selector) {
                return found_selector;
              }
            }
            break;
          case 'nthchild':
            if (selectors.n != null) {
              return selectors.n;
            }
        }
      }
      return '*';
    };

    CssSelectorGenerator.prototype.getSelector = function (element) {
      var all_selectors, item, k, l, len, len1, parents, result, selector, selectors;
      all_selectors = [];
      parents = this.getParents(element);
      for (k = 0, len = parents.length; k < len; k++) {
        item = parents[k];
        selector = this.getUniqueSelector(item);
        if (selector != null) {
          all_selectors.push(selector);
        }
      }
      selectors = [];
      for (l = 0, len1 = all_selectors.length; l < len1; l++) {
        item = all_selectors[l];
        selectors.unshift(item);
        result = selectors.join(' > ');
        if (this.testSelector(element, result)) {
          return result;
        }
      }
      return null;
    };

    CssSelectorGenerator.prototype.getCombinations = function (items) {
      var i, j, k, l, ref, ref1, result;
      if (items == null) {
        items = [];
      }
      result = [[]];
      for (i = k = 0, ref = items.length - 1; 0 <= ref ? k <= ref : k >= ref; i = 0 <= ref ? ++k : --k) {
        for (j = l = 0, ref1 = result.length - 1; 0 <= ref1 ? l <= ref1 : l >= ref1; j = 0 <= ref1 ? ++l : --l) {
          result.push(result[j].concat(items[i]));
        }
      }
      result.shift();
      result = result.sort(function (a, b) {
        return a.length - b.length;
      });
      result = result.map(function (item) {
        return item.join('');
      });
      return result;
    };

    return CssSelectorGenerator;
  }();

  if (typeof define !== "undefined" && define !== null ? define.amd : void 0) {
    define([], function () {
      return CssSelectorGenerator;
    });
  } else {
    root = typeof exports !== "undefined" && exports !== null ? exports : this;
    root.CssSelectorGenerator = CssSelectorGenerator;
  }
}).call(undefined);

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Replace templates.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Replace the default primo templates http://localhost:8003/primo-explore/lib/templates.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       with custom templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       KULeuven/LIBIS (c) 2018
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Tom Vanmechelen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


require('./utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* import your templates */
var prmSearchResultAvailabilityLineHTML = '<div ng-repeat="availability in $ctrl.displayedAvailability track by $index"\r\n    ng-if="$ctrl.ifShowAvailability(availability)" layout="row" layout-align="start start">\r\n    <div layout="flex" ng-if="::!$ctrl.isCollectionDiscoveryCollection" ng-if="$ctrl.showTimer">\r\n        <prm-icon ng-if="::$ctrl.isOnline($index,availability) && !$ctrl.isGlobalRapidoRecord(availability)"\r\n            availability-type icon-type="{{::$ctrl.availabilityLineIcons.onlineMaterial.type}}"\r\n            svg-icon-set="{{::$ctrl.availabilityLineIcons.onlineMaterial.iconSet}}"\r\n            icon-definition="{{::$ctrl.availabilityLineIcons.onlineMaterial.icon}}"\r\n            [display-mode]="::$ctrl.displayMode"></prm-icon>\r\n        <prm-icon ng-if="::$ctrl.isPhysical($index,availability) && !$ctrl.isGlobalRapidoRecord(availability)"\r\n            availability-type icon-type="{{::$ctrl.availabilityLineIcons.physicalMaterial.type}}"\r\n            svg-icon-set="{{::$ctrl.availabilityLineIcons.physicalMaterial.iconSet}}"\r\n            icon-definition="{{::$ctrl.availabilityLineIcons.physicalMaterial.icon}}"\r\n            [display-mode]="::$ctrl.displayMode"></prm-icon>\r\n        <prm-icon ng-if="::$ctrl.isGlobalRapidoRecord(availability)" availability-type icon-type="svg"\r\n            svg-icon-set="primo-ui" icon-definition="rapido-search-globe" [display-mode]="::$ctrl.displayMode">\r\n        </prm-icon>\r\n        <md-button prm-brief-internal-button-marker ng-if="::!$ctrl.isEmailMode()"\r\n            ng-click="$ctrl.handleAvailability($index, $event);$event.preventDefault();"\r\n            class="neutralized-button arrow-link-button"\r\n            aria-labelledby="{{$ctrl.result.pnx.control.recordid.toString()}}availabilityLine{{$index}}"\r\n            title="{{$ctrl.getTranslatedLine(\'delivery.code.\'+availability)}}{{::($ctrl.isDirectLink($index) ? \'nui.aria.newWindow\' : \'\') | translate}}">\r\n            <span class="button-content"\r\n                id="{{$ctrl.result.pnx.control.recordid.toString()}}availabilityLine{{$index}}">\r\n<!--\r\n                <span\r\n                    ng-bind-html="$ctrl.displayedAvailability "></span>        \r\n-->\r\n                <span\r\n                    ng-if="!$ctrl.availabilityRegView"\r\n                    class="availability-status {{availability}} {{::$ctrl.broadenAvailabilityStatusClass(availability)}}"\r\n                    ng-style="::$ctrl.getNgrsStyle()" ng-class="::{\'text-rtl\': $ctrl.switchToLtrString()}"\r\n                    translate="delivery.code.{{$ctrl.handleDueDate(availability)}}"\r\n                    translate-values="::$ctrl.getPlaceHolders($ctrl.result)" translate-compile></span>\r\n                <span\r\n                ng-if="$ctrl.availabilityRegView"\r\n                    class="availability-status {{availability}} {{::$ctrl.broadenAvailabilityStatusClass(availability)}}"\r\n                    ng-style="::$ctrl.getNgrsStyle()" ng-class="::{\'text-rtl\': $ctrl.switchToLtrString()}"                \r\n                    ng-bind-html="$ctrl.availabilityRegView"></span> \r\n\r\n                <prm-icon ng-if="::$ctrl.isDirectLink($index)" external-link\r\n                    icon-type="{{::$ctrl.availabilityLineIcons.externalLink.type}}"\r\n                    svg-icon-set="{{::$ctrl.availabilityLineIcons.externalLink.iconSet}}"\r\n                    icon-definition="{{::$ctrl.availabilityLineIcons.externalLink.icon}}"\r\n                    [display-mode]="::$ctrl.displayMode"></prm-icon>\r\n            </span>\r\n\r\n<!--\r\n            <span class="button-content"\r\n                id="{{$ctrl.result.pnx.control.recordid.toString()}}availabilityLine{{$index}}"><span\r\n                    class="availability-status {{availability}} {{::$ctrl.broadenAvailabilityStatusClass(availability)}}"\r\n                    ng-style="::$ctrl.getNgrsStyle()" ng-class="::{\'text-rtl\': $ctrl.switchToLtrString()}"\r\n                    translate="delivery.code.{{$ctrl.handleDueDate(availability)}}"\r\n                    translate-values="::$ctrl.getPlaceHolders($ctrl.result)" translate-compile></span><span\r\n                    ng-if="::($ctrl.showDisplayOtherLocations() || $ctrl.showDisplayLocation()  || $ctrl.showOtherLibraries(availability)) && $ctrl.isPhysical($index)"\r\n                    ng-bind-html="&nbsp;"></span> <span\r\n                    ng-if="::($ctrl.showDisplayOtherLocations() || $ctrl.showDisplayLocation()) && $ctrl.isPhysical($index)  && !$ctrl.showOtherLibraries(availability)"\r\n                    translate="delivery.and.other.locations"></span> <span\r\n                    ng-if="::$ctrl.showOtherLibraries(availability)"\r\n                    translate="delivery.code.ngrs.other_libraries"></span>\r\n                <prm-icon ng-if="::$ctrl.isDirectLink($index)" external-link\r\n                    icon-type="{{::$ctrl.availabilityLineIcons.externalLink.type}}"\r\n                    svg-icon-set="{{::$ctrl.availabilityLineIcons.externalLink.iconSet}}"\r\n                    icon-definition="{{::$ctrl.availabilityLineIcons.externalLink.icon}}"\r\n                    [display-mode]="::$ctrl.displayMode"></prm-icon>\r\n            </span>\r\n-->            \r\n            <prm-spinner class="inline-loader display-inline dark-on-light half-transparent"\r\n                ng-if="$ctrl.result.rtaInProgress"></prm-spinner>\r\n            <prm-icon link-arrow icon-type="{{::$ctrl.availabilityLineIcons.arrowRight.type}}"\r\n                svg-icon-set="{{::$ctrl.availabilityLineIcons.arrowRight.iconSet}}"\r\n                icon-definition="{{::$ctrl.availabilityLineIcons.arrowRight.icon}}"\r\n                [display-mode]="::$ctrl.displayMode"></prm-icon>\r\n        </md-button><span class="button-content" ng-if="::$ctrl.isEmailMode()"><span\r\n                class="availability-status {{::availability}}" ng-style="::$ctrl.getNgrsStyle()"\r\n                ng-class="::{\'text-rtl\': $ctrl.switchToLtrString()}"\r\n                translate="delivery.code.{{::$ctrl.handleDueDate(availability)}}"\r\n                translate-values="$ctrl.getPlaceHolders($ctrl.result)" translate-compile></span><span\r\n                ng-if="::($ctrl.showDisplayOtherLocations() || $ctrl.showDisplayLocation() || $ctrl.showOtherLibraries(availability)) && $ctrl.isPhysical($index)"\r\n                ng-bind-html="&nbsp;"></span> <span\r\n                ng-if="::($ctrl.showDisplayOtherLocations() || $ctrl.showDisplayLocation()) && $ctrl.isPhysical($index) && !$ctrl.showOtherLibraries(availability)"\r\n                translate="delivery.and.other.locations"></span> <span\r\n                ng-if="(::$ctrl.showOtherLibraries(availability))"\r\n                translate="delivery.code.ngrs.other_libraries"></span></span>\r\n    </div>\r\n</div>\r\n<div ng-if="::($ctrl.isCollectionDiscoveryCollection && !$ctrl.isEmailMode())" layout="row" layout-align="start start">\r\n    <prm-icon availability-type icon-type="{{::$ctrl.availabilityLineIcons.physicalMaterial.type}}"\r\n        svg-icon-set="{{::$ctrl.availabilityLineIcons.physicalMaterial.iconSet}}"\r\n        icon-definition="{{::$ctrl.availabilityLineIcons.physicalMaterial.icon}}" [display-mode]="::$ctrl.displayMode">\r\n    </prm-icon>\r\n    <md-button prm-brief-internal-button-marker ng-click="$ctrl.runCollectionDiscoveryBeacon()"\r\n        class="neutralized-button arrow-link-button" translate translate-attr-title="{{\'delivery.code.collection\'}}"\r\n        ui-state="$ctrl.COLLECTION_DISCOVERY_STATE" ui-state-params="$ctrl.collectionStateParams"\r\n        ui-sref-opts="{reload: true, inherit:false}" href=""><span class="button-content"><span\r\n                translate="delivery.code.collection" translate-compile></span>\r\n            <prm-icon ng-if="::$ctrl.isDirectLink($index)" external-link\r\n                icon-type="{{::$ctrl.availabilityLineIcons.externalLink.type}}"\r\n                svg-icon-set="{{::$ctrl.availabilityLineIcons.externalLink.iconSet}}"\r\n                icon-definition="{{::$ctrl.availabilityLineIcons.externalLink.icon}}"\r\n                [display-mode]="::$ctrl.displayMode"></prm-icon>\r\n        </span>\r\n        <prm-icon link-arrow icon-type="{{::$ctrl.availabilityLineIcons.arrowRight.type}}"\r\n            svg-icon-set="{{::$ctrl.availabilityLineIcons.arrowRight.iconSet}}"\r\n            icon-definition="{{::$ctrl.availabilityLineIcons.arrowRight.icon}}" [display-mode]="::$ctrl.displayMode">\r\n        </prm-icon>\r\n    </md-button>\r\n</div>\r\n<prm-search-result-availability-line-after parent-ctrl="$ctrl"></prm-search-result-availability-line-after>';

var Templates = function () {
    function Templates() {
        _classCallCheck(this, Templates);
    }

    _createClass(Templates, null, [{
        key: 'all',
        get: function get() {
            /*
              id = templateId in the templateCache
              template = the imported tempalte
              enabled = true/false should the component be created
              enableInView = regex to define in which views the template has to be replaced.
                ex. {id: 'components/search/topbar/userArea/user-area.html', template: userAreaHTML, enabled: true, enableInView: '.*'}
              results in:
                $templateCache.put('components/search/topbar/userArea/user-area.html',userAreaHTML);
            */
            return [{
                id: 'components/search/searchResult/searchResultAvailability/searchResultAvailabilityLine.html',
                template: prmSearchResultAvailabilityLineHTML,
                enabled: true,
                enableInView: 'REGIONAL'
            }].filter(function (template) {
                return template.enabled && new RegExp(template.enableInView).test(window.appConfig.vid);
            });
        }
    }]);

    return Templates;
}();

exports.default = Templates;

},{"./utils":16}],16:[function(require,module,exports){
'use strict';

/*
  General

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
String.prototype.toCamelCase = function () {
  return this.split('-').map(function (d, i, a) {
    return i > 0 ? d.charAt(0).toUpperCase() + d.slice(1) : d;
  }).join('');
};

/*
angular.module('googleAnalytics', []);
angular.module('googleAnalytics').run(function ($rootScope, $interval, analyticsOptions) {
	if(analyticsOptions.hasOwnProperty("enabled") && analyticsOptions.enabled) {
		if(analyticsOptions.hasOwnProperty("siteId") && analyticsOptions.siteId != '') {
			
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer',analyticsOptions.siteId);
        }

        const inlineScriptTag = document.createElement('noscript');
        inlineScriptTag.type = 'text/javascript';

        const inlineCode = '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WR259MX" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';

        // Methods of adding inner text sometimes don't work across browsers.
        try {
          inlineScriptTag.appendChild(document.createTextNode(inlineCode));
        } catch (e) {
          inlineScriptTag.text = inlineCode;
        }

        document.querySelector('body').appendChild(inlineScriptTag);		
	}
});
angular.module('googleAnalytics').value('analyticsOptions', {
	enabled: false,
	siteId: '',
	defaultTitle: ''
});
*/

//intercept api calls for database search and change to KUL (only regional views)
/*
var reg_views = ["KULeuven_TMOREM", "KULeuven_TMOREK", "KULeuven_UCLL", "KULeuven_LUCA", "KULeuven_ODISEE"];
if (reg_views.includes(window.appConfig.vid)) {
let app = angular.module('viewCustom', [])
  .factory('httpCallInterceptor', [() => {
    var httpCallInterceptor = {
      request: function(config){
        if (config.url.includes('pnxs') && !config.url.includes('delivery') && config.params) {
          //console.log(config);
            if(config.params.databases){
            config.params.inst = 'KUL';
            config.params.vid = 'KULeuven';
          }
            return config;
        }
        return config;
      }
    }
    return httpCallInterceptor;
  }])
  .config(['$httpProvider', ($httpProvider) => {
    $httpProvider.interceptors.push('httpCallInterceptor');
  }]);
}
*/
/*
angular.element.prototype.closestClass = function (className) {
  return (function closest(element, className) {
    if (element[0].nodeName === 'HTML') {
      return null;
    } else if (element.hasClass(className)) {
      return element;
    } else {
      return closest(element.parent(), className);
    }
  })(this, className);
};

angular.element.prototype.closestNode = function (nodeName) {
  return (function closest(element, nodeName) {
    if (element[0].nodeName === 'HTML') {
      return null;
    } else if (element[0].nodeName == nodeName.toUpperCase()) {
      return element;
    } else {
      return closest(element.parent(), nodeName);
    }
  })(this, nodeName);
};
*/

},{}]},{},[5])

//# sourceMappingURL=custom.js.map
