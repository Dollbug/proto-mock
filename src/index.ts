
import restify, { Request, Response, Next, RequestHandlerType } from 'restify';
import { upperFirst, values } from 'lodash';
import createMockServer from './createMockServer'
import mockjs, { MockjsRandom } from 'mockjs';
import path from 'path'
import globby from 'globby';
import shell from 'shelljs';
import protobuf from 'protobufjs';
import { log } from './utils'
import { demo } from './demo'


type ResponseHandler = (res: restify.Response, data: any) => void;


export interface Options {
    port?: number,
    protoPath: string | string[], // 传入字符串，则表示传入的是proto文件夹的地址，传入字符串数组，则表示传入的是具体的proto文件地址
    responseHandler?: ResponseHandler;
    hackMockTpl?: (
        key: string,
        type: string,
        random: MockjsRandom
    ) => string | (() => string);
};




class Mock {
    public port: Options['port'] = 3003;
    public protoPath: Options['protoPath'];
    public protoJsonList = demo;
    public methodList = []

    constructor(private readonly options: Options) {
        const { port, protoPath } = this.options
        this.port = port;
        this.protoPath = protoPath;
        this.start(options)
        this.getMethodFromProtoJSON()
    }

    start(options: Options) {
        createMockServer(options, this.requestHandler)
    }

    requestHandler() {
        return (req: Request, res: Response, next: Next) => {
            const interfaceName = req.params['*'].slice(1)
            const protoInterfaceName = upperFirst(interfaceName)

            next()
        }
    }

    // 从proto json 中获取所有method
    getMethodFromProtoJSON() {
        // const serviceOBj = values(demo)
        // console.log(5555, serviceOBj)

        // const paths = []

        const dfs = (obj: object) => {
            Object.keys(obj).forEach(key => {
                if (key === 'methods') {
                    console.log(44, obj[key])
                }
                if(obj[key] instanceof Object){
                    dfs(obj[key])

                }
            })
        }

        dfs(demo)
    }

    getAllProtoJSON() {
        const protosPath = this.getProtoPaths()
        // 处理proto文件 兼容注释造成的语义分析错误
        shell.sed('-i', /\/\*\/\//g, '/* //', protosPath);
        const protosJSON = protosPath.map(protoPath => {
            this.protoToJSON(protoPath)
        });
        return protosJSON;
    }

    getProtoPaths() {
        let protosPath: string[] = []
        if (this.protoPath instanceof Array) {
            protosPath = this.protoPath
        } else if (typeof this.protoPath === 'string') {
            const absFilePaths = path.join(this.protoPath, '**/*.proto');
            // 启动时读取目录下所有proto文件
            protosPath = globby.sync([absFilePaths]);
        } else {
            log('参数 protoPath 类型错误，如需要指定具体proto文件，请传入文件绝对路径数组；如需要指定proto文件夹，请传入文件夹路径字符串')
        }
        return protosPath
    }

    protoToJSON(protoPath: string) {
        const root = new protobuf.Root();
        return root.loadSync(protoPath, { keepCase: true }).toJSON();
    }




}


const mock = new Mock({
    port: 3003, // 服务启动端口
    protoPath: '/Users/edy/Desktop/proto-mock/src/proto' // proto文件夹路径 绝对路径
})