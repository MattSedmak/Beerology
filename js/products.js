class Beers {
  constructor(id, image, name, type, size, alc, rating, description, price) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.type = type;
    this.size = size;
    this.alc = alc;
    this.rating = rating;
    this.price = price;
    this.inCart = 0;
    this.description = description;
  }
}
let lager = new Beers(
  1,
  "../Pictures/peroni.png",
  "Peroni",
  "Lager",
  "33cl",
  "5%",
  "4/5",
  "Elegant malt and fresh hops are synonymous with Italian brewer Peroni. With Peroni Nastro Azzuro (literally 'Blue Ribbon') these qualities bubble up gently to the fore with unmistakable style and grace.",
  2
);
let ipa = new Beers(
  2,
  "../Pictures/punkIPA.png",
  "Brewdog",
  "Punk IPA",
  "33cl",
  "6,5%",
  "3/5",
  "One of the key players that helped kick-start the Craft Beer revolution, BrewDog are the original Punk Brewers, and this go-ahead attitude is never clearer than in Punk IPA, the original British Craft IPA. This sparkling bright gold IPA is bursting with light, bright malts, with fresh, crisp, melon, passionfruit citrus and pine hops, and a deliciously light body that together make this one hell of a drinkable IPA.",
  2.3
);
let paleAle = new Beers(
  3,
  "../Pictures/oberonale.png",
  "Camden",
  "Pale Ale",
  "33cl",
  "5,6%",
  "5/5",
  "Camden Pale Ale by the redoubtable Camden Town Brewery is a light, refreshing Pale Ale with a sparkling pale yellow body, and a fine white head, harbouring light malts and zesty grapefruit and lemon hops, with a delicious herbal backnote. The tasting experience closes on a bright citrus note with soft, clean malts.",
  2.5
);
let sour = new Beers(
  4,
  "../Pictures/sourMonkey.png",
  "SourMonkey",
  "Sour Beer",
  "33cl",
  "3,5%",
  "4/5",
  "Sour Monkey puts a tastefully tart twist on our Golden Monkey's sweet, fruity essence. A sharp, citrus-laden tang makes this brew a Monkey all its own! This Sour Ale style beer is best paired with salads or peppery style cheeses such as Monterey / Pepper Jack and pungent style cheese such as Gorgonzola and Limburger.",
  2.99
);

let allBeers = [lager, ipa, paleAle, sour];
$(function () {
  printBeer();
});

function printBeer() {
  $.each(allBeers, (i, beer) => {
    // console.log(beer);
    let $container = $("<div>");
    $container.addClass("individualBeerContainer");

    $("<img>")
      .attr("src", beer.image)
      .attr("alt", beer.name + " bottle")
      .on("click", { b: beer }, function (e) {
        saveToSS(e.data.b);
        window.location.assign("../HTML/singleProductPage.html");
      })
      .appendTo($container);

    $("<h3>")
      .html(beer.name)
      //.on("click", function () {
      //testar(e.data.b);
      //})
      .appendTo($container);

    $("<p>").html(beer.type).appendTo($container);

    $("<p>")
      .html("$" + beer.price)
      .appendTo($container);

    $("<button>")
      .attr("type", "button")
      .attr("id", "addToCartBtn")
      .html("Add to cart")
      .on("click", { b: beer }, function (e) {
        addToCart(e.data.b);
      })
      .appendTo($container);

    $container.appendTo($("#allBeersContainer"));
  });
}

function saveToSS(theClickedProduct) {
  sessionStorage.setItem("productItem", JSON.stringify(theClickedProduct));
}
