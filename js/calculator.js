const calculating = 'Kalkuliram ljubav (trazim osobu)';
const result = 'Pronasao jedan rezultat: Marija Zimska <mzimska@ffos.hr>';
const searching = '.';
const numberOfRepetitions = 7;

const calculate = () => {
    const target = document.getElementById('container');

    let element = document.createElement('p');
    element.innerText = calculating;
    target.appendChild(element);

    for (let i = 0; i < numberOfRepetitions; i++) {
        let element = document.createElement('p');
        element.innerText = searching;
        target.appendChild(element);
    }
    let element2 = document.createElement('p');
    element2.innerText = result;
    target.appendChild(element2);
}

window.onload = function() {
    const button = document.getElementById('calculate-button');

    button.addEventListener('click', function() {
        calculate();
    }, false);
};