function gcd( num1, num2) {
    if(num1 === num2) {
        return num1
    }

    if(num1 > num2) {
        return gcd(num1 - num2, num2)
    }
    else {
        return gcd(num1, num2 - num1)
    }
}