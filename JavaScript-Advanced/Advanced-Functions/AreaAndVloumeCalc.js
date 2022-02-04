function solve(area, vol, input) {
   
    let result = []
    let cordinatesArr = JSON.parse(input);

    for(let cordinates of cordinatesArr) {
        
        let Obj= { area:area.call(cordinates) , volume: vol.call(cordinates) }
        result.push(Obj)

    }
    console.log(result)

}solve(area,vol,`[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    )
    function vol() {
        return Math.abs(this.x * this.y * this.z);
    };
    function area() {
        return Math.abs(this.x * this.y);
    };
    