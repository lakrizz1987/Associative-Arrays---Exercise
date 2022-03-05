function solve(input) {
    let words = input.toLowerCase().split(' ');
    let result = {};

    for (let word of words) {
        if (!result.hasOwnProperty(word)) {
            result[word] = 1;
        } else {
            result[word] += 1;
        }
    }

    let print = '';

    let filtered = Object
        .entries(result)
        .filter(x => x[1] % 2 !== 0)
        .forEach(array => print += ` ${array[0]}`);

    console.log(print);

}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')