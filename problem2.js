if(localStorage.getItem("visitCount")){
    var visitCount = parseInt(localStorage.getItem("visitCount")) + 1;
  } else {
    var visitCount = 1;
  }
  localStorage.setItem("visitCount", visitCount);
  alert("You have visited this site " + visitCount + " times.");
  