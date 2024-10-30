function DelFun() {
  let name=document.getElementById("NI").value;
  if (name==""){
    document.getElementById("NV").innerHTML="Name must not be empty."
    document.getElementById("NI").style.backgroundColor="#ffe6e6";
    document.getElementById("NI").style.borderColor="red";
  }else {
    location.replace("file:///C:/Users/w/Documents/Web%20project/views/AdminPage.html")
  }
  }
  function CanFun() {
    location.replace("file:///C:/Users/w/Documents/Web%20project/views/AdminPage.html")
  }