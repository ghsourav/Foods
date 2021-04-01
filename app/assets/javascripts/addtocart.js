
$(document).ready(function(){

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
                    console.log(`Cart update`)
                    showcart()
                 }
             })
        });
    }

    function showcart(){
        //Get Cart Data Start
        let output = "";

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
                    output +=  "<tr><td>"+ x[i].menu_name +"</td><td><select  data-qty=" + x[i].id +" class='qtycart' ><option value="+ x[i].qty +" selected>"+ x[i].qty +"</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option></select></td><td>" +  x[i].price + "</td> <td>"+ x[i].total +"</td><td> <button class='delitem material-icons btn pink' data-id="+x[i].id+" >remove_shopping_cart</button></td></tr>";
                }
                $("#carttbody").html(output);
                $("#billamount").html("<h5> Total Amount:-" + x[0].billamount + "</h5>");

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
            },

        });
    });
                //Create Cart End here
       
    //Delete Cart data Start

    $("#carttbody").on("click",".delitem",function(){
        let delid =$(this).attr("data-id");

        let deldata= {id:delid}
        let delthis=this;
        $.ajax({
            url:"/cartitems/destroy",
            method: "delete",
            data: deldata,
            success: function(data) {
                $(delthis).closest("tr").fadeOut().html("Menu was removed").fadeOut(3000).remove()
            }

        });
    });

});


