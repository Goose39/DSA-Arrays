require('./array')

function main(){

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push("tauhida");

  console.log(arr[0]);
}

main();