// 1 to n

function getASum(n) {
  if (n === 1) {
    return n;
  } else {
    n + getASum(n - 1);
  }
}
