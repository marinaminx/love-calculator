const calculating = 'Kalkuliram ljubav (trazim osobu)';
const result = 'Pronasao jedan rezultat: Marija Zimska <mzimska@ffos.hr>';
const searching = '.';
const numberOfRepetitions = 7;

const calculate = () => {
    console.log(calculating);
    for (let i = 0; i < numberOfRepetitions; i++) {
        console.log(searching);
    }
    console.log(result);
}

window.onload = function() {
    const button = document.getElementById('calculate-button');

    button.addEventListener('click', function() {
        calculate();
    }, false);
};