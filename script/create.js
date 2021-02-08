
const registerClient = {

  name() {
    document.getElementById('name').value;
  },
  email() {
    document.getElementById('email').value;
  },
  
}
 console.log(registerClient.name())

const Form = {
  name: document.querySelector('input#name'),
  email: document.querySelector('input#email'),

  getValues() {
    return{
      name: Form.name.value,
      email: form.email.value
    }
  },

  validateFields() {
    const { name, email } = Form.getValues()
    console.log(name)
  },

  submit(event) {
    event.preventDefault()
   
  }
}