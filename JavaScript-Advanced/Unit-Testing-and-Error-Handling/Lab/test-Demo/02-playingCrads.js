function card(face,suit){
    let faces=["2","3","4","5","6","7","8","9","10","J","Q","K",'A']
    let suites = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',

    };
    if(faces.includes(face)==false){
        throw new Error('Invalid face: ' + face);
    }
    if(Object.keys(suites).includes(suit)==false){
        throw new Error('Invalid suit: ' + suite);

    }
    return{
        face,
        suit: suites[suit],
    toString(){
        return this.face + this.suit
    }
    }
}