import { Lista, makeTeams } from '../src/library';
import { expect } from 'chai';
import 'mocha';

describe('Lista', () => {
    describe('constructor', () => {
        it('should make an instance with all the elements of the array', () => {
            expect(new Lista(['a', 'b', 'c']).array).to.be.deep.equal(['a', 'b', 'c']);
            const weirdArray = ['233535', '32523535', '23555', 'ethehehwrth', '[]][kthkth', '093938069'];
            expect(new Lista(weirdArray).array).to.be.deep.equal(weirdArray);
        });
    });
    describe('#fromString', () => {
        it('should make an instance with element from a string', () => {
            expect(Lista.fromString('a\nb\nc').array).to.be.deep.equal(['a', 'b', 'c']);
            expect(Lista.fromString('    \na\n    \nb\nc\n').array).to.be.deep.equal(['a', 'b', 'c']);
        });
    });
});

describe('makeTeams', () => {
    it('should sort people into teams', () => {
        expect(makeTeams(new Lista('abcdefgh'.split('')), 4)).has.lengthOf(4)
            .and.satisfies((arr: string[][]) => arr.every(v => v.length = 2));
    });
    it('should sort people into teams even if the number of teams is not divisible by the number of people', () => {
        expect(makeTeams(new Lista(['a', 'b', 'c']), 2))
            .to.satisfy((arr: string[][]) => arr[0].length === 2 && arr[1].length === 1);
    });
    it('should return an empty array if there are 0 teams or 0 people', () => {
        expect(makeTeams(new Lista(['a', 'b', 'c']), 0)).to.be.empty;
        expect(makeTeams(new Lista([]), 2)).to.be.empty;
    });
});