const repeatString = function(str, num) {
    
    if (num < 0) {
        return 'ERROR';
    }
    
    let sum = '';
    for (let i = 0; i < num; i++) {
        sum += str;
    }
    return sum;
};

// Do not edit below this line
module.exports = repeatString;
