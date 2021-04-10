//User Validation
let Register= function(){
    $("#conracterr").hide()
    $("#user_contact").keyup(function(){
        let contact=$("#user_contact").val()
        if((contact.length<10) || (contact.length>10)){
            $("#conracterr").removeClass('lime-text');
            $("#conracterr").show();
            $("#conracterr").html('Contact number shoud be 10 Digit');
            $("#conracterr").addClass('red-text');
        }
        else{
            $("#conracterr").removeClass('red-text');
            $("#conracterr").html('✔️ It is looks great');
            $("#conracterr").addClass('lime-text')
        }
    })
    $("#fnameerr").hide()
    $("#user_fname").keyup(function(){
        let fname=$(this).val()
        if(fname.match('^[a-zA-Z]{1,16}$')){
            $("#fnameerr").show()
            $("#fnameerr").html('✅ Vaild First Name')
            $("#fnameerr").addClass('lime-text')
        }else{
            $("#fnameerr").removeClass('lime-text')
            $("#fnameerr").addClass('red-text')
            $("#fnameerr").html('❌ Invaild First Name')
        }   
    })
    $("#lnameerr").hide()
    $("#user_lname").keyup(function(){
        let fname=$(this).val()
        if(fname.match('^[a-zA-Z]{3,16}$')){
            $("#lnameerr").show()
            $("#lnameerr").html('✅ Vaild Last Name')
            $("#lnameerr").addClass('lime-text')
            $("#lnameerr").removeClass('red-text')
        }else{
            $("#lnameerr").removeClass('lime-text')
            $("#lnameerr").addClass('red-text')
            $("#lnameerr").html('❌ Invaild Last Name')
        }   
    })
    //Email validation Start
    $("#emailerr").hide()
    $("#user_email").keyup(function(){
        let email=$("#user_email").val()
        var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if(email.match(pattern)){
            $("#emailerr").show()
            $("#emailerr").html('✅ Vaild Email')
            $("#emailerr").addClass('lime-text')
            $("#emailerr").removeClass('red-text')

        }else{
            $("#emailerr").html('❌ Invaild Email ex:google@gmail.com')
            $("#emailerr").addClass('red-text')
            $("#emailerr").removeClass('lime-text')

        }
    })
    //Email validation End

    

    //Password match validation start
        $("#passmatch").hide()
        $("#user_password,#user_password_confirmation").keyup(function(){
            let pass=$("#user_password").val()
            let cpass=$("#user_password_confirmation").val()
            if(pass != cpass){
                $("#passmatch").show()
                $("#passmatch").html('❌ Password match does not match')
                $("#passmatch").addClass('red-text')
                $("#passmatch").removeClass('lime-text')

            }else{

                $("#passmatch").html('Password match ')
                $("#passmatch").addClass('lime-text')
                $("#passmatch").removeClass('red-text')
            }
        })
    //Password Match Validation end

}

$(document).ready(function(){
    if($(".users.new").length){
        Register()
    }
})
