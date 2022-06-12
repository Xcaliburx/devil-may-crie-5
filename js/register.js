function validateForm(){
    let name = document.getElementById("name");
    let address = document.getElementById("address");
    let number = document.getElementById("number");
    let password = document.getElementById("password");
    let email = document.getElementById("email");

    let errorMsg = "";
    if(name.value == ""){
        errorMsg += "Name cannot be empty\n";
    }
    else if(name.value.length < 5){
        errorMsg += "Name must be more than 5 characters\n"
    }

    if(email.value == ""){
        errorMsg += "Email cannot be empty\n";
    }
    else if(!email.value.includes("@")){
        errorMsg += "Email must contain @\n";
    }
    
    if(address.value = ""){
        errorMsg += "Address cannot be empty\n";
    }
    else if(!address.value.startsWith("Jl. ")){
        errorMsg += "Address must start with Jl.\n";
    }

    if(number.value == ""){
        errorMsg += "Product Number cannot be empty\n";
    }
    else if(number.value.length != 12){
        errorMsg += "Product number must be 12 characters\n";
    }
    else if(!number.value.endsWith("xxxx")){
        errorMsg += "Product number must end with xxxx\n";
    }

    if(password.value == ""){
        errorMsg += "Password cannot be empty\n";
    }

    alert(errorMsg);
}