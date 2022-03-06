function solve(input) {
    let result = {};

    for (let line of input) {
        let [companyName, id] = line.split(' -> ');
        if (!result.hasOwnProperty(companyName)) {
            result[companyName] = [];
            result[companyName].push(id);
        } else {
            if (!result[companyName].includes(id)) {
                result[companyName].push(id);
            }
        }
    }

    let sorted = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, allId] of sorted) {
        console.log(name);
        for (const id of allId) {
            console.log(`-- ${id}`);
        }
    }
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'])