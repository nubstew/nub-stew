require('dotenv').config();
import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./models/User"
import { Board } from "./models/Board"

//db 연결정보 설정하기
export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "192.168.219.103",
    port: 3306,
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "nubstew", // db명
    synchronize: true,
    logging: false,
    entities: [User, Board], //테이블
    migrations: [],
    subscribers: [],
})
