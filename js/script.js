$(document).ready(function(){
  $("#button").click(function(){
    $("#myModal").modal();
  });
});

$(document).ready(function(){
  $("#button-sect-one").click(function(){
    $("#mysect-one").modal();
  });
});

$(document).ready(function(){
  $("#button-sect-two").click(function(){
    $("#mysect-two").modal();
  });
});

$(document).ready(function(){
  $("#button-sect-three").click(function(){
    $("#mysect-three").modal();
  });
});

var coll = document.getElementsByClassName("collapsible");
var i;
                  
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.maxHeight){
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  } 
  });
}
function openNavDesc() {
  document.getElementById("desc").style.width = "100%";
}

function closeNavDesc() {
  document.getElementById("desc").style.width = "0";
}

function openNavIr() {
  document.getElementById("ir").style.width = "100%";
}

function closeNavIr() {
  document.getElementById("ir").style.width = "0";
}

function openNavRs() {
  document.getElementById("rs").style.width = "100%";
}

function closeNavRs() {
  document.getElementById("rs").style.width = "0";
}

function rem(){
  document.getElementById("yes").innerHTML = "<strong>Thanks for feedback!</strong>";
  document.getElementById("no").innerHTML = "";
  $("button").removeClass("btn");
}

