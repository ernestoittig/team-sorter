export class Lista {
    private _arr: string[];

    constructor(arr: string[]) {
        this._arr = arr;
    }
    /**
     * Makes a new instance from a string separated by new lines.
     * 
     * Whitespace and empty lines are ignored
     * @param str 
     */
    static fromString(str: string) {
        let arr = str.split('\n').filter(item => ! /^\s*$/g.test(item));
        return new this(arr);
    }

    /**
     * Get a random element from the array
     * @param del Whether to delete the retrieved item
     */
    getRandom(del = false): string {
        let index = Math.floor(Math.random() * this._arr.length);
        let value = this._arr[index];
        if (del) this._arr.splice(index, 1);
        return value;
    }
    get array(): string[] {
        return [...this._arr];
    }
}

export function makeTeams(lista: Lista, numberOfTeams: number): string[][] {
    let teams = [];
    while (numberOfTeams > 0 && lista.array.length > 0) {
        let team = [];
        let numberOfPeople = lista.array.length;
        for (let j = 0; j < Math.round(numberOfPeople / numberOfTeams); ++j) {
            team.push(lista.getRandom(true));
        }
        teams.push(team);
        --numberOfTeams;
    }
    return teams;
}