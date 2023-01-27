const array = [1, 2, 3, 4, 5, "sim"];

//  const todosItensNumeros = array.every(item => {
//    return typeof item == "number";
//  });

const todosItensNumeros = array.every(item => typeof item == "number");
console.log(todosItensNumeros);