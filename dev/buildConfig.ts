import { resolve } from 'path';
import type { BuildOptions } from "esbuild";

const WEB_FOLDER = resolve(__dirname, '..', 'web')


export const web: BuildOptions = {
    entryPoints: [resolve(WEB_FOLDER, 'index')],
    // inject: [resolve(__dirname, 'inject.ts')],
    splitting: true,
    format: 'esm',
    loader: {
        '.png': 'file',
        '.svg': 'file',
        '.jpg': 'file',
    }
}