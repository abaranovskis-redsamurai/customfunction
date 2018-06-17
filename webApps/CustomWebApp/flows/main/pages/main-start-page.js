define([], function() {
  'use strict';

  var PageModule = function PageModule() {};
  
  PageModule.prototype.callCustomAction = function (param) {
    console.log('Input parameter: ' + param);
    return 'Processed value: ' + param;
  };

  return PageModule;
});
