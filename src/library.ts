/**
 * A list of people that can be sorted into teams
 */
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
        const arr = str.split('\n').filter(item => ! /^\s*$/g.test(item));
        return new this(arr);
    }

    /**
     * Get a random element from the array
     * @param del Whether to delete the retrieved item
     */
    getRandom(del = false): string {
        const index = Math.floor(Math.random() * this._arr.length);
        const value = this._arr[index];
        if (del) this._arr.splice(index, 1);
        return value;
    }
    /**
     * Create an array with all the people in this instance
     */
    get array(): string[] {
        return [...this._arr];
    }
}

/**
 *  Sort people into teams
 * @param lista The list of people to sort into teams
 * @param numberOfTeams The number of teams to sort the people into
 */
export function makeTeams(lista: Lista, numberOfTeams: number): string[][] {
    const teams = [];
    while (numberOfTeams > 0 && lista.array.length > 0) {
        const team = [];
        const numberOfPeople = lista.array.length;
        for (let j = 0; j < Math.round(numberOfPeople / numberOfTeams); ++j) {
            team.push(lista.getRandom(true));
        }
        teams.push(team);
        --numberOfTeams;
    }
    return teams;
}
