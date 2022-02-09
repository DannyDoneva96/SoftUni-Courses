function solve(input){
    let floors = Number(input[0])
    let rooms=Number(input[1])

    for(let f=floors;f>=1;f--){
        let prin=' ';
        for(let r = 0;r<rooms;r++){
            if(f==floors){
                prin+=`L${f}${r} `
            }else if(f%2==0){
                prin+=`O${f}${r} `
            }else if(f%2!==0){
                prin+=`A${f}${r} `
            }
        }
        console.log(prin)
    }
}