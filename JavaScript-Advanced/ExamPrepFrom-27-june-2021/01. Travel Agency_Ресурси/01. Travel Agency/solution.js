window.addEventListener('load', solution);

function solution() {

  //select the elements that


  let name = document.getElementById('fname');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let address = document.getElementById('address');
  let code = document.getElementById('code');
  let submitBtn = document.getElementById('submitBTN')
  submitBtn.addEventListener('click', submit);

  let previewUl = document.getElementById('infoPreview')
  let editBtn = document.getElementById('editBTN')
  editBtn.addEventListener('click', edit);
  let continueBTN = document.getElementById('continueBTN')
  continueBTN.addEventListener('click', finalMessage)
  let obj = {}

  function submit(e) {
    if (name.value == '' || email.value == '') { return }

    obj.name = name.value,
      obj.email = email.value,
      obj.phone = phone.value,
      obj.address = address.value,
      obj.code = code.value

    previewUl.innerHTML += `<li>Full Name: ${obj.name}</li>
        <li>Email: ${obj.email}</li>
        <li>Phone Number: ${obj.phone}</li>
        <li>Adress: ${obj.address}</li>
        <li>Postal Code: ${obj.code}</li>`

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBTN.disabled = false;
    name.value = ''
    email.value = ''
    phone.value = ''
    address.value = ''
    code.value = ''
  }

function edit(e){
  previewUl.innerHTML = '';
  name.value = obj.name
  email.value =obj.email
  phone.value = obj.phone
  address.value = obj.address
  code.value = obj.code

  submitBtn.disabled = false;
  editBtn.disabled = true;
  continueBTN.disabled = true;
}



  function finalMessage() {

    let block = document.getElementById('block');
    block.innerHTML = `<h3>Thank you for your reservation!</h3>`
  }


}
