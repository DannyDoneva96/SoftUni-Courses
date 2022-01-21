function extractText() {
       let items = document.getElementById('items').children
       let array =[]
       for(let item of Array.from(items)) {
            array.push(item.textContent)
         }
       
         let result =document
         .getElementById('result')
         .textContent =array.join('\n')


}