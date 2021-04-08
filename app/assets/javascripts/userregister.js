
//User Validation
let Register= function(){
    $("#conracterr").hide()
    $("#user_contact").keyup(function(){
        let c=$("#user_contact").val()
        if((c.length<10) || (c.length>10)){
            $("#conracterr").show();
            $("#conracterr").html('Contact number shoud be 10 Digit');
            $("#conracterr").addClass('red-text');
        }
        else{
            $("#conracterr").html('✔️ It is looks great');
            $("#conracterr").addClass('lime-text');
        }
    })
}
$(document).ready(function(){
    if($(".users.new").length){
        Register()
        console.log(`dgfhg`)
    }
})