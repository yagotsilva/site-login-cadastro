//localstorage
const Storage = {
  get(){
    return JSON.parse(localStorage.getItem("users:site-login")) ||
    []
  },

  set(users) {
    localStorage.setItem("users:site-login", JSON.stringify(users))
  }
}

// Users in the localstorage
const Users = {
  all: Storage.get(),
  add(user){
    Users.all.push(user)

    Storage.set(Users.all)

    App.reload()
  },
}

const Form = {
  name: document.querySelector('input#name'),
  email: document.querySelector('input#email'),
  password: document.querySelector('input#password'),

  // get values of input and put in the users
  getValues() {
    return {
      name: Form.name.value,
      email: Form.email.value,
      password: Form.password.value
    }
  },

  validateFields() {
    const { name, email } = Form.getValues()
    if(name.trim() === "" ||
    email.trim() === "" ){
      throw new Error("please, complete the form")
    }
  },

  // verification of email exist or don't in the sistem
  userExist() {
    const { email } = Form.getValues()
    const user = Users.all.find(element => {
      return element.email === email;
    });
    return user;
  },
  //clear the form
  clearFields() {
    Form.name.value = ""
    Form.email.value = ""
    Form.password.value = ""
  },

  submit(event) {
    try{
      event.preventDefault();
      Form.validateFields();
      
      const user = Form.userExist();
      
      if (!user) {
        Users.add(Form.getValues());
        Form.clearFields();
        window.location.href = "./login.html"
      } else {
        document.querySelector('input#email').classList.add('error')
        document.querySelector('p#msg').classList.add('error')
        // Form.clearFields();
      }
    } catch(error){
      alert(error.message);
    }
    
  }
}

const App = {
  init () {
    Storage.set(Users.all)
  },
  reload() {
    App.init()
  }
}

App.init()