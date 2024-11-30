// indexOf 

// let vowels = "aieou";

// let str = ""

// let res = vowels.indexOf(str)
// console.log(res)

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

// function countVowels(string) {
//     let count = 0

//     for(let i = 0; i < string.length; i++) {
//         if(isVowel(string[i])){
//             count += 1
//         }
//     }

//     return count
// }

function countVowels(string) {
    let map = {};

    for(let i = 0; i < string.length; i++) {
        if(isVowel(string[i])){
            if (!map[string[i]]) {
                map[string[i]] = 1;
            } else {
                map[string[i]]++;
            }
        }
    }

    return map
}

let output = countVowels("Prateek")

console.log(output)