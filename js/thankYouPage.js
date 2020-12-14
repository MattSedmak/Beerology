$(function() {
    orderConfirmation();
})

function orderConfirmation(firstName) {
    $("<p>")
    .html(firstName)
    .appendTo(".orderPayedText");
}