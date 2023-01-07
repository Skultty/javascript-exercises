const fibonacci = function(n) {
    let a = 1, b = 0, temp;

    if (n < 0) {
        return "OOPS";
    }

    while (n > 0) {
      temp = a;
      a = a + b;
      b = temp;
      n--;
    }

    return b;
};


// Do not edit below this line
module.exports = fibonacci;
