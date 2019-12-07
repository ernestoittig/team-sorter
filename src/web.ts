import { Lista, makeTeams } from './library';

let gebi = (arg: string) =>  document.getElementById(arg);
let gebiInput = (arg: string) =>  <HTMLInputElement> gebi(arg);
let qs = (q): HTMLElement => document.querySelector(q);

gebi('default').addEventListener('click', () => {
    gebiInput('people').value = 'Ernesto Ittig\nFrancesca Modena\nTriana Macedo';
    gebiInput('groups').value = '2';
});

gebi('teams-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const people: string = gebiInput('people').value;
    const groups = parseInt(gebiInput('groups').value);
    let teams = makeTeams(Lista.fromString(people), groups);

    let result = '';

    for (let i = 0; i < teams.length; ++i) {
        result += `<h2>Grupo ${i+1}</h2>
    <ul>`;
        for (let x of teams[i]) {
            result += `<li>${x}</li>\n`;
        }
        result += '</ul>';
    }

    qs('.result').innerHTML = result;
}, false);