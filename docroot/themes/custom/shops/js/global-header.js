/**
 * Global header behaviour.
 */

(function (Drupal, $) {
  'use strict';

  /**
   * Show overlay on click.
   */
  Drupal.behaviors.menuOverlay = {
    attach: function (context, settings) {
      var titleWidth;

      // $('.overlay').hide();
      $('#block-shops-main-menu-menu, .dropdown-item', context).once('showMenuOverlay').click(function () {
        $('.overlay').toggle();
        titleWidth = $(this).width();
        $(this).parent().find('.dropdown-menu').width(titleWidth+30);
      });
    }
  };

  /**
   * Hide overlay on click.
   */
  Drupal.behaviors.hideOverlay = {
    attach: function (context, settings) {
      $('.overlay', context).once('showMenuOverlay').click(function () {
        $('.overlay').toggle();
        $('.mobile-navigation').removeClass('show');
      });
    }
  };

})(Drupal, jQuery);
