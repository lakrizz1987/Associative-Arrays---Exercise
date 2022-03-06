function solve(input) {
    let cardPower = {
        1: 10,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    }

    let cardType = {
        S: 4,
        H: 3,
        D: 2,
        C: 1
    }

    let result = {};

    for (let line of input) {
        let [name, cards] = line.split(': ');
        cards = cards.split(', ');
        if (!result.hasOwnProperty(name)) {
            result[name] = [];
            for (let card of cards) {
                if (!result[name].includes(card)) {
                    result[name].push(card);
                }
            }
        } else {
            for (let card of cards) {
                if (!result[name].includes(card)) {
                    result[name].push(card);
                }
            }
        }
    }

    let arrayPlayers = Object.entries(result);

    for (let [name, cards] of arrayPlayers) {
        let totalPoints = 0;
        for (let card of cards) {
            let cardPoints = card[0];
            let type = card[card.length - 1];
            totalPoints += cardPower[cardPoints] * cardType[type];

        }
        console.log(`${name}: ${totalPoints}`);
    }
}
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])