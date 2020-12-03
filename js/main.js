$(function () {
  $(".menu-btn").click(function () {
    $(".menu-btn").toggleClass("disBtn");

    $(".cross-btn").toggleClass("enCross");

    $(".menu-panel").toggleClass("showPanel");
  });
});
