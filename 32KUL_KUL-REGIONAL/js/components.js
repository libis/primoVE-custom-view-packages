/*
  Declare your components here.

  Rewrite this when imports can be done dynamically
  http://2ality.com/2017/01/import-operator.html

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
import './utils';
/* import your component configuration*/
import {regViewOtherMembersConfig} from './components/prmAlmaOtherMembersAfter/regViewOtherMembers'
import {regViewAvailabilityLineConfig} from './components/prmSearchResultAvailabilityLineAfter/regViewAvailabilityLine'
import {fullViewSectionOrderingConfig} from './components/prmFullViewAfter/fullViewSectionOrdering'

export default class AfterComponents {

  static get all() {
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
      {name: 'libis-only-members', config: regViewOtherMembersConfig, enabled: true, appendTo: 'prm-alma-other-members-after', enableInView: '.*'},
      {name: 'libis-availability-line', config: regViewAvailabilityLineConfig, enabled: true, appendTo: 'prm-search-result-availability-line-after', enableInView: '.*'},
      {name: 'libis-full-view-section-ordering', config: fullViewSectionOrderingConfig, enabled: true, appendTo: 'prm-full-view-after', enableInView: '.*'},

    ].filter( (component) => ( component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid) ) );
  }
}
