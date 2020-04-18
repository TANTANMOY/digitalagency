
$(document).ready(function(){
    $("#ConfirmPassword").keyup(function(){
         if ($("#Password").val() != $("#ConfirmPassword").val()) {
             $("#msg").html("Password do not match").css("color","red");
         }else{
             $("#msg").html("Password matched").css("color","green");
        }
  });

  $("form").submit(function(){
    alert("Signup successful.Please Login");
    return false
  });
});