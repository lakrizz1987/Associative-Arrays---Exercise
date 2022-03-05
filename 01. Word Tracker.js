function solve(input) {
    let words = input.shift().split(' ');
    let result = {}

    words.forEach(element => result[element] = 0);

    for (let word of input) {
        if (result.hasOwnProperty(word)) {
            result[word] += 1;
        }
    }
    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(`${word} - ${count}`)
    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count',
    'the', 'occurances', 'of', 'the', 'words', 'this', 'and',
    'sentence', 'because', 'this', 'is', 'your', 'task'
]
)