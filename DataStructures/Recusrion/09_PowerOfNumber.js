function powerOfNumber(base, exp) {
    if(exp === 0) {
        return 1
    } else {
        let result = base * powerOfNumber(number, exp - 1)
        return result
    }
}

console.log(powerOfNumber(3,4))