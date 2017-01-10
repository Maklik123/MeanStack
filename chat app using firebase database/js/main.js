/*$(function(){
var textfield = $("input[name=user]");
          /*  $('button[type="submit"]').click(function(e) {
                e.preventDefault();
                //little validation just to check username
                if (textfield.val() != "") {
                    //$("body").scrollTo("#output");
                    $("#output").addClass("alert alert-success animated fadeInUp").html("Welcome back " + "<span style='text-transform:uppercase'>" + textfield.val() + "</span>");
                    $("#output").removeClass(' alert-danger');
                    $("input").css({
                    "height":"0",
                    "padding":"0",
                    "margin":"0",
                    "opacity":"0"
                    });
                    //change button text
                    $('#btnlogin').html("continue")
                    .removeClass("btn-info")
                    .addClass("btn-default").click(function(){
                    $("input").css({
                    "height":"auto",
                    "padding":"10px",
                    "opacity":"1"
                    }).val("");
                    });

                    //show avatar
                    $(".avatar").css({
                        "background-image": "url('http://api.randomuser.me/0.3.2/portraits/women/35.jpg')"
                    });
                } else {
                    //remove success mesage replaced with error message
                    $("#output").removeClass(' alert alert-success');
                    $("#output").addClass("alert alert-danger animated fadeInUp").html("sorry enter a username ");
                }
                //console.log(textfield.val());

            });
});*/

$("#passwordfield").on("keyup",function(){
    if($(this).val())
        $(".glyphicon-eye-open").show();
    else
        $(".glyphicon-eye-open").hide();
    });
$(".glyphicon-eye-open").mousedown(function(){
    $("#passwordfield").attr('type','text');
}).mouseup(function(){
$("#passwordfield").attr('type','password');
}).mouseout(function(){
$("#passwordfield").attr('type','password');
});
var SignUp= firebase.database().ref('/Signup/');

$('#btnsignup').on('click',function(e){
  e.preventDefault();
  window.location='signup.html';

});

var Login= firebase.database().ref('/Signup/');
var email_id=$('loginemail').val();
var email_pass=$('passwordfield').val();
$('btnlogin').on('click',function(){
    Login.on('child_added', function(snapshot){
        if(email_id==snapshot.val().email&&email_pass==snapshot.val().password){
          window.location='chat.html';
        }
    });



});
