window.addEventListener("DOMContentLoaded", () => {
  const buttonCallForlModalWindow = document.querySelector(".btn__try")
  const modalWindow = document.querySelector(".modal")
  const buttonCloseModalWindow = document.querySelectorAll(".btn__close")

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
})