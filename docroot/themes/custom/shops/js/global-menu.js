/**
 * Global menu behaviour.
 */

(function (Drupal, $) {
  'use strict';

  /**
   * Show mobile menu.
   */
  Drupal.behaviors.mobileMenuOpen = {
    attach: function (context, settings) {
      $('.menu--mobile').once('mobile-menu-show').on('click touchstart', function() {
        $('.mobile-navigation').toggleClass('show');
        $('.overlay').toggle();
      });
    }
  };

  /**
   * Hide mobile menu.
   */
  Drupal.behaviors.mobileMenuClose = {
    attach: function (context, settings) {
      $('.menu--mobile__close').once('mobile-menu-close').on('click touchstart', function() {
        $('.mobile-navigation').removeClass('show');
        $('.overlay').toggle();
      });
    }
  };
})(Drupal, jQuery);
