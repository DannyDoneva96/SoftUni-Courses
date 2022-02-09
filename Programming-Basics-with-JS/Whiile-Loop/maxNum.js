function solve(input){
    let i = 0;
    let max = Number.MIN_SAFE_INTEGER
    let n = input[i]
        while (n !== 'Stop') {
            n=Number(n);
            if(max<n){
                max=n
            }
            i++
            n = input[i]
        }
        console.log(max)
    }