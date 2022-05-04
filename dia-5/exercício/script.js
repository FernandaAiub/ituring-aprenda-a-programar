const calculoIMC = (peso, altura) => {
  let imc = peso / (altura * altura)
  return imc
}

const resultadoIMC = imc => {
  let faixaIMC
  if (imc < 18.5) {
    faixaIMC = 'Abaixo do peso ideal'
  }
  if (imc >= 18.5 && imc <= 24.9) {
    faixaIMC = 'Normal'
  }
  if (imc >= 25.0 && imc <= 29.9) {
    faixaIMC = 'Sobrepeso'
  }
  if (imc >= 30.0 && imc <= 40.0) {
    faixaIMC = 'Obesidade'
  }
  if (imc > 40.0) {
    faixaIMC = 'Obesidade grave'
  }

  return faixaIMC
}

const mostrarResultadoIMC = () => {
  let peso = Number(document.getElementById('peso').value)
  let altura = Number(document.getElementById('altura').value)

  let imc = calculoIMC(peso, altura)
  document.getElementById('resultado').innerText = 'O seu IMC é: ' + imc

  let faixaIMC = resultadoIMC(imc)
  alert('Sua faixa de IMC é: ' + faixaIMC)
}
