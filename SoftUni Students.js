function solve(input) {
    let result = {};

    for (let line of input) {
        if (line.includes(':')) {
            line = line.split(': ');
            let nameCourse = line[0];
            let capacity = Number(line[1]);

            if (!result.hasOwnProperty(nameCourse)) {
                result[nameCourse] = {
                    capacity,
                    students: []
                }
            } else {
                result[nameCourse].capacity += capacity;
            }

        } else if (line.includes('[')) {
            line = line.split(' ');

            let [name, credits] = line[0].split(/[\[\]]/g);
            credits = Number(credits);
            let email = line[3];
            let curentCourse = line[5];
            if (result.hasOwnProperty(curentCourse) && result[curentCourse].capacity > 0) {
                result[curentCourse].students.push({ name, credits, mail: email });
                result[curentCourse].capacity--;
            }

        }
    }
    let entries = Object.entries(result).sort((a, b) => b[1].students.length - a[1].students.length);
    for (let element of entries) {
        console.log(`${element[0]}: ${element[1].capacity} places left`);

        let arr = result[element[0]].students;
        let sorting = arr.sort((a, b) => b.credits - a.credits);

        for (const obj of sorting) {

            console.log(`--- ${obj.credits}: ${obj.name}, ${obj.mail}`);
        }
    }
}

solve(['JavaBasics: 15',
'user1[26] with email user1@user.com joins JavaBasics',
'user2[36] with email user11@user.com joins JavaBasics',
'JavaBasics: 5',
'C#Advanced: 5',
'user1[26] with email user1@user.com joins C#Advanced',
'user2[36] with email user11@user.com joins C#Advanced',
'user3[6] with email user3@user.com joins C#Advanced',
'C#Advanced: 1',
'JSCore: 8',
'user23[62] with email user23@user.com joins JSCore']
)