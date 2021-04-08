
let cart=(function(){
let cartcount
    function UpdateChangeListner(){
        //Update Cart Start
        $("select").on("change",function(){
             let cartitemid = $(this).attr("data-qty");
             let cartitemqty = $(this).val()
             $.ajax({
                 url:"cartitems/update",
                 method:"POST",
                 data: {id:cartitemid,qty:cartitemqty},
                 success: (data)=>{
                    M.toast({html: 'Cart is Updated quantity is ' +cartitemqty,classes: 'lime rounded'})
                    showcart()
                 }
             })
        });
    }

    function showcart(){
        //Get Cart Data Start
        let output = "";
        let menuid = 
        $.ajax({
            url:"/cart/",
            method:"GET",
            dataType: "json",
            success:function(data){
                if (data) {
                    x =data;
                } else{
                    x="";
                }
                let cartid=x[0].cart_id
                $("#inputcartid").html("<input type='hidden' name='cart_id' value="+ cartid +" >")
                for(i = 0;i < x.length ; i++){
                    output +=  "<tr><td>"+ x[i].menu_name +"</td><td><select  data-qty=" + x[i].id +" class='browser-default qtycart' ><option value="+ x[i].qty +" selected>"+ x[i].qty +"</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option></select></td><td>" +  x[i].price + "</td> <td>"+ x[i].total +"</td><td> <button class='delitem material-icons btn pink' data-menuid="+x[i].menu_id+" data-id="+x[i].id+" ><i class='material-icons left'>remove_shopping_cart</i></button></td></tr>";            
                     $("#mid"+x[i].menu_id).html("<a  class='btn tooltipped amber darken-1' data-tooltip='Cheke in Cart'>GO to Cart</a>") 
                   menuid = x[i].menu_id
                }
                $("#mcart").text(cartcount)
                $("#carttbody").html(output);
                $(".mobileviewbtn").html("<a href='#'><i class='material-icons left'>remove_shopping_cart</i></a>")
                if (x.length==0){
                    $("#billamount").hide()
                }else{
                    $("#billamount").show().html("<h5> Total Amount:-" + x[0].billamount + "</h5>")
                }
                UpdateChangeListner();
            }

        });  
    //Get Cart Data End here
    }
    showcart();

    //Create Cart Start here
    $(".addcart").on("click",function(e){
        e.preventDefault()
        let menuid=$(this).attr("data-menu");

        $.ajax({
            url:"/cartitems/create/",
            method: "POST",
            data: {menu_id:menuid,qty:1},
            success: (data)=>{
            showcart()
            $("#mid"+menuid).html("<a  class='btn tooltipped amber darken-1' data-tooltip='Cheke cart>")
            M.toast({html: 'Added to Cart ',classes:'rounded lime'})


            },

        });
    });
    //Create Cart End here
       
    //Delete Cart data Start

    $("#carttbody").on("click",".delitem",function(){
        cartcount = cartcount-1
        let delid =$(this).attr("data-id");
        let menuid =$(this).attr("data-menuid");
        let deldata= {id:delid}
        let delthis=this;
        $.ajax({
            url:"/cartitems/destroy",
            method: "delete",
            data: deldata,
            success: function(data) {
                $(delthis).closest("tr").fadeOut().html("Menu was removed").fadeOut(3000).remove()
                $("#mid"+menuid).html("<button type='submit' class='btn addcart' data-menu="+ menuid +">Add to Cart</button>")
                M.toast({html: 'Removed from Cart',classes: 'rounded red accent-1'})   
            }

        });
    });

});


$(document).ready(()=>{
    if( $(".home.index").length){
        cart()
        $('.tooltipped').tooltip();
    }
})