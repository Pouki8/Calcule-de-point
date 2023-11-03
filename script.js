const calculButtons = document.querySelectorAll(".calcul");
const resultElements = document.querySelectorAll(".result");
const points = [0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < calculButtons.length; i++) {
  calculButtons[i].addEventListener("click", () => {
    points[i]++;
    resultElements[i].innerText = `${points[i]} point(s)`;
  });
}
