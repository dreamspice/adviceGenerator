const adviceContainer = document.getElementById('adviceContainer');
const getAdviceButton = document.getElementById('getAdviceButton');
const idContainer = document.getElementById('idContainer');



function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(adviceObject => {
        const adviceData = adviceObject.slip.advice;
        const adviceId = adviceObject.slip.id;
        idContainer.textContent = `#${adviceId}`;
        adviceContainer.innerHTML = `<p>"${adviceData}"</p>`;
    }).catch(error => {
        console.log(error);
    })
};

getAdviceButton.addEventListener('click', getAdvice);
window.onload = () => {
    getAdvice();
};