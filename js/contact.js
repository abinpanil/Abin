const form = document.getElementById('submit-form');
const fname = document.getElementById('name');
const email = document.getElementById('email');
const error = document.getElementById('error')
console.log(error)

console.log(form)
form.addEventListener('submit', (e) => {

    flag=0
    const fnameValue = fname.value
    const emailValue = email.value.trim();

    if(fnameValue === ''){
        
        setErrorFor(fname, 'Name cannot be blank');
        flag++
    }
    if(emailValue === ''){

        setErrorFor(email, 'Email cannot be blank');
        flag++
    }else if(isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid')
        flag++
    }

    if(flag > 0){
        e.preventDefault()
    }
     

    function setErrorFor(input, message){

        const formcontrol = input.parentElement;

        console.log(formcontrol)

        const small = formcontrol.querySelector('small')

        small.innerText = message;
       
        error.className = ' error';
    }
   
    
    function isEmail(email) {
        return /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    }
    
})

   