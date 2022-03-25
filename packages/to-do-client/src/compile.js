const esbuild = require('esbuild');
const glob = require('glob');

const builder = () => esbuild
    .buildSync({
        entryPoints:["src/app.js"],
        bundle: true,
        sourcemap: false,
        minify: false,
        outfile: 'public/dist/build.js',
        loader:{
            '.js':'jsx',
            '.jsx':'js'
        }
    });

builder();