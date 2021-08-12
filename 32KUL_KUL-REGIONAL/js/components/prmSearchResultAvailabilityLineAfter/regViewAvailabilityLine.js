  


  class regViewAvailabilityLineController {
    constructor($scope,$element,$translate) {
      let self = this;

      self.almaInstitutionsFilterInstCodeList = ["32KUL_HUB","32KUL_KHM","32KUL_KHK","32KUL_KHL","32KUL_KATHO","32KUL_LUCAWENK"]
      
      self.$scope = $scope;
      self.$element = $element;
      self.$translate = $translate;
      self.$ctrl = self.parentCtrl.parentCtrl ;
      self.viewInst = window.appConfig["primo-view"].institution.description;

      /*
      console.log( self )
      console.log ( self.$ctrl.result.delivery.almaInstitutionsList )
      console.log ( self.$ctrl)
      console.log ( "displayedAvailability:"+ self.$ctrl.displayedAvailability );
      */
      self.$ctrl.displayedAvailability.forEach(availability => {
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

        var availabilityInstitutions = self.$ctrl.result.delivery.almaInstitutionsList.filter(inst => {
            return (inst.availabilityStatus === "available_in_institution" &&  self.almaInstitutionsFilterInstCodeList.includes(inst.instCode))
        })
        //console.log ( availabilityInstitutions.map( inst => inst.instName ).join() );

        var availabilityInstitutionsNames = availabilityInstitutions.map( inst => inst.instName )

        if ( availabilityInstitutionsNames.length > 0){
            if (self.$ctrl.result.delivery.availability[0]  === "available_in_library"){
                // replace instname from availabilityText with list of instnames
                availabilityInstitutionsNames.unshift( window.appConfig["primo-view"].institution.description );
                self.$ctrl.availabilityRegView = 
                    $translate.instant('delivery.code.'+ self.$ctrl.handleDueDate(availability) ).replace(
                        window.appConfig["primo-view"].institution.description , 
                        availabilityInstitutionsNames.slice(0, -1).join(', ') +' and '+ availabilityInstitutionsNames.slice(-1)
                    );
            }
            // if (self.$ctrl.result.delivery.bestlocation === null) {
            if (self.$ctrl.result.delivery.availability[0] === "no_inventory"){
                //self.$ctrl.displayedAvailability = ["available_in_library"];
                self.$ctrl.result.delivery.availability = ["available_in_library"];
                if  (availabilityInstitutionsNames.length === 1) {
                    self.$ctrl.availabilityRegView = 
                    $translate.instant('delivery.code.available_in_library').replace(
                        window.appConfig["primo-view"].institution.description , 
                        availabilityInstitutionsNames[0]
                    );
                }else{
                    self.$ctrl.availabilityRegView = 
                    $translate.instant('delivery.code.available_in_library').replace(
                        window.appConfig["primo-view"].institution.description , 
                        availabilityInstitutionsNames.slice(0, -1).join(', ') +' and '+ availabilityInstitutionsNames.slice(-1)
                    );
                }
            }
        }
      });
    }
  }
  
  regViewAvailabilityLineController.$inject = ['$scope','$element','$translate'];
  
  export let regViewAvailabilityLineConfig = {
    bindings: {parentCtrl: '<'},
    controller: regViewAvailabilityLineController,
    template: ''
  }
  