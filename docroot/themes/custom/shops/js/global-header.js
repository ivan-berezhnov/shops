/**
 * Global header behaviour.
 */

(function (Drupal, $) {
  'use strict';

  /**
   *
   */
  Drupal.behaviors.shopDropdownBtn = {
    attach: function (context, settings) {

      $('.dropbtn.is-active').once('shopDropdownBtn').touchstart(function () {
        $(this).parents('.dropdown').find('.dropdown-content').show();
      });

      $(document).touchstart(function () {
        ('.dropdown-content').hide();
      });
    }
  };

})(Drupal, jQuery);
