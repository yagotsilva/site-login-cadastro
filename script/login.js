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
  email: document.querySelector('input.email'),
  password: document.querySelector('input.password'),

  getValues() {
    return {
      email: Form.email.value,
      password: Form.password.value
    }
  },

  validateFields() {
    const { email, password } = Form.getValues()
    if(email.trim() === "" ||
    password.trim() === "" ){
      throw new Error("please, complete the form")
    }
  },

  userExist() {
    const { email } = Form.getValues()
    const user = Users.all.find(element => {
      return element.email === email;
    });
    return user;
  },

  clearFields() {
    Form.email.value = ""
    Form.password.value = ""
  },

  submit(event) {
    
    try{
      event.preventDefault();
      Form.validateFields();
      const { email } = Form.getValues()
      
      const user = Form.userExist();
  
      if (!user) {
        document.querySelector('p.msg').classList.add('error')
        Form.clearFields();

      }else {
        Form.clearFields();
        window.location.href = "./initial-page.html"
      }
    }catch(error){
      alert(error.message)
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
