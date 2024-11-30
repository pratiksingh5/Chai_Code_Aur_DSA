function isVowel(character) {
    let lowerChar = character.toLowerCase()
    let vowels = "aeiou"

    if(vowels.indexOf(lowerChar) !== -1){
        return true
    }
    else{
        return false
    }
}


function recursiveCountVowels(string, stringLength) {
    console.log(`Length: ${stringLength}`)
    console.log(`Current String: ${string.substring(0, stringLength)}`)

    if(stringLength == 1) {
        console.log("Base case got hit here")
        console.log("Base case: ", Number(isVowel(string[0])))

        return Number(isVowel(string[0]))
    }

    let result = recursiveCountVowels(string, stringLength -1) + isVowel(string(stringLength - 1))

    console.log(`count after checking ${string[stringLength - 1]} : ${result}`)

    return result
}