//Make TO DO appear done by clicking on it
$("li").click(function(){
    $(this).toggleClass("completed");
});