import { devRouter } from 'esbuild-dev-router';
import { web } from './buildConfig';

console.log('DEVELOPMENT RUN');

export default devRouter(web);
