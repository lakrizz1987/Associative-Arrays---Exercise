function solve(input) {
    let garages = {};
    for (const el of input) {
        let [garage, ...carInfo] = el.split(' - ');
        
        if(!garages.hasOwnProperty(garage)){
            garages[garage] = [];
        }
        garages[garage].push(carInfo)
    }
    for (const key in garages) {
        console.log(`Garage № ${key}`)
        for (const iterator of garages[key]) {
           let output = '--- ';
            iterator.forEach(element => {
                output += element.replace(/: /g,' - ')
            });
            console.log(output)
        }
        
    }
}

solve(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']
)