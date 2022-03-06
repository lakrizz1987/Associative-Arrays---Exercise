function solve(input) {
    let result = {};

    for (let i = 0; i < input.length; i++) {
        let name = input[i];
        i++;
        let qty = Number(input[i]);
        if (!result.hasOwnProperty(name)) {
            result[name] = qty;
        } else {
            result[name] += qty;
        }
    }

    for (let key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'])