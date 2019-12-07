import { Lista, makeTeams } from './library';
import { readFileSync } from 'fs';
import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

let ask = (query: string): Promise<string> => new Promise((reslove) => {
    rl.question(query, input => reslove(input));
});

async function main() {
    let people = readFileSync('people', 'utf8');
    let n = parseInt(await ask('How many teams? '));
    console.log(makeTeams(Lista.fromString(people), n));
    rl.close();
}

main();