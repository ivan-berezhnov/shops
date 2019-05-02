/**
 * Global menu behaviour.
 */

(function (Drupal, $) {
  'use strict';

  /**
   * Swipe mobile menu.
   */
  Drupal.behaviors.swipeToggle = {
    attach: function (context, settings) {
      $("[data-toggle]").click(function () {
        var toggle_el = $(this).data("toggle");
        $(toggle_el).toggleClass("open-sidebar");
      });
    }
  };

  Drupal.behaviors.swipeInit = {
    attach: function (context, settings) {
      $(".swipe-area").swipe({
        swipeStatus: function (
          event,
          phase,
          direction,
          distance,
          duration,
          fingers
        ) {
          if (phase == "move" && direction == "right") {
            $(".container").addClass("open-sidebar");
            return false;
          }
          if (phase == "move" && direction == "left") {
            $(".container").removeClass("open-sidebar");
            return false;
          }
        }
      });
    }
  };

  /**
   * Logic for mobile multilevel menu.
   */
  Drupal.mobileMenuInit = function (state) {
    // Toggling the hamburger nav class
    $('.mobile-menu').toggleClass('active');
    // Adding Class to the body to slide the menu in.
    $('body').toggleClass('menu-active');
    // Removing any active classes from the children menu triggers to 'reset" the menu
    $('.mobile-menu-trigger--sub').removeClass('active');
  };

  Drupal.mobileMenuChildInit = function (state) {
    // adding the active class when clicked.
    state.addClass('active');
    // adds a class to anything that wasn't toggled active:
    // todo: remove hidden classes when clicking back + toggling hamburger nav
    state.closest('ul').find('.active').closest('li').siblings().addClass('hidden');
  };

  Drupal.mobileMenuBack = function (state) {
    // finding the closest ul
    var closestActive = state.closest('ul').siblings();
    // removing the active class to go back to the previous menu
    closestActive.removeClass('active');
  };


  Drupal.behaviors.mobileMenuInit = {
    attach: function (context, settings) {
      $('#mobile-menu-trigger').click(function(e){
        e.preventDefault();
        mobileMenuInit();
      });
    }
  };

  Drupal.behaviors.mobileMenuChildInit = {
    attach: function (context, settings) {
      $('.mobile-menu-trigger--sub').click(function(e){
        var clickedElement = $(this);
        mobileMenuChildInit(clickedElement);
      });
    }
  };

  Drupal.behaviors.mobileMenuItemBack = {
    attach: function (context, settings) {
      $('.mobile-menu--back').click(function(e){
        var clickedElement = $(this);
        mobileMenuBack(clickedElement);
      });
    }
  };

})(Drupal, jQuery);
