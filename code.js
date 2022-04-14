//clicking on the images will toggle to add to order or remove from order
$("div.category").on("click", "img", addToOrder);
$("div#order").on("click", "img", removeFromOrder);

function addToOrder(event) {
    //get img name from clicked item & remove from category
    let orderImage = $(event.target).remove();
    let orderID = $(event.target).attr('id');
    let orderCat = $(event.target).attr('data-category');

    //append img to order column
    //make sure that images are odered to resemble a burger
    if (orderID == "bottom-bun") {
        $("p#bottom").append(orderImage);
    }
    else if (orderID == "patty") {
        $("p#patty").append(orderImage);
    }
    else if (orderID == "top-bun") {
        $("p#top").append(orderImage);
    }
    else if (orderCat == "#extras") {
        $("p#extras").append(orderImage);
    }
    else if (orderCat == "#condiments") {
        $("p#condiments").append(orderImage);
    }
}

function removeFromOrder(event) {
    //select item that was clicked & remove from order
    let removeImage = $(event.target).remove();
    let removeID = $(event.target).attr('id');
    let removeCat = $(event.target).attr('data-category');

    //add back to original category
}