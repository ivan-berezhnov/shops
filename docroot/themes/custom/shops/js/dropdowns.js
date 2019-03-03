/**
 * Global header behaviour.
 */

(function (Drupal, $) {
  'use strict';

  Drupal.behaviors.dropdownBaseLang = {
    attach: function (context, settings) {
      $('#block-languageswitcher .dropdown-base').once('dropdown-lang').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('expanded');
        var href = $(e.target).attr('href');

        if ($(e.target).hasClass('is-active') ||
          href === undefined ||
          href === null) {
          return;
        }
        else {
          window.location = href;
        }
      });
      $(document).click(function() {
        $('#block-languageswitcher .dropdown-base').removeClass('expanded');
      });
    }
  };

  Drupal.behaviors.dropdownPhone = {
    attach: function (context, settings) {
      var $dropdownPhone = $('#block-headerphones .dropdown-base');
      $dropdownPhone.find('li.is-active a').addClass('is-active');

      $dropdownPhone.once('dropdown-lang').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('expanded');

        var href = $(e.target).attr('href');

        if ($(e.target).hasClass('is-active') ||
          href === undefined ||
          href === null) {
          $(e.target).removeClass('is-active');
        }
        else {
          window.location = href;
        }
        $(e.target).addClass('is-active');

      });
      $(document).click(function() {
        $dropdownPhone.removeClass('expanded');
        $dropdownPhone.find('li.is-active a').addClass('is-active');
      });
    }
  };

})(Drupal, jQuery);
