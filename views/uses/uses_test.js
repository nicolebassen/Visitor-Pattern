'use strict';

describe('myApp.uses module', function() {

  beforeEach(module('myApp.uses'));

  describe('uses controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var usesCtrl = $controller('UsesCtrl');
      expect(usesCtrl).toBeDefined();
    }));

  });
});