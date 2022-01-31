function attachGradientEvents() {
    let gradient= document.getElementById('gradient');
    gradient.addEventListener('mousemove',onMove);
    let output= document.getElementById('result')

    function onMove(ev){
        let box=ev.target
        let offset=Math.floor(ev.offsetX  / box.clientWidth*100);
        output.textContent=`${offset}%`

    }
}