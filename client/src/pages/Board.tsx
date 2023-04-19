import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../components/Post'
import 'bootstrap/dist/css/bootstrap.min.css';

interface Board {
    boardId: number;
    title: string;
    content: string;
    writer: string;
  }

const Board = (): JSX.Element => {
    // state변수 board, setBoards로 state변경 useState<Board | null> : state가 Board 인터페이스 또는 null을 가질수 있음. ()안에 없으니 초기값 null
    const [boards, setBoards] = useState<Board[] | null>();

    //useEffect 컴포넌트 렌더링될때마다 수행해주세요
    useEffect( () => {
        const instance = axios.create({
            baseURL: 'http://localhost:5000',
        });

        instance.get('/api/board')
        .then( (res) => {
            setBoards(res.data)
        } ).catch( (err) => console.log(err) );
    }, []);

    return (
        <div>
            {
                (boards === null || boards === undefined) ? 
                <div>Loading...</div> : boards.map((board) => 
                <Post board={board} key={board.boardId}/>)
            }
            
        </div>
    )
}

export default Board;