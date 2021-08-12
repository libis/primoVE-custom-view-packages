class fullViewSectionOrderingController {

    constructor($scope) {
        this.$scope = $scope;
        this.sectionOrderNameList = ["howovp", "ovp", "links", "details", "howovp", "ovp", "citationTrails","virtualBrowse", "action_list"]
    }
    $onInit() {
        this.sectionOrderNameList.unshift("brief"); 
        try {
            this.$scope.$watch('this.$ctrl.parentCtrl.parentCtrl.services', 
            function (newValue, oldValue, scope) {
                if (newValue) {
                    /* Only thake the available services from sectionOrderNameList */
                    /* select the services that are not listed in sectionOrderNameList from the available services */
                    /* append them to sectionOrderNameList (they will be displayes at the bottom) */
                    let sectionsServiceNameList = scope.$ctrl.parentCtrl.parentCtrl.services.map( s =>  s.serviceName);
                    let sectionsServiceIncludedNameList = sectionsServiceNameList.filter(section => scope.$ctrl.sectionOrderNameList.includes(section))
                    let sectionsServiceExcludedNameList = sectionsServiceNameList.filter(section => ! scope.$ctrl.sectionOrderNameList.includes(section))
                    let sectionOrderNameList = scope.$ctrl.sectionOrderNameList.filter(section => sectionsServiceIncludedNameList.includes(section))
                    sectionOrderNameList = sectionOrderNameList.concat ( sectionsServiceExcludedNameList )

                    if (newValue && JSON.stringify(sectionsServiceNameList) !== JSON.stringify(sectionOrderNameList) ){
                        scope.$ctrl.orderingSections(scope.$ctrl.parentCtrl.parentCtrl.services, sectionOrderNameList);
                    }
                }
            }, true);

        } catch (e) {
            console.error("fullViewSectionOrderingController constructor");
            console.error(e.message);
        }

    }
    orderingSections(sections, sectionOrderNameList) {
        try {
            // brief is always the first section
            let OrderedSections = sections
            OrderedSections = OrderedSections.map( (s) =>  {s.order = sectionOrderNameList.indexOf(s.serviceName); return s;} )
            OrderedSections = OrderedSections.sort((a, b) => a.order - b.order);
            OrderedSections.forEach((section, index) => { 
            //    this.parentCtrl.parentCtrl.services[index] = section
                sections[index] = section
            })
        } catch (e) {
            console.error("fullViewSectionOrderingController orderingSections");
            console.error(e);
        }
    }
}

fullViewSectionOrderingController.$inject = ['$scope'];

export let fullViewSectionOrderingConfig = {
    bindings: {parentCtrl: '<'},
    controller: fullViewSectionOrderingController,
    template: ''
}
