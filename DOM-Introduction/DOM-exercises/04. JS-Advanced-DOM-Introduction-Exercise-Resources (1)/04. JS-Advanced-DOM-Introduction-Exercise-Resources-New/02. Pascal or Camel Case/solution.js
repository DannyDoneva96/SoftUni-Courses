function solve() {

  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = applyNamingCOnvention(text, convention)
  document.getElementById('result').textContent = result
  function applyNamingCOnvention(text, convention){
    const  conventionSwitch = {
      'Pascal Case': () => text
      .toLowerCase()
      .split(' ')
      .map(x => x[0].toUpperCase() + x.slice(1))
      .join(''),

      'Camel Case': ()=> text
      .toLowerCase()
      .split(' ')
      .map((x,i) => x = i !==0 ? x[0].toUpperCase() + x.slice(1): x)
      .join(''),
      default: () =>  'Error!'
    };
    return (conventionSwitch[convention] || conventionSwitch.default)();
  }
  }

