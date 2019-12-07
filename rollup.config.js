import typescript from 'rollup-plugin-typescript';
import serve from 'rollup-plugin-serve';

let dev = process.env.NODE_ENV === 'development';

export default {
    input: 'src/web.ts',
    plugins: [
        typescript(),
        dev && serve({
            contentBase: 'public',
            port: 8080,
        }),
    ],
    output: {
        file: 'public/bundle.js',
        format: 'iife',
    },
};