Small library for sorting people into teams

## Example Usage
```ts
import { Lista, makeTeams } from 'team-sorter';

const people = new Lista(['Person 1', 'Person 2', 'Person 2']);
// Sort people into 2 teams
console.log(makeTeams(people, 2));
```
### Documentation
The documentation can be found [here](doc/globals.md)

Additionaly, if you clone the repository, you can use the following implementations:

### Node.js

In order to use the Node.js implementation, you need to build it first:
```sh
npm install # Install all the dependencies if you haven't already
npm run build # Will compile all the typescript into the dist directory
```
You should include a list of all the people you want to sort into teams in the `people` file

Then you're ready to run the program:
```sh
npm start
```
Example output:
```
How many teams? 2
```
```javascript
[ [ 'Ernesto Ittig', 'Triana Macedo' ], [ 'Francesca Modena' ] ]
```

### Web

In order to use the web implementation, you need to build it first:
```sh
npm install # Install all the dependencies if you haven't already
npm run web:build # Will compile all the typescript into the public directory
```

Now, the bundle should be in the public directory. You should be able to host this however you want, but
if you want to test it, you can either open the `index.html` with your browser, or run `npm run web:start` to
start a test web server.
