function solve(input){
    let i = 0;
    let min = Number.MAX_SAFE_INTEGER
    let n = input[i]
        while (n !== 'Stop') {
            n=Number(n);
            if(min>n){
                min=n
            }
            i++
            n = input[i]
        }
        console.log(min)
    }