const esbuild = require('esbuild');
const { createReadStream, createWriteStream } = require('fs');

esbuild.build({
    entryPoints: ['blog/main.ts'],
    bundle: true,
    loader: {
        '.ts': 'ts'
    },
    target: 'es6',
    sourcemap: true,
    outfile: 'dist/blog/main.js'
})
    .then(() => {
        createReadStream('blog/blog.html').pipe(
            createWriteStream('dist/blog/index.html')
        );
    })
    .catch(() => process.exit(1));
