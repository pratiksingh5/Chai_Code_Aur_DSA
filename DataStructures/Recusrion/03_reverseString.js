function reverseString(string) {
    let reverse = ""
    let length = string.length - 1

    while(length >= 0) {
        reverse = reverse + string[length]
        length = length - 1
    }

    return reverse
}

let output = reverseString("hello");

console.log(output)