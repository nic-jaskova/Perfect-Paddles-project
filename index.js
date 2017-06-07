function clickhandler (e){
  // console.log (e);
  var name= prompt("Enter your name")
  // $get ("sign-up.js?name=" + name, function (response) {
  alert("Thanks for signing up")

}

// var response = {
//   name "Nicole",
// }

$('#sign-up').on('click', clickhandler)
