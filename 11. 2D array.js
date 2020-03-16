// Incomplete

const explode = (arr) => {
  const newArr = [...arr];

  for (let i = 0; i <= arr.length - 1; i++) {
    for (let k = 0; k <= arr.length - 1; k++) {
      console.log(i, k);
      if (arr[i][k] === 0) {
        for (let j = 0; j <= arr.length -1; j++) {
          newArr[i][j] = 0;
          newArr[j][k] = 0;
        }
      }
      console.log(arr);
      console.log(newArr);
    }
  }
  console.log("final", newArr);
}

const twoDArray = 
[
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
];
explode(twoDArray)