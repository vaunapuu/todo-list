//Make TO DO appear done by clicking on it
$("li").click(function(){
    //if li is gray
    if ($(this).css("color") === "rgb(128, 128, 128)") {
        // turn it black
        $(this).css("color", "black");
        $(this).css("text-decoration", "none");
    } 
    else {
        // turn it gray
        $(this).css("color", "gray");
        $(this).css("text-decoration", "line-through");
    }
});