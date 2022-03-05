function solve(input) {
    let result = new Set();

    for (let line of input) {
        let [command, carNumber] = line.split(', ');
        if (command === 'IN') {
            result.add(carNumber);
        } else {
            result.delete(carNumber);
        }
    }
    if (result.size != 0) {
        let arrayOfCarNumkbers = Array.from(result)
            .sort((a, b) => a.localeCompare(b) || a - b)
            .forEach(number => console.log(number));
    }else{
        console.log(`Parking Lot is Empty`)
    }

}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])