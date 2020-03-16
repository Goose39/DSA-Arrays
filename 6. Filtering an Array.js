const remove = (arr) => {

  let newArr = [];

  for (let i = 0; i <= arr.length - 1; i++) {

    if (arr[i] > 5) {
      newArr.push(arr[i])
    } 

  }

return newArr

}

console.log(remove([5, 6, 10, 1, 2, 25]))

// O(n)