/**
 * Global menu behaviour.
 */

(function (Drupal, $) {
  'use strict';
  //
  // /**
  //  * Show mobile menu.
  //  */
  // Drupal.behaviors.mobileMenuOpen = {
  //   attach: function (context, settings) {
  //     $('.menu--mobile').once('mobile-menu-show').on('click', function() {
  //       $('.mobile-navigation').toggleClass('show');
  //       $('.overlay').toggle();
  //     });
  //   }
  // };
  //
  // /**
  //  * Hide mobile menu.
  //  */
  // Drupal.behaviors.mobileMenuClose = {
  //   attach: function (context, settings) {
  //     $('.menu--mobile__close').once('mobile-menu-close').on('click', function() {
  //       $('.mobile-navigation').removeClass('show');
  //       $('.overlay').toggle();
  //     });
  //   }
  // };

  /**
   * Swipe mobile menu.
   */
  Drupal.behaviors.mobileMenuSwipe = {
    attach: function (context, settings) {
      Drupal.menuSwipe();
    }
  };

  Drupal.menuSwipe = function () {
    $('.mobile-navigation').slideAndSwipe();
  };

})(Drupal, jQuery);
