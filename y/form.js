function validate(){
    var usr = document.getElementById("user").value.trim()
    var emal = document.getElementById("email").value.trim()
    var pas = document.getElementById("pass").value.trim()
    var repas = document.getElementById("repass").value.trim()

// console.log(usr)

if(usr == null || usr == ""){
    document.getElementById("p1").innerHTML="** Required User_Name"
    return false
}


if(emal == null || emal == ""){
    document.getElementById("p2").innerHTML="** Required Email"
    return false
}
if(pas.length <8 || pas.length == ""){
    document.getElementById("p3").innerHTML="** Password length must be 8"
    return false
}
if(repas !=pas || repas=="" ){
    document.getElementById("p4").innerHTML="Password not match"
    return false
}


if(usr!=""  && emal!="" && pas === true && repas ==true){
    
 
    
    }

    
    else{

        document.getElementById("p1").innerHTML=""
        document.getElementById("p2").innerHTML=""
        document.getElementById("p3").innerHTML=""
        
      
    window.location.href="quizz.html"
    }
}