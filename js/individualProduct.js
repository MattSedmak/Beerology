$(function () {
  renderProduct();
  addProductToCart();
  createTable();
  descriptionPart();
});

function renderProduct() {
  let product = $("#product");
  $("<img>").attr("src", "../Pictures/punkIPA.png").appendTo(product);

  $("<p>").html("Punk IPA").appendTo(product);

  $("<p>").html("IPA").appendTo(product);

  $("<p>").html("$2.0").appendTo(product);
}

function addProductToCart() {
  let addToCart = $("#addToCart");
  $("<label>")
    .attr("for", "amountOfBeer")
    .html("Quantity: ")
    .appendTo(addToCart);

  let amount = $("<div>");
  $("<button>")
    .attr("type", "button")
    .html("-")
    .addClass("increaseAndDecrease")
    //.on("click", function () {
    //decreaseProducts(currentProduct);
    // })
    .appendTo(amount);

  $("<input>")
    .attr("type", "text")
    .attr("value", "1")
    .attr("id", "amountOfBeer")
    .attr("name", "amountOfBeer")
    .appendTo(amount);

  $("<button>")
    .attr("type", "button")
    .addClass("increaseAndDecrease")
    .html("+")
    //.on("click", function () {
    //increaseProducts(currentProduct);
    //})
    .appendTo(amount);
  amount.appendTo(addToCart);

  $("<button>")
    .addClass("addToCartButton")
    .attr("type", "button")
    .html("Add to cart")
    .appendTo(addToCart);
}

function createTable() {
  let infoDiv = $("#info");

  let table = $("<table>");
  let tableRow1 = $("<tr>");
  $("<th>").html("SIZE").appendTo(tableRow1);
  $("<th>").html("ABV").appendTo(tableRow1);
  $("<th>").html("RATING").appendTo(tableRow1);

  let tableRow2 = $("<tr>");
  $("<td>").html("33cl").appendTo(tableRow2);
  $("<td>").html("5,5%").appendTo(tableRow2);
  $("<td>").html("4/5").appendTo(tableRow2);

  tableRow1.appendTo(table);
  tableRow2.appendTo(table);
  table.appendTo(infoDiv);
}

function descriptionPart() {
  let about = $("#about");
  $("<h1>").html("THE BEER").appendTo(about);
  $("<p>")
    .html("A lot of text will be presented here :D :D :D")
    .appendTo(about);
}
