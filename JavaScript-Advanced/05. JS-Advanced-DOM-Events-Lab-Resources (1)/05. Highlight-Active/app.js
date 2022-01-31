function focused() {
    Array
    .from(document.getElementsByTagName('input'))
    .forEach(fun =>{
        fun.addEventListener('focus', onFocus);
        fun.addEventListener('blur',onBlur);

    });

    function onFocus(ev) {
        ev.target.parentNode.className = 'focused';

    }
    function onBlur(ev) {
        ev.target.parentNode.className = '';
    }
}