let buttons = document.querySelectorAll("button");
let text = document.querySelectorAll(".tab-text");
let classes = ["London", "Paris", "Tokyo"];

buttons.forEach((items, index) => {
  items.addEventListener("click", function () {
    text.forEach((item) => {
      item.classList.add("hidden");
    });
    text[index].classList.remove("hidden");
    buttons.forEach((item) => {
      item.classList.add("back");
    });
    buttons[index].classList.remove("back");

    classes.forEach((className, index) => {
      buttons[index].classList.add(className);
      text[index].classList.add(className);
    });
  });
});
