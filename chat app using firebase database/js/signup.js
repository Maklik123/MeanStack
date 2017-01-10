/*jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});
$( "#myform" ).validate({
  rules: {
    password: "required",
    password_again: {
      equalTo: "#password"
    }
  }
});
password: {
    required: true,
    minlength: 6,
    maxlength: 10

},
cfmPassword: {
    required: true,
    equalTo: "#password",
    minlength: 6,
    maxlength: 10
}
$('#cnfrmpassword').equalTo $('#password');
$(function(){
  $.validator.setDefaults({
               debug: true,
               success: "valid"
           });

                 $("#Myform").validate({
               rules: {
                   password: {
                     required: true,
						minlength: 6,
						maxlength: 10,

                   } ,

				       cfmPassword: {

						equalTo: "#password",
                     minlength: 6,
						maxlength: 10
                   }


               }

});
});

*/



var SignupRef= firebase.database().ref('/Signup/');

$('#submit').on('click',function(e){

  e.preventDefault();

  var obj = {
    'fname': $('#firstname').val(),
    'lname': $('#lastname').val(),
    'email': $('#email').val(),
    'password': $('#password').val(),
    'cnfrmpass':$('#cnfrmpassword').val(),
    'month':$('#month').val(),
    'day':$('#day').val(),
    'year':$('#year').val(),
    'male':$('#male').val(),
    'female':$('#female').val(),
    }
  SignupRef.push(obj);

  window.location='chat.html';
});



/*SignupRef.on('child_added', function(snapshot){
  $('#container div').append(
    "<label>Name"+snapshot.val().fname+snapshot.val().lname+"</label>"
  );
});*/
