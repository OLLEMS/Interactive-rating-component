var Sbtn = document.querySelector(".Submit");
var btn = document.querySelectorAll(".button");
const img = document.querySelector(".star");
var btns = document.querySelector(".buttons");
const rating = document.querySelector(".How");
var thanks = document.querySelector(".PText");
var selectedRating = null;

function handleButtonClick(clickedButton) {
  btn.forEach(function (button) {
    button.style.background = "rgb(50, 49, 61)";
    button.style.color = "rgb(134, 134, 134)";
    button.style.transition = "all 0.6s ease";
  });

  clickedButton.style.background = "rgb(252, 118, 20)";
  clickedButton.style.color = "white";

  selectedRating = clickedButton.id;
}

btn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    handleButtonClick(this);
  });
});

Sbtn.addEventListener("click", function Html_troca(event) {
  if (selectedRating !== null) {
    this.style.background = "white";
    this.style.color = "rgb(252, 118, 20)";
    this.style.transition = "all 0.8s ease";

    img.setAttribute("src", "images/illustration-thank-you.svg");
    img.style.cssText =
      "margin-left: 75px; background: none; border-radius: 0;";
    rating.style.cssText =
      "transition: all 0.7s ease-out;;text-itens: center; font-size: 15px; color: rgb(255 152 76); border-radius: 50px; background: #2a3445; display: flex; justify-content: center; margin-right: 105px; margin-left:78px;padding-left: 5px; padding-top: 3px; padding-bottom: 3px;font-weight: 500;";
    rating.innerHTML = `You selected ${selectedRating}  out of 5   🎉`;
    thanks.style.cssText =
      "transition: 1s ease-in;margin-bottom: 15px; font-size: 30px; font-weight: 700; text-align: center;margin-right: 18px";
    thanks.innerHTML = "Thank you!";
    btns.style.cssText =
      "display: block;padding: 22px;padding-top: 0px;padding-left: 0px;text-align: center;color: rgb(124 130 142);line-height: 1.8vh;";
    btns.innerHTML =
      "We appreciate you taking the time to give a rating.</br> If you ever need more support, don’t hesitate to</br> get in touch!";
  } else {
    alert("Please select a rating before submitting.");
  }
});
