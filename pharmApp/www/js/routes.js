angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('principal.favoritos', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/favoritos.html',
        controller: 'favoritosCtrl'
      }
    }
  })

  .state('principal.pedidosPendientes', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/pedidosPendientes.html',
        controller: 'pedidosPendientesCtrl'
      }
    }
  })

  .state('principal.acercaDe', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/acercaDe.html',
        controller: 'acercaDeCtrl'
      }
    }
  })

  .state('principal', {
    url: '/page1',
    templateUrl: 'templates/principal.html',
    abstract:true
  })

  .state('principal.buscar', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/buscar.html',
        controller: 'buscarCtrl'
      }
    }
  })

  .state('principal.infoPedido', {
    url: '/page7',
    views: {
      'tab2': {
        templateUrl: 'templates/infoPedido.html',
        controller: 'infoPedidoCtrl'
      }
    }
  })

  .state('principal.infoDrogueria', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/infoDrogueria.html',
        controller: 'infoDrogueriaCtrl'
      }
    }
  })

  .state('principal.drogueriasCercanas', {
    url: '/page9',
    views: {
      'tab4': {
        templateUrl: 'templates/drogueriasCercanas.html',
        controller: 'drogueriasCercanasCtrl'
      }
    }
  })

  .state('principal.contactarDrogueria', {
    url: '/page10',
    views: {
      'tab4': {
        templateUrl: 'templates/contactarDrogueria.html',
        controller: 'contactarDrogueriaCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});