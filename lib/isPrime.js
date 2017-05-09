function isAPrimeNumber(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function displayPrime(n) {
    if (typeof n !== "number"){
        throw "Input a number";
    }
    else if (n <= 0){
        throw "Number must be greater than 0";
    }
    else if((n === 1) || (n === 2)){
        var arr = [];
        console.log(arr);
    }
    else {
        arr = [2];
        for ( var i = 3; i < n; i+=2 ) {
            if ( isAPrimeNumber(i) ) {
                arr.push(i);
            }
        }
        console.log(arr);
    }
}

