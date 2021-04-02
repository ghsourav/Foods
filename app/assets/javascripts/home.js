let Home = function(){
    $("#mcart").on("click",function(){
        $(".col.s3").addClass("mdisplayBlock")
        $(".col.s3").children("table").addClass("table")
        $(".col.s9").addClass("mdisplayNone")

    })

    $("#mcartclose").on("click",function(){
        $(".s3").removeClass("mdisplayBlock")
        $(".s3").children("table").removeClass("table")
        $(".col.s9").removeClass("mdisplayNone")
    })
}

$(document).ready(()=>{
    if( $(".home.index").length){
        Home()
    }
    
})