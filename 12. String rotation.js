const checkRotation = (str1, str2) => {
  let str1Rotation = str1;

  for (let i = 1; i <= str1.length; i++) {
    str1Rotation = rotate(str1Rotation);

    if (str1Rotation === str2) {
      return true
    }

  }
  
  return false

}

const rotate = (str) => {
  let newStr = '';

    for (let k = 1; k <= str.length; k++) {
      if (k === str.length) {
        newStr += str[0]
      } else newStr += str[k];

    }

  return newStr
}

console.log(checkRotation("amazon", "azonam"));