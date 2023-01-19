let num = [5, 8, 2, 9, 3]
num.push(1)
console.log(num)
console.log(`O valor tem ${num.length} posições`)
console.log(``)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.sort()
console.log(``)
console.log(`Após o num.sort o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
console.log(``)
if(pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}