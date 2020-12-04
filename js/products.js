class Beers {
  constructor(image, name, type, price) {
    this.image = image;
    this.name = name;
    this.type = type;
    this.price = price;
  }
}

$(function () {
  printBeer();
});

let lager = new Beers("../Pictures/peroni.png", "Peroni", "Lager", 2);
let ipa = new Beers("../Pictures/punkIPA.png", "Brewdog", "Punk IPA", 2.3);
let paleAle = new Beers("../Pictures/oberonale.png", "Camden", "Pale Ale", 2.5);
let sour = new Beers(
  "../Pictures/sourMonkey.png",
  "Sour Monkey",
  "Sour Beer",
  2.99
);

let allBeers = [lager, ipa, paleAle, sour];

function printBeer() {
  $.each(allBeers, (i, beer) => {
    console.log(beer);
    let $container = $("<div>");
    $container.addClass("individualBeerContainer");

    $("<img>")
      .attr("src", beer.image)
      .attr("alt", beer.name + " bottle")
      .appendTo($container);

    $("<h3>").html(beer.name).appendTo($container);

    $("<p>").html(beer.type).appendTo($container);

    $("<p>")
      .html("$" + beer.price)
      .appendTo($container);

    $("<button>")
      .attr("type", "button")
      .attr("id", "addToCartBtn")
      .html("Add to cart")
      .appendTo($container);

    $container.appendTo($("#allBeersContainer"));
  });
}
