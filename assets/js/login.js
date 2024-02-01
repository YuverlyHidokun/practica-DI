function login(){
    let user,password
    
    user = document.getElementById("usuario").value
    password = document.getElementById("contraseña").value

    if(user == 'Yuverly' && password == 'Hidokun2003.y'){
        window.location = "dashboard.html"

    }else{
        alert("Su usuario o contraseña son incorrectas, vuelva a ingresarlas")
    }

}