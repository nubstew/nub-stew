import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

interface Board {
    boardId: number;
    title: string;
    content: string;
    writer: string;
  }

const Post = ({ board }: { board: Board }) => {
    return (
        <ListGroup as="ol" numbered>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <Link to={`/board/${board.boardId}`}>
                <div className="fw-bold">{board.title}</div>
                </Link>
                <br/>
                작성자 : {board.writer}
            </div>
            <Badge bg="primary" pill>
                0
            </Badge>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default Post;