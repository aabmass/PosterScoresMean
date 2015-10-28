'use strict';

/* TODO: remove jQuery from this? */
function initNav() {
  // fix main menu to page on passing
  $('.main.menu').visibility({
    type: 'fixed'
  });

  $('.overlay').visibility({
    type: 'fixed',
    offset: 80
  });

  // lazy load images
  $('.image').visibility({
    type: 'image',
    transition: 'vertical flip in',
    duration: 500
  });

  // show dropdown on hover
  $('.ui.dropdown').dropdown({
    on: 'hover'
  });
}

angular.module('posterScoresMeanApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {

    // init navbar semantic-ui
    angular.element(document).ready(initNav);

    $scope.menu = [
        /** Hard coded into menu for custom styling
        {
            'title': 'PosterScores',
            'state': 'main.index'
        },
       */
        {
            'title': 'Posters',
            'state': 'main.poster'
        }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
