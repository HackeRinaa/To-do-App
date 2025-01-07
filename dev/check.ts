import { spawn, SpawnOptions } from 'child_process';
import { resolve } from 'path';


const ROOT = resolve(__dirname, '..');

console.log('Checking code for errors...');
(async () => {

    console.time('Finished');

    {
        console.log('Checking web');
        const code = await execute('npx tsc --noEmit', {
            cwd: resolve(ROOT, 'web')
        });
        if (!code) console.log('OK');
    }

    {
        console.log('Checking src');
        const code = await execute('npx tsc --noEmit', {
            cwd: resolve(ROOT, 'src')
        });
        if (!code) console.log('OK');
    }

    console.timeEnd('Finished');


})()


async function execute(command: string, options?: SpawnOptions) {
    return new Promise<number>((resolve, reject) => {
        const [comm, ...params] = command.split(' ');

        const proc = spawn(comm, params, {
            ...options,
            stdio: 'inherit',
            shell: true

        });

        proc.on('exit', (c: number) => {
            resolve(c)
        })
    })
}