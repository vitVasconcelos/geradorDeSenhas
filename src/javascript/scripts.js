//Seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatePasswordElement = document.querySelector("#generated-password");

//Seleção de elementos para as funcionalidades novas
const openCloseGeneratorButton = document.querySelector("#open-generate-password");
generatePasswordContainer = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#lenght");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordButton = document.querySelector("#copy-password");

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
   const passwordLenght = +lengthInput.value;

   const generator = [];
    if(lettersInput.checked){
        generator.push(getLetterLowerCase, getLetterUpperCase);
    }
    if(numbersInput.checked){
        generator.push(getNumber);
    }
    if(symbolsInput.checked){
        generator.push(getSymbol);
    }
    if(generator.length === 0){
        return;
    }
   for(i = 0; i < passwordLenght; i= i+ generator.length){
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
});

openCloseGeneratorButton.addEventListener("click", ()=>{
    generatePasswordContainer.classList.toggle("hide");
});

copyPasswordButton.addEventListener("click", (e)=>{
    e.preventDefault();
    const password = generatePasswordElement.querySelector("h4").innerText;
    navigator.clipboard.writeText(password).then(()=>{
        copyPasswordButton.innerText = "Senha copiada";

        setTimeout(() => {
            copyPasswordButton.innerText = "Copiar"
        }, 1500);
    }) 
})