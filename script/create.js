var register = function() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  localStorage.setItem('name', name)
  localStorage.setItem('email', email)
  localStorage.setItem('password', password)

}
document.onsubmit = register;


var Form = document.getElementById('form')

form.addEventListener('submit',function(event){
  event.prenventDefault()

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
})




