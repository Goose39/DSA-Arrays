const removeChars = (str, charSet) => {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    
    if (!charSet.includes(str[i])) {
      newStr += str[i]
    }
  }

  return newStr;

}

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))