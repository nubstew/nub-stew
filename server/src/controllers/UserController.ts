import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { User } from "../models/User"
import { stringify } from 'querystring'

// getRepository로 User 모델과 상호작용하기(테이블 정보 가져오기)
const repository = AppDataSource.getRepository(User)

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id)

        const user = await repository.findOne({
                         where: { id }
                     })
      res.status(200).send(user);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

export const getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await repository.find();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).send('Server Error');
    }
  };

export const insertUser = async (req: Request, res: Response) => {
    try {
        const { userId, userPassword, name } = req.body;
    
        const user = Object.assign(new User(), {
            userId,
            userPassword,
            name
        })
        // 오브젝트에 담은거 저장하기
        await repository.save(user)

            // 성공시 코드와 메세지 리턴
            return res.status(200).json({
                message: "사용자 정보가 저장되었습니다."
            })
        } catch(err) {
            //예외처리
            console.log(err)
            return res.status(500).json({
                message: "서버 내부 오류가 발생했습니다."
            })
        }
    }

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId

        // 사용자 아이디로 찾아서
        let userToRemove = await repository.findOneBy({ userId })

        //삭제시도했는데 안되면
        if (!userToRemove) {
            // 성공시 코드와 메세지 리턴
            return res.status(200).json({
                message: "사용자 정보가 없습니다."
            })
        }

        await repository.remove(userToRemove)

        return res.status(200).json({
            message: "사용자 삭제되었습니다."
        })
    } catch (err) {
        //예외처리
        console.log(err)
        return res.status(500).json({
            message: "서버 내부 오류가 발생했습니다."
        })
    }
}



//     // 저장하기
//     async save(request: Request, response: Response, next: NextFunction) {
//         try {
//             const { userId, userPassword, name } = request.body;
    
//             const user = Object.assign(new User(), {
//                 userId,
//                 userPassword,
//                 name
//             })

// export class UserController {
    
//     // getRepository로 User 모델과 상호작용하기(테이블 정보 가져오기)
//     private repository = AppDataSource.getRepository(User)

//     // 테이블 전체 조회
//     async all(request: Request, response: Response, next: NextFunction) {
//         try {
//             const users = this.repository.find()

//             return response.status(200).send({
//                 users: users
//             })
//         } catch (err) {
//             console.log(err)
//             return response.status(500).send({
//                 message: "서버 내부 오류가 발생했습니다."
//             })
//         }
//     }

//     // 단일 조회
//     async one(request: Request, response: Response, next: NextFunction) {
//         const userId = parseInt(request.params.userId)

//         const user = await this.repository.findOne({
//             where: { userId }
//         })

//         if (!user) {
//             return "unregistered user"
//         }
//         return user
//     }

//     // 저장하기
//     async save(request: Request, response: Response, next: NextFunction) {
//         try {
//             const { userId, userPassword, name } = request.body;
    
//             const user = Object.assign(new User(), {
//                 userId,
//                 userPassword,
//                 name
//             })
    
//             // 오브젝트에 담은거 저장하기
//             await this.repository.save(user)
    
//             // 성공시 코드와 메세지 리턴
//             return response.status(200).json({
//                 message: "사용자 정보가 저장되었습니다."
//             })
//         } catch(err) {
//             //예외처리
//             console.log(err)
//             return response.status(500).json({
//                 message: "서버 내부 오류가 발생했습니다."
//             })
//         }
//     }

//     // 삭제하기
//     async remove(request: Request, response: Response, next: NextFunction) {
//         const userId = parseInt(request.params.userId)

//         // 사용자 아이디로 찾아서
//         let userToRemove = await this.repository.findOneBy({ userId })

//         //삭제시도했는데 안되면
//         if (!userToRemove) {
//             return "사용자가 존재하지 않습니다."
//         }

//         await this.repository.remove(userToRemove)

//         return "사용자 삭제되었습니다."
//     }

// }