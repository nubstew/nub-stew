import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from 'cors';
import helmet from 'helmet';
// import morgan from 'morgan';
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { userRoutes } from "./routes/userRoutes"
import { User } from "./models/User"
import "reflect-metadata"


// AppDataSource.initialize()
// DB연결을 먼저 시도해서 초기화해요 성공하면 서버가 구동돼요
AppDataSource.initialize().then(async () => {

    // Express 앱 생성
    const app = express()
    // json 형식 데이터 파싱을 위한 미들웨어
    app.use(bodyParser.json())
    // app.use(bodyParser.urlencoded({ extended: false }));

    // 라우트 정의된걸로 라우트 경로 생성하기
    userRoutes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    // Express 미들웨어 설정
    app.use(cors());
    app.use(helmet());
    // app.use(morgan('dev'));
    // app.use(express.json());

    // 서버 구동
    const port : number = 80;
    app.listen(port, function () {
        console.log('Express 서버열렸어요 '+{port});
    }); 

    // 프론트엔드 경로 설정
    const path = require('path');
    app.use(express.static(path.join(__dirname, '../../frontend/build')));

    app.get('/', (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, '../../frontend/build/index.html'));
    })



    // 테스트 데이터 생성
    // await AppDataSource.manager.save(
    //     AppDataSource.manager.create(User, {
    //         id: "test1",
    //         password: "1234",
    //         name: "Alpha"
    //     })
    // )

    // await AppDataSource.manager.save(
    //     AppDataSource.manager.create(User, {
    //         id: "test2",
    //         password: "5678",
    //         name: "Beta"
    //     })
    // )

}).catch(error => console.log(error))
