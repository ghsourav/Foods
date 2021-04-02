
let cart=(function(){

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
                
                for(i = 0;i < x.length ; i++){
                    output +=  "<tr><td>"+ x[i].menu_name +"</td><td><select  data-qty=" + x[i].id +" class='qtycart' ><option value="+ x[i].qty +" selected>"+ x[i].qty +"</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option></select></td><td>" +  x[i].price + "</td> <td>"+ x[i].total +"</td><td> <button class='delitem material-icons btn pink' data-menuid="+x[i].menu_id+" data-id="+x[i].id+" ><i class='material-icons left'>remove_shopping_cart</i></button></td></tr>";            
                    $("#mid"+x[i].menu_id).html("<a  class='btn amber darken-1' href='/cart'>GO to Cart</a>")
                }
                $("#carttbody").html(output);
                $("#mid"+menuid).html("<a  class='btn amber darken-1' href='/cart'>GO to Cart</a>")
                $(".mobileviewbtn").append("<a href='#'><i class='material-icons left'>remove_shopping_cart</i>"+ x.length +"</a>")
                $("#billamount").html("<h5> Total Amount:-" + x[0].billamount + "</h5>")
                $("#inputcartid").html("<input type='hidden' name='cart_id' value="+ cartid +" >")
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
           // $("#mid"+menuid).html("<a  class='btn amber darken-1' href='/cart'>GO to Cart</a>")

            },

        });
    });
                //Create Cart End here
       


    //Delete Cart data Start

    $("#carttbody").on("click",".delitem",function(){
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
                $("#mid"+menuid).html("<button type='submit' class='btn  addcart' data-menu="+ menuid +">Add to Cart</button>")
            }

        });
    });

});


$(document).ready(()=>{
    if( $(".home.index").length){
        cart()
    }
})