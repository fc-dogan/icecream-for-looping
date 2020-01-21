$(document).ready(function(){
  var flavers = ["vanilla", "chocolate", "strawberry", "cheesecake"]

  flavers.forEach(function(flaver){
    $("#list").append("<li>" + flaver + "</li>"); 
  })

})