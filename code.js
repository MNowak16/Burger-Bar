//clicking on the images will toggle to add to order or remove from order
$("div#grid").on("click", "img", addToOrder);
$("div#order").on("click", "img", removeFromOrder);

function addToOrder(event) {
    //get img name from clicked item
    let orderImage = $(event.target);

    // remove img from category column
    $(event.target).remove();

    //append img to order column
    $("div#order").append(orderImage);

    //make sure that bottom-bun is the bottom image & top-bun is the top image
}

function removeFromOrder(event) {
    //select item that was clicked

    //remove from order

    //add back to original category
}

// // set the image's src attribute
// cardImage.attr("src", `card-images/${randomNumber}.png`);
//
// // set the image's alt attribute
// cardImage.attr("alt", "playing card");
//
// // Add the new card as the last child of the play area
// $("#play-area").append(cardImage);
