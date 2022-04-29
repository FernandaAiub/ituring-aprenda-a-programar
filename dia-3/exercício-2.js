let produtoA = { nome: 'camiseta', valor: 100.0, internacional: true }
let produtoB = { nome: 'perfume', valor: 200.0, internacional: true }
let produtoC = { nome: 'sandália', valor: 120.0, internacional: false }

if (produtoA.internacional == false) {
  let valorImpostos = produtoA.valor * 1.12
  console.log('O produto é nacional')
  console.log('As ' + produtoA.nome, 'tem um valor de ' + valorImpostos)
} else {
  let valorImpostos = produtoA.valor * 1.2
  console.log('O produto é internacional')
  console.log('As ' + produtoA.nome, 'tem um valor de ' + valorImpostos)
}

if (produtoB.internacional == false) {
  let valorImpostos = produtoB.valor * 1.12
  console.log('O produto é nacional')
  console.log('Os ' + produtoB.nome, 'tem um valor de ' + valorImpostos)
} else {
  let valorImpostos = produtoB.valor * 1.2
  console.log('O produto é internacional')
  console.log('Os ' + produtoB.nome, 'tem um valor de ' + valorImpostos)
}

if (produtoC.internacional == true) {
  let valorImpostos = produtoC.valor * 1.2
  console.log('O produto é internacional')
  console.log('As ' + produtoC.nome, 'tem um valor de ' + valorImpostoss)
} else {
  let valorImpostos = produtoC.valor * 1.12
  console.log('O produto é nacional')
  console.log('As ' + produtoC.nome, 'tem um valor de ' + valorImpostos)
}
