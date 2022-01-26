function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      
      let searchEl= document.getElementById('searchField').value
      let rowEl = Array.from(document.querySelectorAll('tbody tr'))

      rowEl.forEach(el=>{el.className="";});

      let filtredRows=rowEl.filter(el=>{
         let values = Array.from(el.children);
         if(values.some(x=>x.textContent.includes(searchEl))){
            el.className = 'select'
         }
      });
      document.getElementById('searchField').value= '';
   }

}