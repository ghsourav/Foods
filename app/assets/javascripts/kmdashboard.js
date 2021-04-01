
kitchen = function(){    
    //get order start here
    $(".ordermodal").on("click",function(){
        let output
        let porderid = $(this).attr("data-order")
        let url= `/getorder/`+porderid
        $.ajax({
            url:url,
            method:'GET',
            success:(data)=>{
                if (data) {
                    x =data;
                } else{
                    x="";
                }
                for(i = 0;i < x.length ; i++){
                    output +=  "<tr><td>"+ x[i].menu_name +
                    "</td><td>"+ x[i].qty +
                    "</td><td>"+ x[i].price + 
                    "</td><td>"+ x[i].total +"</td><td>";
                }
                $("#mbody").html(output);
                $("#billordermodal").html('Total Bill is: '+x[0].billamount)
            }
            })
    })

    //get order end here


    //Get user Details Start
    $(".usermodal").on("click",function(){
        let porder = $(this).attr("data-user")
        console.log(porder)
        $.ajax({
            url:'/getuser/'+porder,
            method:'GET',
            success:(data)=>{
                console.log(data)
                $("#cdetails").html("<b>Name</b> <p>"+ data.fname +
                "  " + data.lname +"</p><b>Contact No</b><p>"+ data.contact +"</p><b>E-mail</b><p>"+ data.email +"</p>")
            }
        })

    })

    //Get user Details End



     //Status Update Start
     $(".status").on("change",function(){
        let orderid=$(this).attr("data-status")
        let status =$(this).val()
        let cs=$(this)
             $.ajax({
            url:'placeorder/update',
            method:"POST",
            data:{id:orderid,status:status},
            success:(data)=>{
                $(".notice").html(`Order Id `+ orderid + ` Updated as ` + status  ).show().fadeOut(1500)
                if(status=='complete'){
                    $(cs).closest("tr").fadeOut(500).remove(1000)
                }
            } 
        })
    })

    //Staus Update End

    


    //Modal Calling Start
    $('.modal').modal()
    //Modal Calling End

    //Datatable Start
    $('.striped').DataTable()
    //Datatable End

}
$(document).ready(function(){
    if($(".kmdashboard").length){
        kitchen();
    }
});

