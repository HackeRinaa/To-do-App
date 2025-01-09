import express from 'express';
import { resolve } from 'path';

const {
    HTTP_PORT = '5000'
} = process.env;


const app = express();
app.listen(+HTTP_PORT, function (this: any) {
    const { address, port } = this.address();
    console.log(`Listening  ${address}:${port}`);
})

if (process.env.NODE_ENV === 'production') {
    // In pruduction, it runs from dist and serves from dist/web
    app.use(express.static(resolve(__dirname, 'web')));
} else {
    const router = express.Router();
    app.use(router);
    import('../dev/devRouter').then(({ default: devRouter }) => {
        router.use(devRouter);
    })
    // app.use(require('../dev/devRouter').default);
}


app.use(express.static(resolve(__dirname, '../public')));