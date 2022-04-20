//clicking on the images will toggle to add to order or remove from order
$("div.category").on("click", "img", addToOrder);
$("div#order").on("click", "img", removeFromOrder);
$("button#restart").on("click", restartOrder);

function addToOrder(event) {
    //get img name from clicked item & remove from category
    let orderImage = $(event.target).remove();
    //append img to order column
    $("div#order").append(orderImage);
}

function removeFromOrder(event) {
    //select item that was clicked & remove from order
    let removeImage = $(event.target).remove();
    //retrieve data category of clicked item to move back to that category
    let removeCat = $(event.target).attr('data-category');
    //add back to original category
    $(`div${removeCat}`).append(removeImage);
}

function restartOrder() {
    //loop thru each element to move back to original category
    $("img").each(function(index, element) {
        let removeImage = $(element).remove();
        let removeCat = $(element).attr('data-category');
        $(`div${removeCat}`).append(removeImage);
    })
}