function argumentInfo(...param){
    let result =[];
    let result2 = {};
    for(let every of param){
          let type = typeof(every)
          result.push(`${type}: ${every}`);
          result2[type] = result2[type]!==undefined ? result2[type] +1 :1
    }
     Object.keys(result2).sort((a,b) =>result2[b] - result2[a])
     .forEach(key => result.push(`${key} = ${result2[key]}`));

    console.log(result.join('\n'));
  

}argumentInfo('cat', 42,24, function () { console.log('Hello world!'); })