function RegisterFun(){
    var name=document.getElementById("FNI").value;
    var Email=document.getElementById("EmI").value;
    var Password=document.getElementById("PI").value;
    var ConfPassword=document.getElementById("CPI").value;
    var Photo=document.getElementById("PhI").value;
    var Address=document.getElementById("AI").value;

    var nameErr = emailErr = passwordErr = confpasswordErr = photoErr =addressErr =true;
    if(Photo==""){
        document.getElementById("PHV").innerHTML="The photo is required."
       

    }else {
        document.getElementById("PHV").innerHTML=""
        photoErr=false;
    }
    if(Address==""){
        document.getElementById("AV").innerHTML="The address must not be empty."
     document.getElementById("AI").style.backgroundColor="#ffe6e6";
     document.getElementById("AI").style.borderColor="red";
     
      }else {
        document.getElementById("AV").innerHTML="";
     document.getElementById("AI").style.backgroundColor="white";
     document.getElementById("AI").style.borderColor="black";
     addressErr=false;
      }   

    
    const isValid = Password.length >= 8 &&
    /[A-Z]/.test(Password) &&
    /\d/.test(Password) &&
    /[@$!%*?&#]/.test(Password);

if(Password == "") {
document.getElementById("PV").innerHTML="The password must not be empty."
document.getElementById("PI").style.backgroundColor="#ffe6e6";
document.getElementById("PI").style.borderColor="red";
} else {
if (!isValid) {
    document.getElementById("PV").innerHTML="Password must be 8+ chars, include uppercase, number, and special character."
    document.getElementById("PI").style.backgroundColor="#ffe6e6";
    document.getElementById("PI").style.borderColor="red";

} else{
    document.getElementById("PV").innerHTML="";
    document.getElementById("PI").style.backgroundColor="white";
    document.getElementById("PI").style.borderColor="black";
      passwordErr = false;
}
}
if(ConfPassword=="")   {
    document.getElementById("CPV").innerHTML="This field must not be empty."
    document.getElementById("CPI").style.backgroundColor="#ffe6e6";
    document.getElementById("CPI").style.borderColor="red";
}
    if(ConfPassword!=Password){
        if(ConfPassword==""){
            document.getElementById("CPV").innerHTML="This field must not be empty."
            document.getElementById("CPI").style.backgroundColor="#ffe6e6";
            document.getElementById("CPI").style.borderColor="red";
         
          }else{
            document.getElementById("CPV").innerHTML="Passwords do not match."
         document.getElementById("CPI").style.backgroundColor="#ffe6e6";
         document.getElementById("CPI").style.borderColor="red";
       
          }
        }else {
            document.getElementById("CPV").innerHTML=""
            document.getElementById("CPI").style.backgroundColor="white";
            document.getElementById("CPI").style.borderColor="black";
            confpasswordErr=false;
           
        }

   
    if(Email == "") {
        document.getElementById("EV").innerHTML="The email must not be empty."
        document.getElementById("EmI").style.backgroundColor="#ffe6e6";
        document.getElementById("EmI").style.borderColor="red";
    } else {
        
        var regex = /^\S+@\S+\.\S+$/;    
        if(regex.test(Email) === false) {
            document.getElementById("EV").innerHTML="Invalid email address."
            document.getElementById("EmI").style.backgroundColor="#ffe6e6";
            document.getElementById("EmI").style.borderColor="red";
        } else{
            if(Email.includes(".admin")){
                document.getElementById("EV").innerHTML="Admins can't register, please log in."
                document.getElementById("EmI").style.backgroundColor="#ffe6e6";
                document.getElementById("EmI").style.borderColor="red";
               
            }else {
            document.getElementById("EV").innerHTML="";
            document.getElementById("EmI").style.backgroundColor="white";
            document.getElementById("EmI").style.borderColor="black";
            emailErr = false;
            }
        }
    }


        if(name == "") {
            document.getElementById("FNV").innerHTML="The first name must not be empty."
            document.getElementById("FNI").style.backgroundColor="#ffe6e6";
            document.getElementById("FNI").style.borderColor="red";
        } else {
            
            var regex = /^[a-zA-Z\s]+$/;                
            if(regex.test(name) === false) {
                document.getElementById("FNV").innerHTML="Invalid name."
        document.getElementById("FNI").style.backgroundColor="#ffe6e6";
        document.getElementById("FNI").style.borderColor="red";
             
            } else {
                document.getElementById("FNV").innerHTML="";
            document.getElementById("FNI").style.backgroundColor="white";
            document.getElementById("FNI").style.borderColor="black";
               
                nameErr = false;
            
                   
            }
        }

        if((nameErr || emailErr || confpasswordErr || passwordErr || photoErr|| addressErr) == true) {
            return false;
         } else {
            location.replace("file:///C:/Users/w/Documents/Web%20project/views/UserPage.html");
         }
    }   
    function CanFun(){
        location.replace("file:///C:/Users/w/Documents/Web%20project/views/Home.html");
    }
    