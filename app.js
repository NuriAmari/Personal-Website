$(document).ready(function() {

  $(".fa-times").click(function() {

    $(".sidebar_menu").addClass("hide_menu");
    $(".toggle_menu").addClass("opacity_one");
  });

  $(".toggle_menu").click(function() {

    $(".sidebar_menu").removeClass("hide_menu");
    $(".toggle_menu").removeClass("opacity_one");
  });

  $("#down-arrow").click(function() {

    $('html,body').animate({
          scrollTop: $("#about").offset().top
      }, 1000);
  });

  $("#home-nav").click(function() {

    $(".sidebar_menu").addClass("hide_menu");
    $(".toggle_menu").addClass("opacity_one");

    $('html,body').animate({
          scrollTop: $("header").offset().top
      }, 1000);
  });

  $("#about-nav").click(function() {

    $(".sidebar_menu").addClass("hide_menu");
    $(".toggle_menu").addClass("opacity_one");

    $('html,body').animate({
          scrollTop: $("#about").offset().top
      }, 1000);
  });

  $("#projects-nav").click(function() {

    $(".sidebar_menu").addClass("hide_menu");
    $(".toggle_menu").addClass("opacity_one");

    $('html,body').animate({
          scrollTop: $("#projects").offset().top
      }, 1000);
  });

  $("#resume-nav").click(function() {

    $(".sidebar_menu").addClass("hide_menu");
    $(".toggle_menu").addClass("opacity_one");

    $('html,body').animate({
          scrollTop: $("footer").offset().top
      }, 1000);
  });
});
