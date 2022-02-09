function solve(input) {
    let bujet = Number(input[0]);
    let seasone = input[1]
    let place;
    let cost;
    let kindOfvac;
    if (bujet <= 100) {
        place = 'Bulgaria';
        if (seasone == 'winter') {
            kindOfvac = 'Hotel'
            cost = bujet -= bujet * 0.30
        } else if (seasone == 'summer') {
            kindOfvac = 'Camp'

            cost = bujet -= bujet * 0.70
        }
    }
    if (bujet > 100 && bujet <= 1000) {
        place = 'Balkans'
        if (seasone == 'winter') {
            kindOfvac = 'Hotel'
            cost = bujet -= bujet * 0.20
        } else if (seasone == 'summer') {
            kindOfvac = 'Camp'
            cost = bujet -= bujet * 0.60;
        }
    }
        if (bujet > 1000) {
            place = 'Europe'
            kindOfvac = 'Hotel'
            bujet -= bujet * 0.10
            // console.log('Somewhere in ' + place)
            // console.log(kindOfvac + ' - ' + bujet.toFixed(2))
        }
    
    console.log('Somewhere in ' + place)
    console.log(kindOfvac + ' - ' + bujet.toFixed(2))

}