import { build, BuildOptions } from 'esbuild';
import { web } from './buildConfig';
import { rm } from 'fs/promises';
import { resolve } from 'path';

const ROOT_FOLDER = resolve(__dirname, '..');
console.log('Root folder: ', ROOT_FOLDER)

const common: BuildOptions = {
    bundle: true,
    // color: true,
    logLevel: 'info',
    minify: true,
    define: {
        'process.env.NODE_ENV': '"production"'
    },
};

(async () => {

    console.log('Removing dist dir');
    await rm(resolve(ROOT_FOLDER, 'dist'), { recursive: true, force: true });


    console.log('');
    console.log('Building server...');

    await build({
        ...common,
        platform: 'node',
        target: 'node20',
        format: 'cjs',
        packages: 'bundle',
        // external: ['express'],
        entryPoints: [resolve(ROOT_FOLDER, 'src/server.ts')],
        outdir: resolve(ROOT_FOLDER, 'dist'),
    });


    console.log('');
    console.log('Building web...');

    await build({
        ...web,
        ...common,
        outdir: resolve(ROOT_FOLDER, 'dist/web'),
    });


})();