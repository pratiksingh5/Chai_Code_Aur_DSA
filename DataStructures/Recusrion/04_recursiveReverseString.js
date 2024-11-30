function recursiveReverseString(string) {
  console.log(`current String: ${string}`)

  // base case
  if(string === ""){
    console.log("blank hua")
    return string
  }

  let reversePart = recursiveReverseString(string.substring(0, string.length - 1))
  let result = string[string.length - 1] + reversePart;
  console.log("result ",result)
  console.log("string ",string)



  console.log(`Reversing Last character: ${string[string.length - 1] } added in from of ${reversePart} to form a result ${result}`)

  return result
}

let output = recursiveReverseString("Hello")

console.log(output)