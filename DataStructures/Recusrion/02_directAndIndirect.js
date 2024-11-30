// direct 

function printNumber(min, max) {
  if(min > max) {
    return
  }

//   console.log(min)
  printNumber(min + 1, max);
  console.log(min)
}

printNumber(1, 5)


// Indirect 
 
function inDirectPrintNumber(min, max) {
    if(min > max) {
        return
    }

    console.log(min)

    min = min + 1;
    
    logic(min, max)
}

function logic(min, max) {
    if(min > max) {
        return
    }

    inDirectPrintNumber(min, max)
}

inDirectPrintNumber(6,10)