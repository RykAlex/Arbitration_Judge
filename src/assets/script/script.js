let burger = document.querySelector(".menu img");
burger.addEventListener("click", function () {
  let navModal = document.querySelector(".modal");
  navModal.classList.add("show");
  let close = document.querySelector(".modal .close");
  close.addEventListener("click", function () {
    let navModal = document.querySelector(".modal");
    navModal.classList.remove("show");
  });
});
