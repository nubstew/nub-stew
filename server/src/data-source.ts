import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./models/User"
import { Board } from "./models/Board"

//db 연결정보 설정하기
export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "192.168.219.103",
    port: 3306,
    username: "user",
    password: "940411",
    database: "nubstew",
    synchronize: true,
    logging: false,
    entities: [User, Board],
    migrations: [],
    subscribers: [],
})
