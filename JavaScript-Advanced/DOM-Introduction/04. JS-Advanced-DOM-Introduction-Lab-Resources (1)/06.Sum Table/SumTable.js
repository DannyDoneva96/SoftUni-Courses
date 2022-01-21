function sumTable() {

     let td= document.querySelectorAll('table tr td')
      let array =Array.from(td)
      let sum = 0;
       for (let i=1; i<array.length; i+=2){
            sum+=Number(array[i].textContent)
       }

        document.getElementById('sum').textContent = sum
}