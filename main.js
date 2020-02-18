var submit = document.querySelector(".submit");
var email = document.querySelector(".email");
var confirmedEmail = document.querySelector(".email-confirm");
var comment = document.querySelector(".comment-box");

function ValidateEmail()
{
 if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}




submit.addEventListener("click",
function(){
  if(email.value!==confirmedEmail.value){
    alert("Emails provided do not match, please try again")
  }
  else{
  alert("Successful Form Completion.Thanks for the feedback");
  setTimeout(
    function(){
      location.href="thankyou.html"
    },300)
  }
}
);
