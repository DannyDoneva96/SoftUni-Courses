function radiansToDegrees(radians) {
    let rad = Number(radians[0])
    let degree = rad* 180 / Math.PI
    console.log(degree.toFixed(0))
}
radiansToDegrees((["3.1416"]))