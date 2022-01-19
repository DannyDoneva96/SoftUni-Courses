function town(townsAsStrings){

    let result ={}
    //interate over inputs

    for(let data of townsAsStrings){
            //pasre entries 

      let tokens =  data.split(' <-> ');
      let name = tokens[0];
      let population = Number(tokens[1]);
          // store data

      if(result[name] == undefined){
        result[name] = population

      }else{result[name]+=population}

        
    }
    //print result
  console.log(result)
}
town(['Sofia <-> 5656565656','Germany <-> 8585858','italy <-> 5677777756','Sofia <-> 111111'])

