$(function () {
  $(".menu-btn").click(function () {
    $(".menu-btn").toggleClass("disBtn");

    $(".cross-btn").toggleClass("enCross");

    $(".menu-panel").toggleClass("showPanel");
  });

  // Test code
  $.getJSON("products.json")
    .done(function (data) {
      let beers = data.items;
      $.each(beers, (i, beer) => {
        console.log(beer.name, beer.price);
      });
    })
    .fail(function (error) {
      console.log(error);
    });
});
