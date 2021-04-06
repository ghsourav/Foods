let userdashboard = function(){

    $(".btn").on("click",function(){
        $(this).html("Show More   <i class='material-icons'>arrow_downward</i>")
        let btnid = $(this).attr("id")
        let contentclass =$(this).attr("data-class")
        $("."+contentclass).slice(0,2).show();
        $("#"+btnid).on("click",function(){
            $("."+contentclass+":hidden").slice(0,2).fadeIn(1000);
            if($("."+contentclass+":hidden").length == 0) {
                $("#"+btnid).removeClass("btn").text("No more orders Avialable").addClass("NoorderAVl");
            }
        })
   });
}
$(document).ready(function(){
    if($(".userdashboard").length){
        userdashboard()
    }
})