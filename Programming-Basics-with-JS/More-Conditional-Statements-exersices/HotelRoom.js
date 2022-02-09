function solve(input) {
    let seasone = input[0];
    let nights = Number(input[1]);
    let studio;
    let apartment;
    let priceStudio ;
    let priceApartment ;
    if (seasone == 'May' || seasone == 'October') {
        studio = 50
        apartment = 65
        priceStudio = nights * studio;
        priceApartment = nights * apartment;
        if (nights > 7&&nights<14) {
            priceStudio = priceStudio - (priceStudio * 0.05)
        } else if (nights >= 14) {
            priceStudio = priceStudio - (priceStudio * 0.30)
        }
    } else if (seasone == 'June' || seasone == 'September') {
        studio = 75.20
        apartment = 68.70
        priceStudio = nights * studio;
        priceApartment = nights * apartment;
        if (nights > 14) {
            priceStudio = priceStudio - (priceStudio * 0.20)
        }

    } else if (seasone == 'July' || seasone == 'August') {
        studio = 76
        apartment = 77
        priceStudio = nights * studio;
        priceApartment = nights * apartment;
    }
    if (nights > 14) {
        priceApartment = priceApartment - (priceApartment * 0.10)
    }

    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`)
}