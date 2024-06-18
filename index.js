window.addEventListener("DOMContentLoaded", () => {
  const buttonCallForlModalWindow = document.querySelector(".btn__try")
  const modalWindow = document.querySelector(".modal")
  const modalContent = document.querySelector(".modal__content")
  const buttonCloseModalWindow = document.querySelectorAll(".btn__close")
  const formElement = document.querySelector(".form")

  buttonCallForlModalWindow.addEventListener("click", (e) => {
    e.preventDefault()


    if (modalWindow.classList.contains("visually-hidden")) {
      document.body.classList.add("hidden-scroll")
      modalWindow.classList.remove("visually-hidden")
    }
  })

  buttonCloseModalWindow.forEach((btnClose) => {

    btnClose.addEventListener("click", (e) => {
      e.preventDefault()

      if (!modalWindow.classList.contains("visually-hidden")) {
        document.body.classList.remove("hidden-scroll")
        modalWindow.classList.add("visually-hidden")
      }

    })
  })

  const fieldLogin = document.getElementById("login")
  const fieldPassword = document.getElementById("password")
  const toggleRemember = document.getElementById("remember")

  if (localStorage.getItem("remember") === "true") {
    fieldLogin.value = localStorage.getItem('username');
    fieldPassword.value = localStorage.getItem('password');
    toggleRemember.checked = true;
  }



  formElement.addEventListener("submit", (e) => {
    e.preventDefault()

    const username = fieldLogin.value
    console.log(username)
    const password = fieldPassword.value
    console.log(password)
    const remember = toggleRemember.checked
    console.log(remember)

    if (remember) {
      localStorage.setItem('username', username)
      localStorage.setItem('password', password)
      localStorage.setItem('remember', true)
    } else {
      localStorage.removeItem('username')
      localStorage.removeItem('password')
      localStorage.removeItem('remember')
    }

    const formData = new FormData(formElement)
    const data = {}

    formData.forEach((value, key) => {
      data[key] = value
    })
    console.log(data)

    const successfulLoginMessage = document.createElement("div")
    successfulLoginMessage.style = "max-width:100%; padding: 300px 30px; border-radius: 10px; position: absolute; z-index: 15; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white"
    const titleMeassge = document.createElement("h1")
    successfulLoginMessage.append(titleMeassge)
    titleMeassge.textContent = `Вы вошли в кабинет под именем: ${data.username}`

    modalContent.append(successfulLoginMessage)

    setInterval(() => {

      if (!modalWindow.classList.contains("visually-hidden")) {
        document.body.classList.remove("hidden-scroll")
        modalWindow.classList.add("visually-hidden")
      }

      modalContent.removeChild(successfulLoginMessage)
    }, 5000)
  })
})