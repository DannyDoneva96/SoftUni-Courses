function extract(content) {

}

function binaryArrayToNumber(dec) {
    let num = dec.join('');
    num = Number(num);
    let result =  (num >>> 0);
  return result 
  } 
  console.log(binaryArrayToNumber([0,0,1,0]))