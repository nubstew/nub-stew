import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from 'cors';
import helmet from 'helmet';
import * as morgan from 'morgan';
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import userRoutes from "./routes/user"
import boardRoutes from "./routes/board"
import { User } from "./models/User"
import { Board } from "./models/Board"
import "reflect-metadata"
require('dotenv').config();

const path = require("path");


// AppDataSource.initialize()
// DB연결을 먼저 시도해서 초기화해요 성공하면 서버가 구동돼요
// 연결은 data-source.ts 정보로 시도해요
AppDataSource.initialize().then(async () => {

    // Express 앱 생성
    const app = express()
    
    /** Express 미들웨어 설정 */
    // cors 설정
    const corsOptions = {
        origin: process.env.HOST_URL, // 요청을 허용할 도메인
    };
    app.use(cors(corsOptions));
    
    // json 형식 데이터 파싱을 위한 미들웨어
    app.use(bodyParser.json())
    // 보안을 위한 http헤더 설정 미들웨어
    app.use(helmet());
     app.use(morgan('dev'));
    app.use(express.json());

    // 라우터 설정
    app.use('/api/users', userRoutes);
    app.use('/api/board', boardRoutes);

    app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
    });

    // 서버 구동
    const port : number = parseInt(process.env.SERVER_PORT);
    app.listen(port, function () {
        console.log('Express 서버열렸어요 ' + port);
    });

    // 테스트 데이터 생성
    // await AppDataSource.manager.save(
    //     AppDataSource.manager.create(Board, {
    //         title: "게시글1",
    //         content: "내용1이에요",
    //         writer: "Alpha"
    //     })
    // )
    // await AppDataSource.manager.save(
    //     AppDataSource.manager.create(Board, {
    //         title: "게시글2",
    //         content: "내용2이에요",
    //         writer: "Beta"
    //     })
    // )
    // await AppDataSource.manager.save(
    //     AppDataSource.manager.create(Board, {
    //         title: "게시글3",
    //         content: "내용3이에요",
    //         writer: "Chalie"
    //     })
    // )
    // await AppDataSource.manager.save(
    //     AppDataSource.manager.create(Board, {
    //         title: "게시글4",
    //         content: "내용4이에요",
    //         writer: "Delta"
    //     })
    // )

}).catch(error => console.log(error))

