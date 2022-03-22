function solve(input) {

    let result = {};

    for (let line of input) {
        if (line.includes('arrives')) {
            let name = line.split(' arrives')[0];
            result[name] = {};

        } else if (line.includes(':')) {
            line = line.split(': ');
            let name = line.shift();
            let [armyName, count] = line[0].split(', ');
            if (result.hasOwnProperty(name)) {
                result[name][armyName] = Number(count);
            }

        } else if (line.includes(' + ')) {
            line = line.split(' + ');
            let name = line.shift();
            let newCount = Number(line.shift());
            for (let key in result) {
                let obj = result[key];
                if (obj.hasOwnProperty(name)) {
                    result[key][name] += newCount;
                }
            }

        } else if (line.includes('defeated')) {
            let name = line.split(' defeated')[0];
            if (result.hasOwnProperty(name)) {
                delete result[name];
            }
        }
    }

    for (let key in result) {
        let total = 0;
        let array = Object.values(result[key]).map(x => total += x);
        result[key]['total'] = total;

    }

    let sorted = Object.keys(result).sort((a, b) => result[b].total - result[a].total);

    for (let name of sorted) {
        console.log(`${name}: ${result[name].total}`);
        let keys = Object.keys(result[name]).filter(x => x != 'total').sort((a,b)=>result[name][b]-result[name][a]);
        for (const element of keys) {
            console.log(`>>> ${element} - ${result[name][element]}`);
        }
    }
}
solve(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])