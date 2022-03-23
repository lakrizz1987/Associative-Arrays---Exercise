function solve(input) {
    let result = {};

    for (let line of input) {
        if (line.includes('->')) {
            let [id, shelfGenge] = line.split(' -> ')
            if (!result.hasOwnProperty(id)) {

                result[id] = {};
                result[id][shelfGenge] = [];
            }

        } else if (line.includes(':')) {
            line = line.split(': ');
            let bookTitle = line.shift();
            let [bookAuthor,bookGenre] = line[0].split(', ');
            for (let key in result) {
                if(result[key].hasOwnProperty(bookGenre)){
                   let obj = {[bookTitle]:bookAuthor};
                   result[key][bookGenre].push(obj);
                }
            }
        }

    }

    let sorted = Object.entries(result).sort((a,b)=>{
       let valA = Object.entries(a[1]);
       let valB = Object.entries(b[1]);
      return valB[0][1].length - valA[0][1].length;
        
    })
    
    for (const element of sorted) {
        let print = ''
        print += element[0]
        print += ` ${Object.keys(element[1])[0]}: `
        let arr = Object.values(element[1]);
        print += arr[0].length;
        console.log(print);

        let sor = arr[0].sort((a,b)=>{
           let x = Object.keys(a)[0];
           let y = Object.keys(b)[0];
           return x.localeCompare(y);
        })
        for (const obj of sor) {
            let key = Object.keys(obj)[0];
            
           console.log(`--> ${key}: ${obj[key]}`);
        }

    }
    
}
solve(['1 -> mystery', '2 -> sci-fi',
'Child of Silver: Bruce Rich, mystery',
'Lions and Rats: Gabe Roads, history',
'Effect of the Void: Shay B, romance',
'Losing Dreams: Gail Starr, sci-fi',
'Name of Earth: Jo Bell, sci-fi'])