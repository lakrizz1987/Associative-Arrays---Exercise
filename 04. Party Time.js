function solve(input) {
    let vipInvites = [];
    let regularInvites = [];

    let invite = input.shift();
    while (invite != 'PARTY') {
        if (invite[0].charCodeAt(0) >= 48 && invite[0].charCodeAt(0) <= 57) {
            vipInvites.push(invite);
        } else {
            regularInvites.push(invite);
        }
        invite = input.shift();
    }
    for (let guest of input) {
        if (vipInvites.includes(guest)) {
            let index = vipInvites.indexOf(guest);
            vipInvites.splice(index, 1);
        } else if (regularInvites.includes(guest)) {
            let index = regularInvites.indexOf(guest);
            regularInvites.splice(index, 1);
        }
    }
    let totalPeopleNotCome = vipInvites.length + regularInvites.length;
    console.log(totalPeopleNotCome);
    vipInvites.forEach(x => console.log(x));
    regularInvites.forEach(x => console.log(x));
}

solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])