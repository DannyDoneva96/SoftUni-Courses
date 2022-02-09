function solve(input) {
    let degreese = Number(input[0])
    let timeOfTheDay = input[1]
    let outfit = 0
    let shoes = 0
    switch (timeOfTheDay) {
        case 'Morning':
            if (10 <= degreese && degreese <= 18) {
                outfit = 'Sweatshirt'
                shoes = 'Sneakers'
            } else if (18 < degreese && degreese <= 24) {
                outfit = 'Shirt'
                shoes = 'Moccasins'
            } else if (degreese >= 25) {
                outfit = 'T-Shirt'
                shoes = 'Sandals'
            }

            break;
        case 'Afternoon':
            if (10 <= degreese && degreese <= 18) {
                outfit = 'Shirt'
                shoes = 'Moccasins'
            } else if (18 < degreese && degreese <= 24) {
                outfit = 'T-Shirt'
                shoes = 'Sandals'
            } else if (degreese >= 25) {
                outfit = 'Swim Suit'
                shoes = 'Barefoot'
            }


            break;
        case 'Evening':
            if (10 <= degreese && degreese <= 18) {
                outfit = 'Shirt'
                shoes = 'Moccasins'
            } else if (18 < degreese && degreese <= 24) {
                Outfit = 'Shirt'
                shoes = 'Moccasins'
            } else if (degreese >= 25) {
                outfit = 'Shirt'
                shoes = 'Moccasins'
            }
            break;

    }
    console.log(`It's ${degreese} degrees, get your ${outfit} and ${shoes}.`)
}