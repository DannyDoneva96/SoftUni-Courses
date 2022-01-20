function solve(object) {
    // { model: 'VW Golf II',
    // engine: { power: 90,
    //           volume: 1800 },
    // carriage: { type: 'hatchback',
    //             color: 'blue' },
    // wheels: [13, 13, 13, 13] }

    const result = {
        model: object.model,
        engine,
        carriage,
        wheels,

    };

    function getEngine(power) {
        if (power <= 90) {
            return { power: 90, volume: 1800 }
        } else if (power <= 120) {
            return { power: 120, volume: 2400 }
        } else {
            return { power: 200, volume: 3500 }
        }
    }

    function getCarriage(carriage) {
       if(carriage=='hatchback') {
        return { type: 'hatchback', color: object.color }
       
        
       }else{
           return   { type: 'coupe', color: object.color }
       }
    }

    result.engine=getEngine(object.power)
    result.carriage=getCarriage(object.carriage)
    console.log(result)

} solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
)
solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
)