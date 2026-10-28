let peso= parseFloat(prompt("coloque seu peso em kg"))
let altura= parseFloat (prompt("coloque sua altura em metros"))
let IMC = calcularIMC(peso,altura)

function calcularIMC(peso,altura)
{return peso / (altura * altura) }

function classificarIMC(IMC){
   
if(IMC>40){
    alert("Obesidade grau 3)" + IMC)
}
 else if(IMC>35)
alert("Obesidade grau 2") + IMC

else if (IMC>30)
alert("Obesidade grau 1") + IMC

else if (IMC>25)
alert("Sobrepeso") + IMC

else if (IMC>18.5)
alert("Peso Normal") + IMC

else if (IMC<18.5)
alert("Magreza / Abaixo do peso") + IMC

}

function GerarRelatorio(peso,altura){
    let IMC = calcularIMC(peso,altura)
    classificarIMC(IMC)
}

GerarRelatorio(peso,altura)


