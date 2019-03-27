/**
 * Global header behaviour.
 */

(function (Drupal, $) {
  'use strict';

  /**
   * Show dropdown on hover.
   */
  Drupal.behaviors.dropdownHover = {
    attach: function (context, settings) {
      $('.dropdown-hover').hover(function () {
        $(this).trigger('click.bs.dropdown');
      });
    }
  };

})(Drupal, jQuery);
