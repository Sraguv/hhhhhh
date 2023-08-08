const valueInput = document.querySelector('.amount-input');
const valueInput2 = document.querySelector('.people-input');
const valueSend = document.querySelector('.result');
const valueDelete = document.querySelector('.reset');
const valueChoice = document.querySelector('.tips');

const hidden = document.querySelectorAll(".argument2")
let tip = document.querySelector(".tip")
let people = document.querySelector(".sum")

valueSend.addEventListener("click", () => {
    if (valueChoice.value == "0%") {
        let sum = valueInput.value * 0 / valueInput2.value;
        tip.textContent = String(sum) + "₽";
        people.textContent = String(valueInput.value / valueInput2.value + sum) + "₽";
    }
    else if (valueChoice.value == "5%") {
        let sum = valueInput.value * 0.05 / valueInput2.value;
        tip.textContent = String(sum) + "₽";
        people.textContent = String(valueInput.value / valueInput2.value + sum) + "₽";
    }
    else if (valueChoice.value == "10%") {
        let sum = valueInput.value * 0.10 / valueInput2.value;
        tip.textContent = String(sum) + "₽";
        people.textContent = String(valueInput.value / valueInput2.value + sum) + "₽";
    }
    else if (valueChoice.value == "15%") {
        let sum = valueInput.value * 0.15 / valueInput2.value;
        tip.textContent = String(sum) + "₽";
        people.textContent = String(valueInput.value / valueInput2.value + sum) + "₽";
    }
        else {
            tip.textContent = String("Данные введены неверно");
            people.textContent = String("Данные введены неверно");
        }
        hidden.forEach((element) => {
            element.textContent = "(с каждого)";
            
        });
    });

            valueDelete.addEventListener("click", () => {
                tip.textContent = null;
                people.textContent = null;
                hidden.forEach((element) => {
                    element.textContent = "";
                });
});