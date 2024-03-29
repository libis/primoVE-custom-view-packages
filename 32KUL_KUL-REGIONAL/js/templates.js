/*
  Replace templates.

  Replace the default primo templates http://localhost:8003/primo-explore/lib/templates.js
  with custom templates

  KULeuven/LIBIS (c) 2018
  Tom Vanmechelen
*/
import './utils'

/* import your templates */
import prmSearchResultAvailabilityLineHTML from '../html/templates/prm-search-result-availability-line.html'

export default class Templates {
    static get all() {
        /*
          id = templateId in the templateCache
          template = the imported tempalte
          enabled = true/false should the component be created
          enableInView = regex to define in which views the template has to be replaced.

          ex. {id: 'components/search/topbar/userArea/user-area.html', template: userAreaHTML, enabled: true, enableInView: '.*'}
          results in:
            $templateCache.put('components/search/topbar/userArea/user-area.html',userAreaHTML);
        */
        return [      
            {
                id: 'components/search/searchResult/searchResultAvailability/searchResultAvailabilityLine.html',
                template: prmSearchResultAvailabilityLineHTML,
                enabled: true,
                enableInView: 'REGIONAL'
            }
        ].filter((template) => (template.enabled && new RegExp(template.enableInView).test(window.appConfig.vid)));
    }
}
