// function notify(message) {
//   let div = document.getElementById('notification')
//   div.textContent = message
//   div.style.display = 'none'
//   let button = document.getElementsByTagName('button')[0]
//   button.addEventListener('click', () => {
//     div.style.display = 'block'
//   });

//   div.addEventListener('click', () => { div.style.display = 'none' });
// }
function notify(message) {
  const div = document.getElementById('notification');
  div.style.display = 'block';
  div.textContent = message;

  div.addEventListener('click', () => {
    div.style.display = 'none';
  })
}