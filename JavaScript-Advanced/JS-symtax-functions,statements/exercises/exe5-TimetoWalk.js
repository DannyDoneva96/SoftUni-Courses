    //every 500meters student rest 1min
    //Calculate how long the student walks from home to university and print 
    //on the console the result in the following format: `hours:minutes:seconds`.
   
    function solve(steps, footprint, kmh) {
        let distance = steps * footprint;
        let speedInMps = kmh / 3.6;
    
        let time = distance / speedInMps
        let breaks = Math.trunc(distance / 500)
        time += (breaks * 60);
    
        let hours = Math.trunc(time / 3600);
        let minutes = Math.trunc((time % 3600) / 60);
        let seconds = Math.ceil(time % 60);
    
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }    
