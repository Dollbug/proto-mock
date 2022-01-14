
import restify, { Request, Response, Next, RequestHandlerType } from 'restify';
import mockjs, { MockjsRandom } from 'mockjs';
import {Options} from './index'
type ConfigHandler = (
    req: restify.Request
) => {
    packageName: string;
    serviceName: string;
    methodName: string;
};
type ResponseHandler = (res: restify.Response, data: any) => void;

export interface MockHandlerOptions {
    port?: number,
    parsePathType: 'file' | 'folder',
    protoFilePaths?: string[],
    protoFolderPath?: string,
    getConfigHandler?: ConfigHandler;
    responseHandler?: ResponseHandler;
    hackMockTpl?: (
        key: string,
        type: string,
        random: MockjsRandom
    ) => string | (() => string);
};


const createMockServer = (options: Options, generateMockHandler: (options: Options,
    repository: string) => RequestHandlerType) => {
    const { port = 3003 } = options
    const server = restify.createServer();
    // CORS
    server.use((req: Request, res: Response, next: Next) => {
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        next();
    });

    // PAGE ROUTES
    server.get('/', (req: Request, res: Response, next: Next) => {
        res.end('<h1>Mock server in running !</h1>');
        next();
    });
    // API ROUTES
    server.opts('*', (req, res, next) => {
        res.header(
            'Access-Control-Allow-Methods',
            req.headers['access-control-request-methods']
        );
        res.header(
            'Access-Control-Allow-Headers',
            req.headers['access-control-request-headers']
        );
        res.end();
        next();
    });

    // HANDLER
    const handler = generateMockHandler(options, '/Users/edy/Documents/Whale/open/open-server/infra/proto.infra.develop/acquisition');
    server.get('*', handler);
    server.post('*', handler);

    server.listen(port, 'localhost', () =>
        console.log('%s listening at %s', server.name, server.url)
    )

    // return {
    //     start: (port: number = 3333) =>
    //         server.listen(port, 'localhost', () =>
    //             console.log('%s listening at %s', server.name, server.url)
    //         ),
    // };
};

export default createMockServer