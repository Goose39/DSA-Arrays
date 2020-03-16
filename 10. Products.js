const product = (arr) => {
  const newArr = []
  let product;
  for(let i = 0; i < arr.length; i++) {
    product = 1;
    for(let j = 0; j < arr.length; j++) {
      
      if (i != j) {
        product *= arr[j];
      }
      
    }
    newArr.push(product);
  }
  return newArr;
}

const arr1 = [1, 3, 9, 4];
console.log(product(arr1));
