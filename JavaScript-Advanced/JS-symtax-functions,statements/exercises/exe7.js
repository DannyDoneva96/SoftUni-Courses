function cookingNumbers(num, one, two, three, four, five) {
   num = operator(num,one)
   console.log(num)
   num = operator(num,two)
   console.log(num)
   num = operator(num,three)
   console.log(num)
   num = operator(num,four)
   console.log(num)
   num = operator(num,five)
   console.log(num)

    function operator(num, key) {
        switch (key) {
            case "chop": num = num / 2
                break;
            case "dice": num = Math.sqrt(num)
                break;
            case "spice": num += 1
                break;
            case "bake": num = num * 3
                break;
            case "fillet": num *= 0.80
                break;
        }
        return num;
    }
}
cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')