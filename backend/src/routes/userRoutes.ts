import { UserController } from "../controllers/UserController"

export const userRoutes = [{
    method: "get", //HTTP 요청방식이에요. 요청방식이 GET이고
    route: "/users", //라우트 경로에요. 경로가 /users인 요청에 대해
    controller: UserController, // UserController의
    action: "all" // all 메소드를 호출해요
}, {
    method: "get",
    route: "/users/:userId",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:userId",
    controller: UserController,
    action: "remove"
}]