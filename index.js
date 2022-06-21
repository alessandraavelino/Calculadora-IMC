
let calcular = document.getElementById("calcular")


function calcularIMC(){
    let nome = document.getElementById("nome").value
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    let  resultado = document.getElementById("resultado")
    if (nome !== "" && altura !== "" && peso !== ""){

        let imc = (peso / (altura * altura)).toFixed(2);
        
        let classificacao = "";

        if (imc < 18.5){
           classificacao = "você está abaixo do peso!";
           
        } else if (imc < 25){
            classificacao = "você está com o peso ideal.";

        } else if (imc < 30){
            classificacao = "você está levemente acima do peso.";
        } else if (imc < 35){
            classificacao = "você está com obesidade de grau I";

        } else if (imc < 40){
            classificacao = "você está com obesidade de grau II";

        } else {
            classificacao = "você está com obesidade de grau III. Muita atenção!";
        }
        resultado.innerHTML = `${nome} seu IMC é ${imc} e ${classificacao}`
        
    

    } else {
        resultado.innerHTML = "Preencha todos os campos!"
    }
    
}

calcular.addEventListener("click", calcularIMC)