import viewLogoHTML from './viewLogo.html'

class ViewLogoController {
  constructor($scope, $translate, $element, $compile, $http, $rootScope) {
    let self = this;
    self.scope = $scope;
    self.rootScope = $rootScope;
    $element.parent().parent()[0].firstChild.parentNode.removeChild($element.parent().parent()[0].firstChild);

    Primo.view.then((view) => {
      //let vid = view.code;
      let vid = window.appConfig.vid;
      let locale = view.interfaceLanguage; //window.Primo.explore.helper.userSessionManagerService().i18nService.getLanguage();
      //p.e. 32KUL_KUL:KUL to 32KUL_KUL-KUL
      let localeLibraryLogo = 'custom/' + vid.split(':')[0] + '-' + vid.split(':')[1] + '/img/library-logo-' + locale + '.png';
      console.log(view);
      $translate('limo.instituteUrl').then(
        (instituteUrl) => {
          if (instituteUrl == 'http://www.libis.be/') {
            self.homePageLink = '/discovery/search?vid=' + vid + "&lang=" + locale;
          } else {
            self.homePageLink = '/discovery/search?vid=' + vid + "&lang=" + locale;
          }
        });
      self.localeLibraryLogo = window.appConfig.customization.libraryLogo;

      console.log(self.localeLibraryLogo);
      console.log(localeLibraryLogo);
      if (self.localeLibraryLogo !== localeLibraryLogo) {
        $http({
          method: 'GET',
          url: localeLibraryLogo,
        }).then(function (response) {
          window.appConfig.customization.libraryLogo = localeLibraryLogo;
          self.localeLibraryLogo = localeLibraryLogo
        }, function (error) {
          self.localeLibraryLogo = localeLibraryLogo;
        });
      }
    });
  }
}

ViewLogoController.$inject = ['$scope', '$translate', '$element', '$compile', '$http', '$rootScope'];

export let viewLogoConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: ViewLogoController,
  template: viewLogoHTML
}
