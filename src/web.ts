import { Lista, makeTeams } from './library';

const gebiInput = (arg: string) =>  <HTMLInputElement> document.getElementById(arg);

document.getElementById('default').addEventListener('click', () => {
    gebiInput('people').value = 'Ernesto Ittig\nFrancesca Modena\nTriana Macedo';
    gebiInput('groups').value = '2';
});

document.getElementById('teams-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const people: string = gebiInput('people').value;
    const groups = parseInt(gebiInput('groups').value);
    const teams = makeTeams(Lista.fromString(people), groups);

    let result = '';

    for (let i = 0; i < teams.length; ++i) {
        result += `<h2>Grupo ${i+1}</h2>
    <ul>`;
        for (const x of teams[i]) {
            result += `<li>${x}</li>\n`;
        }
        result += '</ul>';
    }

    document.querySelector('.result').innerHTML = result;
}, false);