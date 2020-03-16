const maxSum = (arr) => {

  let sum = arr[0];
  let max = 0;

  for (let i = 1; i <= arr.length - 1; i++) {

    sum += arr[i];

    if (sum > max) {
      max = sum
    }

  }

return max

}

console.log(maxSum([4, 6, -3, 5, -2, 1]))

// O(n)