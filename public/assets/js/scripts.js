
$(".bbuttons").on("click", function() {
//   console.log("clicked");
    let buttonId = $(this).data("id")
    let eatenStatus = $(this).data("eaten")
    console.log(!eatenStatus)
    // frank = !frank
    console.log(buttonId)

    $.ajax("/api/burger/" + buttonId, {
        type: "PUT",
        data: {"eaten": eatenStatus}
    }).then(
        () => {
            console.log("completed")
            location.reload()
        }
    )
    

})