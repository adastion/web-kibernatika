window.addEventListener("DOMContentLoaded", () => {
  const buttonCallForlModalWindow = document.querySelector(".btn__try")
  const modalWindow = document.querySelector(".modal")
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

  formElement.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(formElement)
    const data = {}
    formData.forEach((value, key) => {
      data[key] = value
    })
    console.log(data)
  })
})