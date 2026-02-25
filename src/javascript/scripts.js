//Seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatePasswordElement = document.querySelector("#generated-password");
//Funções 
const getLetterLowerCase = ()=>{
    return String.fromCharCode(Math.floor(Math.random()*26) +97);
}
const getLetterUpperCase = ()=>{
    return String.fromCharCode(Math.floor(Math.random()*26) +65);
}
const getNumber = () =>{
    return Math.floor(Math.random()*10).toString();
}
const getSymbol = ()=>{
    const symbols = "(){}[]=></,.!@#$%&*+-_";
    return symbols[Math.floor(Math.random() * symbols.length)];
}
const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) =>{
   let password = "";
   const passwordLenght = 10;

   const generator = [
        getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol
   ]
   for(i = 0; i < passwordLenght; i= i + 4){
     generator.forEach(()=>{
        const randomValue = generator[Math.floor(Math.random() * generator.length)]();
       password += randomValue;
     });
   }
   password = password.slice(0, passwordLenght);
   generatePasswordElement.style.display = "block";
   generatePasswordElement.querySelector("h4").innerText = password;
}
//Eventos
generatePasswordButton.addEventListener("click", () =>{
    generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol);
})
