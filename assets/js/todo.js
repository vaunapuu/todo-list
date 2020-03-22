//Make TO DO appear done by clicking on it
$("li").click(function(){
    $(this).toggleClass("completed");
});

// Click on X to delete a TO DO item
$("span").click(function)