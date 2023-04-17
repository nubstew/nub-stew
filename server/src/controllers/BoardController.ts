import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { Board } from '../models/Board'

// getRepository로 User 모델과 상호작용하기(테이블 정보 가져오기)
const repository = AppDataSource.getRepository(Board)

export const all = async (req:Request, res:Response): Promise<void> => {
    try {
        const boards = await repository.find();
        res.status(200).send(boards);
    } catch(err) {
        res.status(500).send({
            message : "에러 발생했어요"
        })
    }
}

export const one = async (req: Request, res: Response): Promise<void> => {
    try {
        const boardId = parseInt(req.params.boardId)

        const board = await repository.findOne({
            where: { boardId }
        })
        res.status(200).send(board);
    } catch(err) {
        res.status(500).send({
            message : "에러 발생했어요"
        })
    }
}