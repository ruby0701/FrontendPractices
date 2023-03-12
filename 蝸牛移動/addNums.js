
function addNumbs(n) {
    let oddSum = 0;
    let evenSum = 0;

    if (n === 1) {
        console.log(1);
        return 1;
    }

    for (let i = 2; i <= n; i++) {

        if (i % 2 === 1) {
            oddSum += i;
        }
        if (i % 2 === 0) {
            evenSum += i;
        }
    }


    console.log(evenSum, oddSum);
    console.log(evenSum - oddSum + 1);
    return evenSum - oddSum + 1;
}

addNumbs(1);