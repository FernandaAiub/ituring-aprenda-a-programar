let produtoA = { nome: 'camiseta', valor: 100.0, internacional: true }
let produtoB = { nome: 'perfume', valor: 200.0, internacional: true }
let produtoC = { nome: 'sandália', valor: 120.0, internacional: false }

if (produtoA.internacional == false) {
  let valorImpostos = produtoA.valor * 1.12
  console.log(
    'A ' + produtoA.nome,
    'é nacional e tem um valor de ' + valorImpostos
  )
} else {
  let valorImpostos = produtoA.valor * 1.2
  colnsole.log(
    'A ' + produtoA.nome,
    'é internacional e tem um valor de ' + valorImpostos
  )
}

if (produtoB.internacional == false) {
  let valorImpostos = produtoB.valor * 1.12
  console.log(
    'A ' + produtoB.nome,
    'é nacional e tem um valor de ' + valorImpostos
  )
} else {
  let valorImpostos = produtoB.valor * 1.2
  colnsole.log(
    'A ' + produtoB.nome,
    'é internacional e tem um valor de ' + valorImpostos
  )
}

if (produtoC.internacional == false) {
  let valorImpostos = produtoC.valor * 1.12
  console.log(
    'A ' + produtoC.nome,
    'é nacional e tem um valor de ' + valorImpostos
  )
} else {
  let valorImpostos = produtoC.valor * 1.2
  colnsole.log(
    'A ' + produtoC.nome,
    'é internacional e tem um valor de ' + valorImpostos
  )
}
