function sameNumbers(argument){

    let string = argument.toString();
     let sum = 0;
     let isSame = true;
     
     for (let i = 0; i < string.length;i++){
        sum +=  Number(string[i]);
        let cheker = Number(string[0]);
        if(string[i]==cheker){
           //do nothing
        }else{isSame=false;}
     }

console.log(isSame);
console.log(sum);
}
sameNumbers(2222222)//true,14
sameNumbers(1234)// false,10