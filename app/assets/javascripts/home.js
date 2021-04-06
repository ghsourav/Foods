let Home = function(){
    /*  Mobile  View Start*/
    $("#mcart").on("click",function(){
        $('.product').addClass('hide-on-med-and-down')
        $('.cart').removeClass('hide-on-med-and-down')
    })
    $("#mcartclose").on("click",function(){
        $('.product').removeClass('hide-on-med-and-down')
        $('.cart').addClass('hide-on-med-and-down')
    })
}
    /*  Mobile  View End*/
$(document).ready(()=>{
    if( $(".home.index").length){
        Home()
    }
})