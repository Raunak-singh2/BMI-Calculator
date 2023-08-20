const buttonEl = document.getElementById("btn");
const weightConditionEl = document.getElementById("weight-condition");
const vinpResultEl = document.getElementById("inp-result");
buttonEl.addEventListener("click", () => {
  const heightEl = document.getElementById("height").value / 100;
  const weightEl = document.getElementById("weight").value;
  const bmiValue = weightEl / (heightEl * heightEl);
  vinpResultEl.value = bmiValue;
  if (bmiValue <= 14.9) {
    weightConditionEl.innerText = "Under the weight";
  } else if (bmiValue >= 18.9 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "Normal weight";
  } else if (bmiValue >= 24.9 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "Your weight is too fat";
  }
});
