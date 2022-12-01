function form_validation(){

    let userName = document.querySelector('#username').value
    console.log(userName)

    let userNameLength = userName.length
    console.log(userNameLength)

    let emailId = document.querySelector('#email').value
    console.log(emailId)

    let emailIdLength = emailId.length
    console.log(emailIdLength)

    let emailStructure = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    console.log(emailStructure)

    let securityPassword = document.querySelector('#password').value
    console.log(securityPassword)

    let securityPasswordLength = securityPassword.length
    console.log(securityPasswordLength)



    if (userNameLength <=5){
        document.querySelector('.invalid_text').innerText = 'Name should between 5 to 10 characters !'

    }else if (userNameLength >=10){
        document.querySelector('.invalid_text').innerText = 'Name should between 5 to 10 characters !'

    }else if(!emailId.match(emailStructure)){
        document.querySelector('.invalid_text').innerText = 'Please enter a valid e-mail address !'

    }else if(securityPasswordLength <=0){
            document.querySelector('.invalid_text').innerText = 'Password is required !!!'
    
    }else if(securityPasswordLength <=5){
        document.querySelector('.invalid_text').innerText = 'Your password is too weak !!!'

    }else if(securityPasswordLength <=10){
        document.querySelector('.invalid_text').innerText = 'Your password is moderate !!!'

    }else if(securityPasswordLength <=15){
        document.querySelector('.invalid_text').innerText = '' 
        document.querySelector('.success_message').innerText = 'Password is strong and submitted successfully !!!'

    }else{
        document.querySelector('.invalid_text').innerText = '' 
    }

}

