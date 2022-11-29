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

    }else if(securityPasswordLength <=12){
        document.querySelector('.invalid_text').innerText = 'Password must be more than 12 charac. !'

    }else{
        document.querySelector('.invalid_text').innerText = '' 
        document.querySelector('.success_message').innerText = 'Login Successful !!!'
    }

}