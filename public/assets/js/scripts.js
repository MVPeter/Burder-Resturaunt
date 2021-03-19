
//Button to switch between eaten and to be eaten again.
$(".bbuttons").on("click", function(event) {
    event.preventDefault()
    let buttonId = $(this).data("id")
    let eatenStatus = $(this).data("eaten")

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

//button to submit a new hambuger to the DB.
$(".cbutton").on("click", function(event) {
    event.preventDefault()
    let nBurger = $('#nBurger').val();
    console.log(nBurger);
    $.ajax("/api/newBurger/", {
        method: "POST",
        data: {"burger_name": nBurger}
    }).then(
        () => {
            console.log("completed")
            location.reload()
        }
    )

});