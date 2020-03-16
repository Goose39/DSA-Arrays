const covertSpaces = (str) => {

  let newStr = '';

  for (let i = 0; i <= str.length - 1; i++) {

    if (str[i] === ' ') {
      newStr += '%20'
    } else newStr += str[i]
  }

return newStr

}

console.log(covertSpaces("www.thinkful.com /tauh ida parv een"))

// O(n)