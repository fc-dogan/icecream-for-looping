$(document).ready(function(){
  var flavers = ["vanilla", "chocolate", "strawberry", "cheesecake"]

  for (var index =0; index < flavers.length; index+= 1) {
    $("#list").append("<li>" + flavers[index] + "</li>"); 
  }

})

