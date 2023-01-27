const array = [1, 2, 3, 4, 5];

//  for (const i of array) {
//    console.log(i)
//  }

//  const novoArray = [];

//  array.forEach(item => {
//    novoArray.push(item * 2)
//  })

const novoArray = array.map(item => {
    if(item % 2 == 0) {
        return item * 10;
    } else {
        return item;
    }
})

console.log(JSON.stringify(novoArray));