function solution(num) {

    let myNum = num;

    return function add(num) {
      return myNum + num;
    }


}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
